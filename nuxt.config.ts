import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
    'nuxt-microcms-module',
    'dayjs-nuxt',
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
  },
  compatibilityDate: '2024-09-24',
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
    defaultTimezone: 'Asia/Tokyo',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
    ], // Your Day.js plugin
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
