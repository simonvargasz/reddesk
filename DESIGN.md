---
name: Red Desk
description: Un monitor de fósforo encendido en un cuarto oscuro — sistema de terminal retro en rojo, negro y grafito.
colors:
  oxide-red: "#8C1420"
  oxide-red-hover: "#B0121C"
  phosphor-red: "#FF4A54"
  room-black: "#0F0E0E"
  screen-black: "#141312"
  panel-black: "#1B1A19"
  graphite: "#2A2724"
  graphite-lit: "#4A4642"
  ink: "#FFFFFF"
  ink-2: "#D6D2CD"
  ink-3: "#B9B4AE"
  ink-4: "#9A958F"
typography:
  headline:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: "clamp(28px, 3.6vw, 40px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: "clamp(26px, 3.2vw, 34px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: "clamp(18px, 2.2vw, 24px)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  note:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-compact:
    fontFamily: "Space Grotesk Variable, Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  control:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.06em"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.14em"
  meta:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.12em"
rounded:
  none: "0"
  screen: "6px"
  dot: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 32px)"
  section: "clamp(64px, 9vw, 88px)"
  card: "32px"
  panel: "clamp(22px, 3vw, 32px)"
components:
  button-primary:
    backgroundColor: "{colors.oxide-red}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.oxide-red-hover}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "15px 24px"
  screen-surface:
    backgroundColor: "{colors.screen-black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.screen}"
  panel:
    backgroundColor: "{colors.panel-black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.screen}"
    padding: "{spacing.panel}"
  card:
    backgroundColor: "{colors.screen-black}"
    textColor: "{colors.ink-3}"
    typography: "{typography.body-compact}"
    rounded: "{rounded.none}"
    padding: "{spacing.card}"
  input:
    backgroundColor: "{colors.screen-black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  nav-link:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
---

# Design System: Red Desk

## Overview

**Creative North Star: "El monitor encendido"**

La página se mira como se mira un monitor de fósforo a oscuras: la primera
pantalla **está encendida** —resplandor, barrido, letras que desbordan su
trazo— y todo lo que viene después es mueble, material mate que no emite. Esa
asimetría es el sistema entero. Cuando haya que decidir si un elemento nuevo
brilla, la pregunta no es estética sino literal: ¿emite o está apoyado sobre la
mesa?

El tubo es un **efecto, no un aparato**. Se probó darle marco —bisel curvo, caja
propia, filete de vidrio— y el resultado leía como widget pegado en vez de como
apertura. La luz no necesita borde para leerse.

De ahí sale la doctrina que gobierna el reparto: **la prosa vive sobre el
escritorio, los datos viven en pantallas.** El texto largo se lee sobre fondo
plano, sin barrido ni viñeta, porque leer es la tarea. El panel de terminal, la
rejilla de servicios y el formulario sí llevan vidrio, porque son superficies
donde se consulta y se opera. Un párrafo con barrido encima sería costume; una
tabla sin él sería una oportunidad perdida.

El mundo es de fósforo rojo sobre negro: un tubo de un solo color, no un CRT
ámbar de museo. La marca ya era una terminal antes de este sistema —arte ASCII
de bloques, cursor que parpadea, prompt `$`— y el vidrio no la disfraza, la
explica. El carácter es **instrumental y sin adorno**: cada elemento declara su
función y nada más.

**Key Characteristics:**

- El efecto de tubo es una capa de luz, no un objeto: el hero no tiene marco ni
  caja, y comparte su barrido con las superficies de datos.
- La luz sustituye a la sombra: los objetos emiten, no proyectan.
- Rojo de doble estado —apagado para masa, encendido para texto y señal.
- Mono para el cromo, los datos y la medida; sans para la prosa. Nunca al revés.
- Sólo las pantallas tienen esquina. Los controles son de canto vivo.
- Todo el contenido aterriza en una columna de 1200px; sólo la luz va a sangre.
- No hay cromo persistente: sin barra, sin menú. La página se lee bajando y el
  material aparece al ritmo del scroll.

## Colors

Una paleta de cuarto oscuro: cuatro negros que se escalonan como capas físicas,
dos grafitos para los filetes, una escala de tinta de cuatro pasos, y un par de
rojos que no son variantes sino **dos estados del mismo color**.

### Primary

