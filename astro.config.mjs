import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    output: 'server',
    site: 'https://hugofoisseau.fr',

    adapter: vercel({
        webAnalytics: { enabled: true }
    }),

    // ON DÉSACTIVE LA VÉRIFICATION D'ORIGINE ICI
    security: {
        checkOrigin: false
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