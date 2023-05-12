import { defineStore } from "pinia";

type Lang = "ja" | "en";
type State = {
  language: Lang;
};

export const useLanguageStore = defineStore("language", {
  state: (): State => ({
    language: "ja",
  }),
  getters: {
    getLang: (state) => {
      return state.language;
    },
  },
  actions: {
    setLang(lang: Lang) {
      this.language = lang;
    },
  },
});