- **Rojo Óxido** (`#8C1420`): la masa sólida. Rellenos de botón, barras, fondos
  rojos, la marca del logotipo, el subrayado de `red_desk`. Es el rojo apagado,
  el del tubo sin corriente.
- **Rojo Fósforo** (`#FF4A54`): el rojo encendido. Es literalmente el color que
  emite el sistema: texto rojo sobre negro, el prompt `$`, el bloque del cursor,
  el `[01]` de cada sección, el halo del foco de teclado, el bloque del wordmark
  sobre oscuro. Da 5.6:1 sobre `screen-black`.
- **Rojo Óxido Encendido** (`#B0121C`): único estado de hover del relleno sólido.

### Neutral

Cuatro negros que no son decoración sino **profundidad**, en orden de
alejamiento del ojo:

- **Negro de Cuarto** (`#0F0E0E`): el fondo de las secciones alternas. La capa
  más lejana.
- **Negro de Pantalla** (`#141312`): el fondo del documento, hero incluido. La
  capa donde ocurre casi todo.
- **Negro de Panel** (`#1B1A19`): las superficies que se elevan un punto — el
  panel de terminal, el panel de contacto.
- **Grafito** (`#2A2724`): todo filete de 1px, la barra de título de la marca, el
  pulgar de la barra de scroll.
- **Grafito Encendido** (`#4A4642`): borde del botón fantasma, puntos apagados de
  la barra de terminal, el canto del idioma activo en su versión táctil.

Tinta sobre oscuro, de mayor a menor peso:

- **Tinta** (`#FFFFFF`): titulares, texto del hero, valores.
- **Tinta 2** (`#D6D2CD`): prosa de cuerpo, salida de terminal.
- **Tinta 3** (`#B9B4AE`): cuerpo de tarjeta, texto secundario del formulario.
- **Tinta 4** (`#9A958F`): metadatos y etiquetas. Es el **mínimo legible** sobre
  negro; por debajo de esto no hay nivel.

### Named Rules

**La Regla del Rojo que Cambia.** El rojo cambia según el fondo, y no es una
preferencia: `oxide-red` como *texto* sobre negro da 2:1 y no se lee. Relleno
sólido y texto sobre claro usan `oxide-red`; rojo como texto sobre oscuro usa
`phosphor-red`. Elegir mal no es una variante fea, es un fallo de contraste.

**La Regla de la Marca Única.** La marca Terminal RD (la ventana con `rd`) y el
wordmark Cursor (`red_desk` con su bloque) **nunca aparecen en la misma cara**.
Son dos expresiones de la misma identidad, no un lockup. Al quitarse la barra, la
Terminal RD dejó de estar en la página: vive en los iconos y en las OG images. En
la página manda el arte ASCII del hero, y el wordmark cierra al pie.

**La Regla del Rojo Rotulado.** El rojo estructural sólo aparece rotulado —dentro
de un `[01]`, un prompt, un botón o un bloque de cursor— nunca como filete
decorativo suelto.

> El handoff original traía además una mitad clara (papel, filete e tintas sobre
> claro). Esta superficie no la usa: el documento es `color-scheme: dark`. Vive
> en `src/styles/tokens.css` sin consumidores, disponible para una futura
> superficie clara.

## Typography

**Display:** el logotipo no es tipografía. La voz de display es arte ASCII de
bloques renderizado como retícula de `<rect>` en SVG desde
`src/assets/ascii-logo.txt`, con la geometría en `src/lib/ascii.mjs` compartida
con el generador de OG images. En pantalla estrecha se parte en dos líneas
—`RED_` sobre `DESK`— con escala compartida.

**Body Font:** Space Grotesk Variable (con Helvetica / Arial).
**Label / Mono Font:** IBM Plex Mono (con `ui-monospace`, SFMono-Regular, Menlo).

**Character:** una geométrica de formas abiertas y un poco excéntrica para lo que
se lee, contra una monoespaciada de ingeniería para todo lo que se opera o se
mide. El contraste entre las dos es lo que hace que el cromo se lea como
instrumento y la prosa como voz.

### Hierarchy

- **Headline** (600, `clamp(28px, 3.6vw, 40px)`, 1.1, -0.025em): el titular de
  contacto. Las palabras más grandes de la página.
- **Title** (600, `clamp(26px, 3.2vw, 34px)`, 1.15, -0.02em): titulares de
  sección, bajo su filete rotulado.
