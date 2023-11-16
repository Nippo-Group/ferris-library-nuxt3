export const usePagination = (contentsSize: number, pageBreak: number) => {
  const page = ref<number>(1);

  const pageLength = computed<number>(() => {
    return Math.ceil(contentsSize / pageBreak);
  });

  const itemEnd = computed(() => page.value * pageBreak);
  const itemStart = computed(() => itemEnd.value - pageBreak);

  return {
    page,
    pageLength,
    itemEnd,
    itemStart,
  };
};
