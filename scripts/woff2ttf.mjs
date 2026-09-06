import { inflateSync } from 'node:zlib';

/**
 * WOFF1 -> SFNT (TTF). WOFF1 comprime cada tabla con zlib, así que la
 * conversión sale con el zlib de Node y sin dependencias nuevas.
 * Hace falta porque @fontsource sólo publica woff/woff2 y fontconfig
 * (el que usa librsvg al rasterizar) sólo lee SFNT.
 */
export function woffToTtf(buf) {
  if (buf.toString('latin1', 0, 4) !== 'wOFF') throw new Error('no es un WOFF1');

  const flavor = buf.readUInt32BE(4);
  const numTables = buf.readUInt16BE(12);

  const entries = [];
  for (let i = 0; i < numTables; i += 1) {
    const p = 44 + i * 20;
    entries.push({
      tag: buf.subarray(p, p + 4),
      offset: buf.readUInt32BE(p + 4),
      compLength: buf.readUInt32BE(p + 8),
      origLength: buf.readUInt32BE(p + 12),
      checksum: buf.readUInt32BE(p + 16),
    });
  }

  for (const e of entries) {
    const raw = buf.subarray(e.offset, e.offset + e.compLength);
    e.data = e.compLength < e.origLength ? inflateSync(raw) : raw;
  }
  entries.sort((a, b) => a.tag.compare(b.tag));

  const pad4 = (n) => (n + 3) & ~3;
  const dirSize = 12 + numTables * 16;
  let cursor = dirSize;
  for (const e of entries) {
    e.outOffset = cursor;
    cursor += pad4(e.data.length);
  }

  const out = Buffer.alloc(cursor);
  const maxPow2 = 2 ** Math.floor(Math.log2(numTables));
  out.writeUInt32BE(flavor, 0);
  out.writeUInt16BE(numTables, 4);
  out.writeUInt16BE(maxPow2 * 16, 6);
  out.writeUInt16BE(Math.log2(maxPow2), 8);
  out.writeUInt16BE(numTables * 16 - maxPow2 * 16, 10);

  entries.forEach((e, i) => {
    const p = 12 + i * 16;
    e.tag.copy(out, p);
    out.writeUInt32BE(e.checksum, p + 4);
    out.writeUInt32BE(e.outOffset, p + 8);
    out.writeUInt32BE(e.data.length, p + 12);
    e.data.copy(out, e.outOffset);
  });

  return out;
}