- **Subtitle** (600, 21px, -0.02em): títulos de tarjeta y de paso de proceso.
- **Lead** (400, `clamp(18px, 2.2vw, 24px)`, 1.55): la entradilla del hero,
  centrada bajo el logo y justificada de renglón. Por debajo de 600px suelta la
  justificación: con tres o cuatro palabras por línea, o abre ríos entre palabras
  o parte `sis-temas`, y a esa medida el centrado es la forma correcta de la
  misma intención. El único texto que emite (halo blanco al 22%), porque
  está sobre el tubo.
- **Body** (400, 19px, 1.7, máx. 62ch): prosa de sección.
- **Body compact** (400, 16.5px, 1.7): cuerpo de tarjeta y de paso.
- **Note** (mono, 14.5px, 1.7, `ink-4`): la acotación al margen. Hoy sólo la usa
  "lo que no hace", colgada de un filete de `graphite`. Se lee, no se anuncia.
- **Control** (500, 13px, 0.06em, versalitas): botones. Mono.
- **Label** (12px, 0.14em, versalitas, `phosphor-red`): rótulos de sección y
  claves. Mono.
- **Meta** (11.5px, 0.12em, versalitas, `ink-4`): metadatos, legales, pies. Mono.

### Named Rules

**La Regla del Reparto.** Mono para el cromo, los datos y la medida —etiquetas,
selector de idioma, formularios, salida de terminal, botones—. Sans para todo lo que se
lee seguido. Monoespaciar un párrafo para que parezca técnico es disfraz; en este
sistema la mono ya significa algo y diluirla la deja sin significado.

**La Regla del Teléfono.** La escala se dibujó para escritorio y sube por debajo
de 600px: cuerpo 16.5 → 17px, entradilla 19 → 18.5px, etiqueta 12 → 12.5px. Un
metadato de 10px se lee a 60cm, no a 30cm en la calle. Los campos de formulario
no bajan de 16px porque por debajo Safari en iOS hace zoom al enfocar.

**La Regla de la Nota al Margen.** Decir lo que no se hace vale la pena; gritarlo,
no. La acotación de "lo que no hace" llevaba rótulo en `phosphor-red` y cuerpo a
tamaño de texto, y competía de tú a tú con las tres tarjetas que tiene encima:
la primera cosa que el ojo leía de la sección era una negación. Ahora va sin
rojo, un punto más pequeña y colgada de un filete, como la nota que corrige al
pie de una tabla. **Que algo deba estar explícito no significa que deba estar
alto.** El rojo se reserva para lo que sí se hace.

**La Regla de la Óptica a Distancia de Brazo.** Toda la capa óptica baja un
punto por debajo de 600px: el barrido de 0.14 a 0.085 de alfa, la viñeta de 0.34
a 0.22, el cañón de 0.28 a 0.19, y el florecimiento del logo apilado a dos
tercios del de la composición ancha, con la mitad de separación de canales. La
razón no es estética sino de distancia: **la misma capa que a 60cm es atmósfera,
a 30cm es velo sobre el texto**, y en una pantalla de mano ocupa además una
fracción mucho mayor del campo visual. Medido, la entradilla sube de 17.7:1 a
18.9:1 sólo por aflojar la óptica.

**La Regla de la Lectura sin Fatiga.** La escala entera subió un punto sobre la
maqueta —cuerpo 14.5 → 16.5px, prosa 17 → 19px— porque la audiencia evalúa en
huecos de la jornada, muchas veces de pie. Un tamaño que se lee bien sentado a
60cm no es el mismo que se lee cansado; la página no gana nada por caber en
menos pantallas, y sí pierde si obliga a acercarse.

## Layout

Una sola columna de **1200px** (`--rd-shell`) con canalón `clamp(20px, 4vw,
32px)`, que baja a 18px por debajo de 600px. El canalón se resuelve con
`max(gutter, env(safe-area-inset-*))`, así que en horizontal con muesca el canal
seguro puede pasar del canalón sin que nada toque el borde.

El ritmo vertical es `clamp(64px, 9vw, 88px)` entre secciones (60px en teléfono).
Las secciones **no llevan filete propio**: el rótulo de cabecera es el límite.

