import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
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
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  modules: ["@pinia/nuxt"],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
});
