import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE, LOCALES, DEFAULT_LOCALE } from './src/config.ts';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
    }),
  ],
});
