import { defineStore } from "pinia";

type Lang = "ja" | "en";
type NameObject = {
  en: string;
  ja: string;
};
type State = {
  language: Lang;
};

export const useLanguageStore = defineStore("language", {
  state: (): State => ({
    language: "ja",
  }),
  getters: {
    getName: (state): NameObject => {
      switch (state.language) {
        case "en":
          return {
            en: "English",
            ja: "英語",
          };
        default:
          return {
            en: "Japanese",
            ja: "日本語",
          };
      }
    },
  },
  actions: {
    setLang(lang: Lang) {
      this.language = lang;
    },
  },
});
