import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    output: 'server',

    // 2. Domaine off
    site: 'https://hugofoisseau.fr',

    adapter: vercel({
        webAnalytics: { enabled: true }
    }),

    security: {
        checkOrigin: true
    },

    compressHTML: true,
    build: {
        format: 'directory',
        inlineStylesheets: 'always',
    },

    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});