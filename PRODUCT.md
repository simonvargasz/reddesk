# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dueños de pequeñas y medianas empresas con un proceso manual que duele: horas
perdidas en trabajo repetitivo repartido entre hojas de cálculo, correos y
copiar-pegar entre sistemas que no se hablan.

Llegan buscando **alivio operativo, no tecnología**. No comparan stacks ni
evalúan arquitecturas; quieren que el día pese menos. La página tiene que
demostrar criterio y forma de trabajar, porque es lo único que pueden juzgar.

## Product Purpose

Red Desk es un estudio de software de **una sola persona**. Diseña y construye
sistemas que se usan todos los días —de una empresa o de una persona— y que
dejan el día mejor de como estaba.

Éxito es que el encargado note que el día pesa menos, no que el sistema tenga
más pantallas.

## Positioning

Casi todo el software que usamos a diario nos hace trabajar para él: pide datos
que ya tiene, obliga a recordar pasos que debería recordar solo, y crece
añadiendo funciones en vez de quitando fricción. Red Desk existe para hacer lo
contrario.

Lo que un estudio vecino no podría copiar sin mentir:

- El sistema se ajusta al trabajo real, tal como se hace hoy, no como debería
  hacerse.
- El código queda en un repositorio del cliente, no en el del estudio.
- El estudio rechaza el encargo que después no pueda mantener. Es una persona,
  y esa es la razón real del filtro, no una postura.

## Operating Context

El trabajo del cliente hoy vive repartido entre hojas de cálculo, correos y
copiar-pegar. Los sistemas que ya usa y que suelen entrar en el encargo:
facturación, inventario, CRM y bancos.

La evaluación ocurre sobre todo en el móvil, en huecos de la jornada, no en un
escritorio con tiempo.

## Capabilities and Constraints

**Qué hace**

- Producto a medida: aplicaciones web y móviles completas, del primer boceto al
  despliegue.
- Sistemas internos: paneles, flujos y automatizaciones.
- Integraciones: conectar lo que ya se usa para que los datos dejen de moverse
  a mano.

**Cómo trabaja** — Semana 1: entender el trabajo real junto a quien lo hace.
Semanas 2–3: prototipo navegable antes de código definitivo. Desde la semana 4:
entregas cada dos semanas, funcionando y desplegadas.

**Qué no hace** — No vende plantillas, no hace campañas ni posicionamiento, y no
toma un encargo que después no pueda mantener.

**Restricciones técnicas de la landing**

- Sitio estático: sin CMS, sin backend, sin rastreadores. `dist/` va tal cual a
  cualquier servidor de ficheros.
- Trilingüe `es` / `en` / `pt`. `src/i18n/es.ts` es la fuente de verdad; `en.ts`
  y `pt.ts` están tipados contra ella, así que una clave que falte rompe el
  build. Todo el copy vive ahí: editar un texto no toca una plantilla.
- El formulario va por Web3Forms (sin servidor). Sin access key se muestra
  deshabilitado con aviso y el correo directo pasa a ser el canal — degrada de
  forma visible en vez de tragarse los envíos.
- Los assets rasterizados (favicons, iconos PWA, OG por idioma) se generan con
  `npm run assets`, están **fuera del build a propósito** y se versionan: si el
  host de despliegue no tuviera fontconfig, un build allí los regeneraría con una
  fuente de respaldo sin avisar.

**Explícitamente sin decidir** — Los cuatro TODO de `src/config.ts`: dominio
definitivo (`SITE`), correo público (`EMAIL`), perfil de LinkedIn (`LINKEDIN`) y
access key de Web3Forms (`WEB3FORMS_KEY`). La página compila y funciona sin
ninguno; degrada de forma visible. Tampoco está decidido el mercado principal
entre los tres idiomas.

## Brand Commitments

- Nombre: **Red Desk**, `red_desk` en su forma de wordmark.
- **Voz en tercera persona impersonal**, decisión deliberada a conservar: el
  copy nunca dice "nosotros" ni "yo". Es un estudio de una persona y el texto no
  finge tamaño.
- Dos marcas que **nunca aparecen en la misma cara**: la marca Terminal RD (la
  del header) y el wordmark Cursor con su bloque rojo (el del footer). La regla
  está documentada en los propios componentes.
- El logotipo es arte ASCII de bloques, en `src/assets/ascii-logo.txt`. La
  retícula la calcula `src/lib/ascii.mjs`, compartida por la página y por el
  generador de OG images para que nunca diverjan.
- El sistema visual llega de un handoff de diseño y vive en
  `src/styles/tokens.css`. No se ha registrado todavía en un DESIGN.md.

## Evidence on Hand

**No hay nada publicable.** Ni casos, ni clientes nombrables, ni cifras, ni
testimonios, ni prensa. El criterio y la forma de trabajar son la única prueba
disponible.

Esta ausencia ya está defendida en el código: el panel de terminal de la sección
01 imprimía métricas de despliegue inventadas en la maqueta original y se
sustituyeron por los principios del estudio, que sí son verificables — mismo
dispositivo visual, ninguna afirmación falsa. Cualquier trabajo futuro hereda esa
disciplina: no se rellena un hueco de prueba con datos plausibles.

Contenido real disponible: el copy trilingüe completo en `src/i18n/`, el arte
ASCII, la marca y los tokens del handoff.

## Product Principles

1. **El sistema se adapta al trabajo, no al revés.** Se mapea el proceso tal
   como es, no como debería ser.
2. **Menos pasos, no más funciones.** El crecimiento se mide en fricción
   quitada.
3. **Nada que no se pueda mantener después.** Filtro real de capacidad, no
   postura de marca.
4. **Se entrega funcionando.** Cada entrega está desplegada; lo que sigue se
   decide con el sistema en uso, no sobre un documento.
5. **Ninguna afirmación que no se pueda verificar.** Sin prueba que enseñar, la
   honestidad es el activo; un dato inventado lo gasta entero.

## Accessibility & Inclusion

No se fijó un estándar formal. El hecho de producto que sí manda: la audiencia
evalúa desde el móvil y en huecos de la jornada, así que el rendimiento y la
legibilidad en pantalla pequeña son requisito, no acabado.