Las rejillas usan `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))` — el `min()`
interior es obligatorio, sin él la pista mínima desborda el contenedor por debajo
de N. Excepción: la rejilla de servicios es de **una o tres columnas, nunca dos**,
porque con `auto-fit` los tres servicios caían 2+1 y la celda vacía dejaba
colgando un bloque de grafito dentro del marco.

**La página no tiene barra de navegación.** Ni pegajosa ni fija: se recorre
bajando y nada la sigue por arriba. El hero ocupa el pliegue entero (`min-height:
100svh`) y es la portada; el `scroll-padding-top` baja a `clamp(20px, 4vw, 36px)`,
que ya no compensa una barra sino que evita que el rótulo de sección quede pegado
al canto. El único mando que sobrevive es el selector de idioma, suelto en el
canto del hero, que se marcha con el scroll como todo lo demás.

### Named Rules

**La Regla de la Columna Única.** Todo el contenido aterriza en la misma medida,
el hero incluido: su logo arranca exactamente donde arranca el rótulo `[01]` de
la sección siguiente. Lo único que va a sangre es la **luz** —el resplandor y el
barrido cubren la banda entera—, porque una capa atmosférica no tiene borde que
desalinear. Un bloque de contenido a sangre en una página que vive en columna se
lee como widget pegado, no como decisión.

## Elevation & Depth

**Este sistema no usa sombras para dar profundidad.** La profundidad se construye
con tres cosas, en este orden: capas tonales (`room-black` → `screen-black` →
`panel-black`), un anillo oscuro hundido en el canto del tubo, y **luz emitida**.

La luz es la herramienta principal. El logotipo florece con dos desenfoques
gaussianos bajo el arte nítido, cada uno conservando el color del trazo que lo
emite —el rojo florece rojo y el blanco florece blanco, cosa que un `drop-shadow`
de un solo color no puede hacer—. El prompt, el cursor, la entradilla, el botón
primario y el foco de teclado llevan halo.

Sobre eso van las dos huellas de un cristal convexo. **Aberración cromática:** el
halo se separa en canales —R hacia un lado, G+B hacia el otro— con un
desplazamiento de 0.13 unidades del arte, así que la luz emitida se abre en cálido
por un flanco y frío por el otro. **Arco de refracción:** un vidrio curvo no
devuelve una banda recta de luz sino un arco, y el del hero sube unos 150px del
canto al centro.

### Shadow Vocabulary

- **Ninguna sombra proyectada.** El sistema no tiene una sola. La última que
  quedaba era la del cajón de navegación, y se fue con la barra; no hay nada que
  se superponga físicamente a nada.
- **Viñeta de pantalla** (`rgba(0, 0, 0, .34)` en escritorio,
  `rgba(0, 0, 0, .22)` en teléfono): el único negro que se añade en toda la
  página, y no es una sombra: es el canto del tubo apagándose. Baja un tercio en
  el móvil porque ahí ocupa proporcionalmente mucho más de la pantalla.
- **Halo de foco** (`box-shadow: 0 0 16px rgba(255,74,84,.45)`): no es sombra,
  es emisión. Acompaña al `outline` de 2px en todo elemento enfocable.

### Named Rules

**La Regla de la Luz.** Los objetos de este sistema **emiten, no proyectan**. Si
un elemento nuevo necesita despegarse del fondo, sube de capa tonal o se
enciende; no se le pone sombra. La única sombra legítima es la de algo que
físicamente se superpone.

**La Regla del Reparto de Material.** El barrido, el filete de vidrio y la caída
hacia los cantos van sobre superficies-pantalla —donde se consultan datos— y
nunca sobre prosa corrida. `.screen-surface` es la utilidad que lo aplica; el
hero es su versión intensa.

**La Regla del Fósforo Único.** El sistema **no separa espectro**. Hubo aquí una
aberración cromática —el canal R contra el par G+B, sobre el halo del logo y sobre
los cantos del hero— y era correcta como óptica: es lo que hace un vidrio curvo.
Se retiró igualmente. Sobre los bloques blancos se leía como una aureola de color,
cálida por un flanco y cian por el otro, y este monitor es de **un solo fósforo
rojo**: un tubo que emite una longitud de onda no tiene por qué refractar el resto.
La regla que sobrevive del intento es la del sitio, y sigue en pie para cualquier
óptica futura: **se aplica a la luz que el fósforo emite, jamás al trazo.**

