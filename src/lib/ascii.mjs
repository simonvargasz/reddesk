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

/**
 * Variante apilada para pantallas estrechas: "red_" sobre "desk".
 * Comparte escala entre las dos líneas (un solo viewBox), así que los bloques
 * miden lo mismo arriba y abajo; en un teléfono el logo pasa de ~60px de alto
 * a ~260px sin tocar el arte original.
 */
export const STACK_SPLIT = 22;  // primera columna de "DESK" (el "_" cierra "RED")
export const STACK_GAP = ROW_H; // una fila en blanco entre ambas líneas

export function buildStackedBanner(raw, palette = { red: RED, ink: INK, sep: SEP }) {
  const { rects, rows } = buildBanner(raw, palette);
  const cut = STACK_SPLIT * COL_W;
  const lineH = (rows - 1) * ROW_H + BLOCK_H;

  const top = rects.filter((rc) => rc.x < cut);
  const bottom = rects.filter((rc) => rc.x >= cut);
  const offX = Math.min(...bottom.map((rc) => rc.x));

  const all = [
    // El "_" cierra "RED" al final de la primera línea: solo suelto se lee como
    // subrayado, así que se ensancha a dos celdas y se acerca a la D.
    ...top.map((rc) => (rc.fill === palette.sep
      ? { ...rc, x: rc.x - COL_W, w: COL_W * 2 }
      : rc)),
    ...bottom.map((rc) => ({
      ...rc,
      r: rc.r + rows,
      x: rc.x - offX,
      y: rc.y + lineH + STACK_GAP,
    })),
  ];

  return {
    rects: all,
    rows: rows * 2,
    width: Math.max(...all.map((rc) => rc.x + rc.w)),
    height: lineH * 2 + STACK_GAP,
  };
}
