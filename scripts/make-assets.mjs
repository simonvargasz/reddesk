/**
 * Genera los assets rasterizados que la maqueta no traía: juego de favicons,
 * icono de Apple, iconos PWA y una OG image por idioma.
 *
 * Rasteriza con la IBM Plex Mono real: @fontsource sólo publica woff/woff2 y
 * fontconfig (que es lo que usa librsvg por debajo de sharp) sólo lee SFNT,
 * así que el WOFF se convierte a TTF y se expone por XDG_DATA_HOME. Sin esto
 * las letras "rd" del icono saldrían en la mono del sistema.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { woffToTtf } from './woff2ttf.mjs';
import { buildBanner } from '../src/lib/ascii.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public');
const fontHome = path.join(root, 'node_modules', '.rd-fonts');
const fontDir = path.join(fontHome, 'fonts');

const C = {
  red: '#8C1420',
  redInk: '#FF4A54',
  black: '#1A1413',
  graphite: '#2A2724',
  ink: '#FFFFFF',
  ink2: '#D6D2CD',
  ink4: '#9A958F',
};

/* ---------- fuente ---------- */
fs.mkdirSync(fontDir, { recursive: true });
const faces = [
  ['ibm-plex-mono-latin-500-normal.woff', 'IBMPlexMono-Medium.ttf'],
  ['ibm-plex-mono-latin-600-normal.woff', 'IBMPlexMono-SemiBold.ttf'],
];
for (const [src, dest] of faces) {
  const from = path.join(root, 'node_modules/@fontsource/ibm-plex-mono/files', src);
  fs.writeFileSync(path.join(fontDir, dest), woffToTtf(fs.readFileSync(from)));
}
process.env.XDG_DATA_HOME = fontHome;
try { execFileSync('fc-cache', ['-f', fontDir], { stdio: 'ignore' }); } catch { /* opcional */ }

const MONO = 'IBM Plex Mono Medium, DejaVu Sans Mono, monospace';

/* sharp se carga después de fijar XDG_DATA_HOME: fontconfig lee el entorno
   al inicializarse y no vuelve a mirarlo. */
const { default: sharp } = await import('sharp');

const render = async (svg, width, height, file) => {
  await sharp(Buffer.from(svg), { density: 384 })
    .resize(width, height, { fit: 'fill' })
    .png({ compressionLevel: 9 })
    .toFile(path.join(out, file));
  console.log('  ·', file);
};

/* ---------- icono ---------- */
const iconSvg = (rx) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="${rx}" fill="${C.red}"/>
  <text x="15.2" y="22.2" font-family="${MONO}" font-weight="500" font-size="16"
        fill="${C.ink}" text-anchor="middle">rd</text>
</svg>`;

/* ---------- OG ---------- */
const asciiRaw = fs.readFileSync(path.join(root, 'src/assets/ascii-logo.txt'), 'utf8');
const banner = buildBanner(asciiRaw, { red: C.redInk, ink: C.ink, sep: C.red });

const host = (() => {
  try { return new URL(process.env.RD_SITE ?? 'https://reddesk.com').host.toUpperCase(); }
  catch { return 'REDDESK.COM'; }
})();

const ogSvg = (tagline) => {
  const W = 1200, H = 630, PAD = 96;
  const scale = (W - PAD * 2) / banner.width * 0.82;
  const bw = banner.width * scale;
  const bh = banner.height * scale;
  const bx = PAD;
  const by = (H - bh) / 2 - 10;

  const rects = banner.rects
    .map((r) => `<rect x="${(r.x * scale).toFixed(2)}" y="${(r.y * scale).toFixed(2)}" width="${(r.w * scale).toFixed(2)}" height="${(r.h * scale).toFixed(2)}" fill="${r.fill}"/>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${C.black}"/>
  <g transform="translate(${bx} ${by})">${rects}</g>
  <text x="${PAD}" y="${by + bh + 62}" font-family="${MONO}" font-size="24" letter-spacing="3.8" fill="${C.ink2}"><tspan fill="${C.redInk}">$</tspan> ${tagline.toUpperCase()}</text>
  <rect x="${PAD}" y="${H - 108}" width="${W - PAD * 2}" height="1" fill="${C.graphite}"/>
  <text x="${PAD}" y="${H - 66}" font-family="${MONO}" font-size="17" letter-spacing="2.6" fill="${C.ink4}">${host}</text>
  <rect x="${W - PAD - 13}" y="${H - 82}" width="13" height="21" fill="${C.redInk}"/>
</svg>`;
};

/* ---------- favicon.ico: contenedor ICO con un PNG de 32px dentro ---------- */
const icoFromPng = (png) => {
  const dir = Buffer.alloc(22);
  dir.writeUInt16LE(0, 0);          // reservado
  dir.writeUInt16LE(1, 2);          // tipo: icono
  dir.writeUInt16LE(1, 4);          // una imagen
  dir.writeUInt8(32, 6);            // ancho
  dir.writeUInt8(32, 7);            // alto
  dir.writeUInt8(0, 8);             // paleta
  dir.writeUInt8(0, 9);             // reservado
  dir.writeUInt16LE(1, 10);         // planos
  dir.writeUInt16LE(32, 12);        // bits por píxel
  dir.writeUInt32LE(png.length, 14);
  dir.writeUInt32LE(22, 18);        // offset de los datos
  return Buffer.concat([dir, png]);
};

/* ---------- ejecución ---------- */
fs.mkdirSync(path.join(out, 'og'), { recursive: true });
console.log('assets:');

fs.writeFileSync(path.join(out, 'favicon.svg'), iconSvg(5));

await render(iconSvg(5), 192, 192, 'icon-192.png');
await render(iconSvg(5), 512, 512, 'icon-512.png');
await render(iconSvg(0), 180, 180, 'apple-touch-icon.png');

const ico32 = await sharp(Buffer.from(iconSvg(5)), { density: 384 })
  .resize(32, 32).png({ compressionLevel: 9 }).toBuffer();
fs.writeFileSync(path.join(out, 'favicon.ico'), icoFromPng(ico32));
console.log('  · favicon.ico');

const taglines = {
  es: 'Soluciones digitales a medida',
  en: 'Digital systems, built to fit',
  pt: 'Soluções digitais sob medida',
};
for (const [lang, tagline] of Object.entries(taglines)) {
  await render(ogSvg(tagline), 1200, 630, `og/og-${lang}.png`);
}
