/**
 * Constantes de despliegue de Red Desk.
 * Los cuatro TODO son los únicos datos que faltan; la página compila y
 * funciona sin ellos, degradando de forma visible en vez de romperse.
 */

/** Dominio final. Alimenta canonical, og:url, hreflang y el sitemap. */
export const SITE = 'https://reddesk.com'; // TODO: dominio definitivo

/** Correo público del estudio. */
export const EMAIL = 'hola@reddesk.com'; // TODO: correo real

/** Perfil de LinkedIn. Cadena vacía = el enlace no se renderiza. */
export const LINKEDIN = ''; // TODO: https://www.linkedin.com/company/…

/**
 * Access key de https://web3forms.com (gratuita, sin servidor).
 * Vacía = el formulario se muestra deshabilitado con un aviso y el correo
 * directo pasa a ser el canal visible, en vez de tragarse los envíos.
 */
export const WEB3FORMS_KEY = ''; // TODO: access key de Web3Forms

export const LOCALES = ['es', 'en', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const isLocale = (v: string): v is Locale =>
  (LOCALES as readonly string[]).includes(v);
