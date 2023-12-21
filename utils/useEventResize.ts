export const useEventResize = (element: Ref<HTMLElement | undefined>) => {
  const width = ref(0);

  const setWidth = () => {
    if (element.value) {
      width.value = element.value.offsetWidth;
    }
  };

  onMounted(() => {
    setWidth();
    window.addEventListener("resize", () => setWidth());
  });

  return {
    width,
  };
};
