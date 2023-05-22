import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "フェリス女学院大学附属図書館",
      meta: [
        {
          name: "description",
          content: "フェリス女学院大学附属図書館の公式サイトです。",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", href: "/icon.png" }],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/main.scss"],
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  modules: ["@pinia/nuxt", "nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
});
