export const useSelected = <T>(init?: T) => {
  const selected = ref<T | undefined>(init)

  const setSelected = (value: T): void => {
    selected.value = value
  }

  const removeSelected = (): void => {
    selected.value = undefined
  }

  return { selected, setSelected, removeSelected }
}
