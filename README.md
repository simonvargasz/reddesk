# Red Desk — landing

Una sola página, estática, en tres idiomas (`/es/`, `/en/`, `/pt/`).
Astro + CSS plano. Sin CMS, sin rastreadores, sin backend.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run preview

npm run assets   # sólo si cambia el banner o las taglines
```

`npm run assets` regenera favicons, iconos PWA y la OG image de cada idioma a
partir de `src/assets/ascii-logo.txt`. **Está fuera del `build` a propósito y su
resultado se versiona**: si el host de despliegue no tuviera fontconfig, un
build allí regeneraría los iconos con una fuente de respaldo sin avisar. Salen
bytes idénticos en cada ejecución, así que versionarlos no ensucia los diffs.

## Lo que falta rellenar

Todo vive en **`src/config.ts`** y está marcado con `TODO`. La página compila y
funciona sin ninguno de estos datos; degrada de forma visible en vez de romperse.

| Constante | Qué es | Si falta |
|---|---|---|
| `SITE` | dominio definitivo | canonical, `og:url`, hreflang y sitemap apuntan a `reddesk.com` |
| `EMAIL` | correo público | se usa el `hola@reddesk.com` del handoff |
| `LINKEDIN` | URL del perfil | el enlace no se renderiza en ninguna parte |
| `WEB3FORMS_KEY` | access key de [web3forms.com](https://web3forms.com) (gratis, sin servidor) | el formulario sale deshabilitado con un aviso y el correo directo pasa a ser el canal |

## Estructura

```
src/
  config.ts            constantes de despliegue
  assets/              ascii-logo.txt (el banner es esto)
  lib/ascii.mjs        retícula del banner, compartida con el generador de OG
  styles/              tokens.css (del handoff) + global.css
  i18n/                es.ts es la fuente de verdad; en.ts y pt.ts la satisfacen
  layouts/Base.astro   head, hreflang, OG, JSON-LD, skip-link
  components/          banner, header, footer, terminal, formulario
  pages/
    index.astro        raíz: elige idioma
    [lang]/index.astro la landing
    404.astro
```

Todo el copy está en `src/i18n/`. Editar un texto no toca ni una plantilla, y
`en.ts`/`pt.ts` están tipados contra `es.ts`: si se añade una clave y falta en un
idioma, el build lo dice.

## Despliegue

Estático. `dist/` va tal cual a Netlify, Vercel, Cloudflare Pages o cualquier
servidor de ficheros.

La raíz elige idioma en dos capas, para no depender del host:

1. `public/_redirects` — reglas `Language=` de Netlify (redirección real, sin JS).
2. `src/pages/index.astro` — si el host no las soporta, un script mira
   `navigator.languages`. Sin JS queda un selector visible, que es además la
   página de `x-default`.

En Cloudflare Pages o Vercel la capa 1 no se aplica; funciona la 2.

## Notas de implementación

**El banner ASCII es SVG, no texto.** IBM Plex Mono no contiene U+2588 (`█`) ni
U+2581 (`▁`) en ningún subconjunto. En un `<pre>`, los bloques saldrían de una
fuente de respaldo del sistema y los espacios de Plex; con dos avances distintos
el arte se cizalla. `src/lib/ascii.mjs` convierte el `.txt` en una retícula de
`<rect>` que conserva la misma malla de caracteres, no depende de ninguna fuente
y escala sin el suelo de 9px del `clamp()` original. Para cambiar el banner se
edita `src/assets/ascii-logo.txt`.

**Los iconos se rasterizan con la Plex real.** `@fontsource` sólo publica
woff/woff2 y fontconfig —lo que usa `sharp` por debajo— sólo lee SFNT, así que
`scripts/woff2ttf.mjs` convierte el WOFF a TTF en tiempo de build.

**El rojo cambia según el fondo.** `--rd-red` (#8C1420) es relleno: botones,
barras, el separador del banner. Sobre oscuro, el rojo como *texto* es siempre
`--rd-red-ink` (#FF4A54); #8C1420 sobre #141312 da 2:1 y no se lee.

**Las dos marcas nunca coinciden en la misma cara.** Terminal RD en el header,
wordmark Cursor en el footer.
