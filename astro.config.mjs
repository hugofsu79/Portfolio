import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    output: 'static',
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),

    build: {
        format: 'directory'
    },

    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});