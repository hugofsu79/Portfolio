import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
    output: 'static',
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),

    // --- OPTIMISATIONS AJOUTÉES ---
    compressHTML: true,
    build: {
        format: 'directory',
        inlineStylesheets: 'always',
    },
    // ------------------------------

    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});