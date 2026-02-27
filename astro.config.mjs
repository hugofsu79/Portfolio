import { defineConfig } from 'astro/config';

export default defineConfig({
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});