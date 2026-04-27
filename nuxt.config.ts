import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (config.plugins) {
          config.plugins.push(vuetify({ autoImport: true }))
        }
      })
    },
    'nuxt-microcms-module',
    '@nuxt/eslint',
  ],
  ssr: true,
  pages: true,
  devtools: { enabled: true }, app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: undefined,
      meta: [
        {
          name: 'description',
          content: 'フェリス女学院大学附属図書館の公式サイトです。',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  css: ['@/assets/css/main.scss'],
  build: {
    transpile: ['vuetify'],
  }, compatibilityDate: '2024-09-24',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
})
