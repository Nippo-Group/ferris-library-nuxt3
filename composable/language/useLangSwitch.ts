import { useLanguage } from "@/composable/language/useLanguage";

export const useLangSwitch = <T>(ja: T, en: T) => {
  const { langState } = useLanguage();
  const contents = computed<T>(() => {
    switch (langState.value) {
      case "en":
        return en;
      default:
        return ja;
    }
  });

  return {
    contents,
  };
};
