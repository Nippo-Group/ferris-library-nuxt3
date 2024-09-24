export const usePagination = () => {
  const page = ref<number>(1)
  const contentsSize = ref<number>(1)
  const pageBreak = ref<number>(10)

  const pageLength = computed<number>(() => {
    return Math.ceil(contentsSize.value / pageBreak.value)
  })
  const itemEnd = computed(() => page.value * pageBreak.value)
  const itemStart = computed(() => itemEnd.value - pageBreak.value)

  const setContentSize = (size: number) => {
    contentsSize.value = size
    resetPage()
  }
  const setPageBreak = (size: number) => {
    pageBreak.value = size
    resetPage()
  }

  const resetPage = () => {
    page.value = 1
  }

  return {
    page,
    pageLength,
    itemEnd,
    itemStart,
    setContentSize,
    setPageBreak,
    resetPage,
  }
}