**La Regla del Contraste Manda.** Un efecto óptico sólo existe donde hay contraste
que lo sostenga. Se probó arquear el barrido para leer la curvatura del tubo: es
geométricamente correcto y perceptualmente nulo, porque sobre fondo negro el
barrido modula un nivel de luminancia. La curvatura vive en el arco de luz, que
modula diez veces más. Antes de añadir un efecto, medir si se ve.

## Shapes

Dos radios y nada más. **Los controles son de canto vivo** (radio 0): botones,
campos, selects, el bloque del cursor, las barras rojas de las tarjetas. **Las
superficies-pantalla llevan 6px** (`--rd-radius`): panel de terminal, rejilla de
servicios, panel de contacto. Los puntos de la barra de terminal son círculos.

El filete es siempre de 1px en `graphite`. La rejilla de servicios lo comparte
por `gap: 1px` sobre fondo grafito, así que las tarjetas se tocan como celdas de
tabla en vez de flotar separadas.

El hero **no tiene silueta**: es una banda sin fondo propio ni borde, donde la
única frontera es la caída del resplandor. Se probó darle marco de monitor —bisel
curvo con los lados abombados en SVG— y se descartó: a 1136×600 no leía como tubo
sino como marco de cuadro, y la caja convertía la apertura de la página en un
widget.

### Named Rules

**La Regla del Canto Vivo.** Sólo las pantallas tienen esquina, porque sólo ellas
son objetos físicos con bisel. Un control es una etiqueta estampada y no se
redondea.

## Components

### Buttons

- **Shape:** canto vivo (radio 0), borde de 1px.
- **Typography:** IBM Plex Mono 500, 12px, `0.06em`, versalitas.
- **Primary:** relleno `oxide-red`, texto blanco, `15px 24px`. Sobre el tubo lleva
  además halo rojo (`0 0 22px rgba(140,20,32,.55)`).
- **Ghost:** transparente con borde `graphite-lit`; en hover el borde pasa a
  blanco.
- **Hover:** `oxide-red-hover` en el primario. Transiciones de `.15s ease` sobre
  color, fondo y borde.
- **Táctil:** por debajo de 600px o con puntero grueso sube a 13px / `16px 22px`
  para dar 48px de alto real, y los hover se anulan bajo `(hover: none)`.
- **Disabled:** opacidad .5, cursor `not-allowed`, sin cambio en hover.

### Screen surfaces (componente de firma)

La utilidad `.screen-surface` es el material compartido del sistema: filete de
vidrio de 1px, radio de 6px, y un `::after` que superpone barrido suave
(`--rd-scan-soft`, `rgba(0,0,0,.14)` cada 3px) más una viñeta radial hacia los cantos. Se desactiva
entera bajo `prefers-contrast: more` y `prefers-reduced-transparency: reduce`.

El **hero** usa el mismo barrido en dos pseudo-elementos de la propia sección:
`::before` lleva el resplandor del cañón, el arco de refracción y el reflejo
diagonal detrás del texto; `::after` el barrido y una viñeta ancha por delante. Misma textura que los paneles —el mismo token—, con la
luz como única diferencia.

Las dos capas van enmascaradas por un degradado vertical (`--rd-hero-fade`) que
las disuelve hacia abajo: la textura muere un 94% antes del filete de la sección
siguiente, así que el hero se funde con el fondo del cuerpo en vez de cortarse
contra él.

### Cards / Containers

- **Rejilla:** una superficie-pantalla completa, no tres tarjetas sueltas.
- **Corner:** las celdas son de canto vivo; el radio vive en el contenedor.
- **Background:** `screen-black` sobre fondo `graphite` con `gap: 1px`.
- **Padding:** 32px (24px 20px en teléfono).
- **Marca:** barra roja de 26×6px en `oxide-red` sobre el título.

### Inputs / Fields

- **Style:** fondo `screen-black`, borde 1px `graphite`, canto vivo, mono 14px,
  `12px 14px`.
- **Hover:** el borde sube a `graphite-lit`.
- **Focus:** el borde pasa a `phosphor-red`, más el halo de foco global.
- **Error:** `[aria-invalid]` tiñe el borde de `phosphor-red`. Sólo se marca lo
  que ya se intentó enviar, nunca un campo aún sin tocar.
