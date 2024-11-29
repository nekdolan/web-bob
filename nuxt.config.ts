export const SCSS_Logger = {
    warn(message, options) {
        // Mute "Mixed Declarations" warning
        if (options.deprecation && message.includes('mixed-decls')) {
            return
        }
        // List all other warnings
        console.warn(`▲ [WARNING]: ${message}`);
    },
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      "@inkline/plugin/nuxt",
      "@nuxt/image",
      "@nuxtjs/sitemap",
    ],
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    devServer: {
        port: 3002,
    },

    site: {
        url: 'https://boblazarvindicated.com',
        name: 'Bob Lazar Vindicated',
        description: 'Bob Lazar has been dismissed for centuries, but no more...',
        defaultLocale: 'en'
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    logger: SCSS_Logger,
                },
            },
        },
    },

    inkline: {
        globals: {
            color: 'dark',
            colorMode: 'dark',
            colorModeStrategy: null
        },
    },

    experimental: {
        inlineSSRStyles: false,
    },

});
