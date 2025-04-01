export const useMultiSelected = <T>(init?: T[]) => {
  const selectedList = ref<T[]>(init || [])

  return {
    selectedList,
  }
}