- **Teléfono:** 16px y `14px` de padding — por debajo de 16px iOS hace zoom.

### Campo del hero por tubo (WebGL, opcional)

El fondo del hero puede pasar por un shader: `CRTFilterWebGL`
(`src/lib/CRTFilter.js`, MIT). La regla que gobierna la pieza salió de tres
intentos fallidos de lo contrario: **el diseño no se toca**. El logo sigue siendo
el mismo SVG con su mismo florecimiento, el texto sigue siendo DOM, el barrido
fino sigue cruzando la letra y la viñeta sigue donde estaba.

Lo único que hace el canvas es **sustituir a `.hero::before`**: pinta los mismos
cuatro degradados del cañón, con sus mismos valores, y los pasa por el shader. A
cambio, ese fondo deja de ser una imagen fija y pasa a ser un tubo encendido.

- **Qué aporta, medido: 0.65 niveles de luminancia de media.** Es decir, nada
  que se vea. El grano de fósforo, que era la razón de la capa, resultó
  inservible: el shader lo calcula como `fract(sin(dot(uv, k)) * 43758.5453)`,
  una función del píxel **sin término de tiempo**. Es el mismo patrón en cada
  fotograma, así que no centellea: es un tramado fijo estampado sobre la imagen,
  que es exactamente como se lee —suciedad en el cristal—. Bajarlo lo hace más
  tenue, nunca menos estático. Apagado él, y apagados el desgarro y la pérdida
  de señal por la misma razón, queda sólo el parpadeo de red, que sí depende del
  tiempo y a este nivel de luz no se percibe.
- **Se activa** en ≥900px, con WebGL y sin petición de más contraste. Con menos
  movimiento pedido se dibuja un fotograma y se para: el campo sigue, el latido
  no. En cualquier otro caso queda el `::before` de siempre, que es el mismo
  dibujo.
- **Coste:** la textura se sube una vez, no por fotograma, y el bucle se detiene
  en cuanto el hero sale de pantalla.

### Selector de idioma

El único mando de la página. Va suelto en el canto superior derecho del **hero**,
no en una barra: se desplaza con él y desaparece. Repetido al pie, que es donde
se busca cuando ya se ha leído.

- **Estilo:** mono `label`, `0.1em`, `ink-4`; el idioma activo en `ink` con
  bloque `graphite` detrás.
- **Dentro del hero:** sin marco. La versión táctil se dibuja con caja de 1px
  para el dedo, y esa caja lo convertía justo en la barra que se quitó, así que
  ahí conserva el blanco de 44px y pierde el borde.
- **Táctil (≤860px o puntero grueso):** 13px y `15px 16px` de relleno. Tres
  celdas de 7px de flanco son una diana imposible.

### Section header (componente de firma)

Un filete rotulado que **es** el límite de la sección: filete corto de 22px,
`[01]` en mono `phosphor-red`, filete largo hasta el borde, y el titular debajo.
Los filetes son `border-top` de CSS, **no caracteres de dibujo de caja**: IBM
Plex Mono no los trae —igual que no trae `█` ni `▁`— y saldrían de una fuente de
respaldo con otro avance.

### Terminal panel

Ventana con barra de título en `graphite` y tres puntos de 9px (el primero en
`oxide-red`, los otros dos apagados). Cuerpo en mono 12.5px con interlineado 2,
prompt `$` en `ink-4`, salidas prefijadas por `→` con **sangría francesa** de
1.5em para que las líneas partidas se alineen tras la flecha, y bloque de cursor
al final.

### Motion

Dos momentos autorizados, un gesto permanente y un fondo vivo.

- **Arranque del banner** (`rdBoot`, `.55s cubic-bezier(.16,1,.3,1)`, escalón de
  55ms por fila): el logo se dibuja fila a fila al cargar. Es lo primero que
  ocurre; el revelado de la página entra detrás.
- **Revelado al desplazar** (`.55s cubic-bezier(.16,1,.3,1)`, opacidad y 14px de
  subida): cada pieza aparece una vez, al entrar en pantalla, y deja de mirarse.
  El escalón entre hermanos de una rejilla (`--rd-reveal-delay`, 90–100ms por
  índice) lo pone la plantilla, no un temporizador.
- **Cursor de bloque** (`rdBlink`, `1.1s step-end infinite`): el único gesto
  animado permanente de la marca.
