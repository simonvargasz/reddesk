/**
 * El movimiento de la página, con GSAP + ScrollTrigger.
 *
 * Sustituye al IntersectionObserver que había, y no por moda: lo que hacía falta
 * era escalonar hermanos que entran juntos, encadenar líneas dentro de un panel
 * y atar una animación al progreso del scroll en vez de a su cruce. Las tres
 * cosas son un temporizador a mano en CSS y son una línea aquí.
 *
 * Reglas que se conservan del sistema anterior, porque son de fondo:
 *
 *  · NADA SE OCULTA SI NO HAY QUIEN LO DESOCULTE. El estado inicial cuelga de
 *    `.rd-js`, que el layout escribe antes de pintar. Si este módulo no llega a
 *    correr —red, error, navegador viejo— la red de seguridad de abajo retira la
 *    clase y todo queda visible. Una animación de entrada que puede tragarse el
 *    contenido no es una animación, es un riesgo.
 *  · `prefers-reduced-motion` apaga el movimiento, no el contenido. Con él, todo
 *    aparece de una vez y no se registra ni un ScrollTrigger.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const raiz = document.documentElement;
const todo = gsap.utils.toArray<HTMLElement>('[data-reveal]');

/* Red de seguridad: si en dos segundos no se ha armado nada, se descubre todo.
   Cubre el caso en que este módulo cargue pero reviente a mitad. */
const rescate = window.setTimeout(() => raiz.classList.remove('rd-js'), 2000);

/* El compás de la casa. Salida rápida y frenada larga: el material entra como
   se imprime una línea, no como rebota una pelota. */
const EASE = 'power3.out';
const DUR = 0.55;

const mm = gsap.matchMedia();

/* ---------- sin movimiento ---------- */
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.set(todo, { opacity: 1, y: 0 });
  clearTimeout(rescate);
});

/* ---------- con movimiento ---------- */
mm.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.set(todo, { y: 14 });

  /* 1. El revelado. `batch` agrupa lo que entra en el mismo fotograma y lo
     escalona de verdad: antes el retardo lo ponía la plantilla por índice, así
     que una tarjeta que entraba sola arrastraba igualmente el retardo de la
     tercera. Ahora el escalón sale de lo que hay en pantalla. */
  ScrollTrigger.batch(todo, {
    start: 'top 88%',
    once: true,
    onEnter: (lote) =>
      gsap.to(lote, { opacity: 1, y: 0, duration: DUR, ease: EASE, stagger: 0.075, overwrite: true }),
  });

  /* 2. El filete de sección se dibuja. Es un separador de terminal: lo propio
     es que se trace de izquierda a derecha, no que aparezca entero. */
  gsap.utils.toArray<HTMLElement>('.sec-head__rule').forEach((rule) => {
    const lineas = rule.querySelectorAll('.sec-head__line');
    gsap.from(lineas, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: { trigger: rule, start: 'top 88%', once: true },
    });
  });

  /* 3. El panel de terminal imprime. Las líneas ya existen en el DOM y el panel
     lleva su propio `aria-label`, así que esto es puramente visual: cada salida
     entra detrás de la anterior, como una orden que va escupiendo resultado. */
  const term = document.querySelector<HTMLElement>('.term');
  if (term) {
    gsap.from(term.querySelectorAll('.term__cmd, .term__out, .term__last'), {
      opacity: 0,
      x: -8,
      duration: 0.34,
      ease: 'power2.out',
      stagger: 0.11,
      scrollTrigger: { trigger: term, start: 'top 82%', once: true },
    });
  }

  /* 4. El hero se despide con paralaje. Es lo único atado al PROGRESO del
     scroll y no a un cruce, y es lo que ScrollTrigger hace y un observador no:
     al bajar, la luz se queda atrás respecto del texto y el conjunto se apaga.
     Sin esto el hero se iba de golpe; con esto la primera pantalla entrega la
     página en vez de cortarse.

     La luz vive en pseudo-elementos, que no se pueden seleccionar desde JS, así
     que se anima una custom property del propio hero y el CSS la consume. */
  const hero = document.querySelector<HTMLElement>('.hero');
  if (hero) {
    gsap.timeline({
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.4 },
    })
      .to(hero, { '--rd-hero-shift': '64px', ease: 'none' }, 0)
      .to('.hero__inner', { y: 108, opacity: 0.35, ease: 'none' }, 0);
  }

  clearTimeout(rescate);
});

/* Astro sirve esto como módulo diferido, así que las imágenes y las fuentes
   pueden asentarse después: se recalculan las medidas cuando todo ha cargado. */
addEventListener('load', () => ScrollTrigger.refresh());
