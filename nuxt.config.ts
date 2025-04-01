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
    modules: ["@inkline/plugin/nuxt", "@nuxt/image", "@nuxtjs/sitemap", '@nuxt/content'],
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            link: [
                { rel: 'icon', type: 'image/png', sizes:'32x32', href:'/favicon/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes:'16x16', href:'/favicon/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href:'/favicon/apple-touch-icon.png' },
                { rel: 'manifest', href:'/favicon/site.webmanifest' },
            ]
        }
    },

    css: [
      '~/assets/main.scss'
    ],

    devServer: {
        port: 3003,
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

    build: {
        transpile: ['vue3-text-clamp', 'resize-detector']
    },

    content: {
        renderer: {
            anchorLinks: false
        }
    },

});