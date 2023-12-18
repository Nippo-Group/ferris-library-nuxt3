export const useDisplayMode = () => {
  type Mode = "public" | "private";
  const mode = ref<Mode>("public");

  const setMode = () => {
    const query = useRoute().query.mode;
    if (query === "private") {
      mode.value = "private";
    } else {
      mode.value = "public";
    }
  };
  setMode();

  return {
    mode,
  };
};
