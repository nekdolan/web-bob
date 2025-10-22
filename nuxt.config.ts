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
    compatibilityDate: '2025-07-15',
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

    nitro: {
      preset: 'github_pages' // makes output compatible with GitHub Pages
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
            logger: {
              warn(message, options) {
                // Mute "Mixed Declarations" warning
                if (options.deprecation && message.includes('mixed-decls')) {
                  return;
                }
                // List all other warnings
                console.warn(`▲ [WARNING]: ${message}`);
              }
            }
          }
        }
      },
      plugins: [
        {
          name: 'inkline-template-fix',
          enforce: 'pre',
          transform(code, id) {
            // Adjust if your path looks slightly different in the error
            if (id.includes('virtual:nuxt:') && id.includes('inkline.mjs')) {
              // Replace the EJS placeholder with static JSON
              const options = {
                color: 'dark',
                colorMode: 'dark',
                colorModeStrategy: null,
                renderMode: 'universal'
              }
              return {
                code: code.replace(
                  /<%= JSON\.stringify\(options, 4\) %>/g,
                  JSON.stringify(options, null, 4)
                ),
                map: null
              }
            }
            return null
          }
        }
      ]
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

});