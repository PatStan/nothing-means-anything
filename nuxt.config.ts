// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
    },

    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.3/css/all.css', integrity: 'sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB', crossorigin: 'anonymous'}
            ],
        },
    },

    compatibilityDate: '2024-08-06',
})
