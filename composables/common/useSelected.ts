export const useSelected = <T>(init?: T) => {
  const selected = ref<T | undefined>(init)

  const setSelected = (value: T): void => {
    selected.value = value
  }

  return { selected, setSelected }
}
