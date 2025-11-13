export const useSelected = <T>(init?: T) => {
  const selected = ref<T | undefined>(init)

  return { selected }
}
