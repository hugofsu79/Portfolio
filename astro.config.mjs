// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    server: {
        host: true,
        port: 4322,
        allowedHosts: true
    },
    vite: {
        resolve: {
            alias: {
                "@": "/src",
            },
        },
    },
});