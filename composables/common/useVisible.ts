export const useVisible = (init?: boolean) => {
  const visible = ref(init || false)
  const show = () => (visible.value = true)
  const dismiss = () => (visible.value = false)

  return {
    visible: readonly(visible),
    show,
    dismiss,
  }
}
