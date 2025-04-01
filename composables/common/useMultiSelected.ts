export const useMultiSelected = (init?: string[]) => {
  const selectedList = ref<string[]>(init || [])

  return {
    selectedList,
  }
}
