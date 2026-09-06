import { es } from './es';
import { en } from './en';
import { pt } from './pt';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '../config';
import type { Dict } from './es';

export const dicts: Record<Locale, Dict> = { es, en, pt };
export const t = (locale: Locale): Dict => dicts[locale];

/** Ruta canónica de un idioma. */
export const localeHref = (locale: Locale): string => `/${locale}/`;

/** Las cuatro alternativas de hreflang, incluida x-default en la raíz. */
export const alternates = (): { hreflang: string; href: string }[] => [
  ...LOCALES.map((l) => ({ hreflang: dicts[l].htmlLang, href: localeHref(l) })),
  { hreflang: 'x-default', href: '/' },
];

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Dict };
