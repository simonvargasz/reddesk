/**
 * Geometría del banner ASCII, compartida por el componente de la página y
 * por el generador de assets (OG images), para que nunca diverjan.
 *
 * Se genera una rejilla de <rect> en vez de texto en un <pre> porque IBM Plex
 * Mono no contiene U+2588 (█) ni U+2581 (▁): en texto, los bloques saldrían de
 * una fuente de respaldo y los espacios de Plex, con avances distintos, y el
 * arte se cizallaría.
 */
export const COL_W = 0.6;    // avance de un carácter mono, en em
export const ROW_H = 1.16;   // interlineado fijado por el handoff
export const BLOCK_H = 1.06;
export const SPLIT = 21;     // última columna de "RED"

export const RED = 'var(--rd-red-ink)';
export const INK = 'var(--rd-ink)';
export const SEP = 'var(--rd-red)';

/** @returns {{rects: {r:number,x:number,y:number,w:number,h:number,fill:string}[], width:number, height:number, rows:number}} */
export function buildBanner(raw, palette = { red: RED, ink: INK, sep: SEP }) {
  const rows = raw.replace(/\r/g, '').split('\n').filter((l) => l.includes('█'));
  const cols = Math.max(...rows.map((r) => r.length));
  const rects = [];

  rows.forEach((row, r) => {
    const y = r * ROW_H;
    let run = -1;

    const flush = (end) => {
      if (run === -1) return;
      rects.push({
        r,
        x: run * COL_W,
        y,
        w: (end - run) * COL_W,
        h: BLOCK_H,
        fill: run < SPLIT ? palette.red : palette.ink,
      });
      run = -1;
    };

    for (let c = 0; c < cols; c += 1) {
      const ch = row[c];
      if (ch === '█') {
        if (run === -1) run = c;
        // Un tramo nunca cruza la frontera de color.
        else if (run < SPLIT && c >= SPLIT) { flush(c); run = c; }
      } else {
        flush(c);
        if (ch === '▁') {
          // Un octavo de bloque, apoyado en la base de su celda.
          rects.push({
            r,
            x: c * COL_W,
            y: y + BLOCK_H * (7 / 8),
            w: COL_W,
            h: BLOCK_H / 8,
            fill: palette.sep,
          });
        }
      }
    }
    flush(cols);
  });

  return {
    rects,
    rows: rows.length,
    width: cols * COL_W,
    height: (rows.length - 1) * ROW_H + BLOCK_H,
  };
}