- **Campo del hero** (`requestAnimationFrame`, sólo en escritorio con WebGL):
  grano de fósforo y parpadeo de red sobre el fondo del hero. No dibuja nada
  nuevo, sólo mantiene encendido lo que ya había. Se detiene en cuanto el hero
  sale de pantalla, y con `prefers-reduced-motion` no llega a arrancar.
- **Transiciones de estado:** `.15s ease` sobre color, fondo y borde. El
  skip-link usa `.18s cubic-bezier(.16,1,.3,1)`.
- **`prefers-reduced-motion`:** todo cae a `.001ms`, el cursor se queda sólido,
  el material revelado aparece sin subida ni espera, la gota se para y el scroll
  suave se desactiva.

**La Regla de la Afordancia que se Explica Sola.** El hero llevó una señal de
scroll —un filete con una gota cayendo— y se retiró: parada, en una captura, no
se lee como "hay más abajo" sino como un defecto de render. Un gesto que sólo
significa algo mientras se mueve no es una afordancia, es un artefacto. Si vuelve
a hacer falta, la forma legible es un galón, que se reconoce quieto.

**La Regla de la Capa que se Suma.** Un efecto se añade **detrás** de lo que ya
funciona, nunca reestructurando lo que ya funciona. Tres intentos de meter el
logo dentro del shader —para que la lente le doblara la luz— acabaron los tres
en un halo más blando o en un churrete, porque al arte le quitaban su propio
florecimiento para devolvérselo peor. Lo que sí cabe es sustituir una capa que ya
era fondo, con sus mismos valores, y ganar que esté viva. **Si un efecto exige
desmontar el diseño para entrar, el que sobra es el efecto.**

**La Regla del Revelado Reversible.** Nada se oculta si no hay quien lo
desoculte. El estado inicial del revelado cuelga de `.rd-js`, una clase que el
layout escribe en `<html>` antes de pintar, y el observador marca `data-shown`
al entrar en pantalla. Sin JavaScript —o sin `IntersectionObserver`— no hay nada
oculto que un fallo pudiera dejar invisible para siempre. Una animación de
entrada que puede tragarse el contenido no es una animación, es un riesgo.

### Browser surfaces

Lo que no se dibuja también lleva el diseño: selección en `oxide-red` sobre
blanco, cursor de texto en `phosphor-red`, barra de scroll en `graphite` sobre
`screen-black` con pulgar de 6px y borde de 3px, y anillo de foco de 2px en
`phosphor-red` con `outline-offset: 3px`.

## Do's and Don'ts

### Do:

- **Do** separar el par de rojos por superficie: `oxide-red` para relleno y para
  texto sobre claro, `phosphor-red` para texto y señal sobre oscuro.
- **Do** dar `.screen-surface` a toda superficie oscura nueva que **cargue
  datos**, y dejarla fuera de la prosa corrida.
- **Do** mantener la prosa en Space Grotesk y reservar IBM Plex Mono para cromo,
  datos y medida.
- **Do** dejar los controles de canto vivo y las pantallas con 6px.
- **Do** subir la escala tipográfica por debajo de 600px y llevar los campos de
  formulario a 16px.
- **Do** tematizar las superficies del navegador —selección, cursor de texto,
  barra de scroll, anillo de foco— con la paleta del sistema.
- **Do** usar `minmax(min(Npx, 100%), 1fr)` en toda rejilla `auto-fit`.
- **Do** anclar cualquier elemento a sangre a la medida de 1200px antes de
  darlo por bueno.

### Don't:

- **Don't** inventar datos, métricas, casos o testimonios para llenar un hueco de
  prueba. El panel de terminal ya sustituyó métricas falsas por principios
  verificables; ese es el estándar.
- **Don't** usar filetes rojos sueltos. El rojo estructural aparece rotulado
  —`[01]`, prompt, botón, cursor— nunca como línea decorativa.
- **Don't** poner `oxide-red` como texto sobre negro: da 2:1 y no se lee.
- **Don't** colocar la marca Terminal RD y el wordmark Cursor en la misma cara.
- **Don't** añadir sombras proyectadas para despegar paneles del fondo. En este
  sistema se sube de capa tonal o se enciende.
- **Don't** monoespaciar prosa para que parezca técnica.
