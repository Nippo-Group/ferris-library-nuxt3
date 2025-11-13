export const useNavigationDrawer = () => {
  const visible = useState<boolean | null>('visible', () => null)

  const show = () => (visible.value = true)
  const dismiss = () => (visible.value = false)
  const inversion = () => (visible.value = !visible.value)

  return {
    visible,
    show,
    dismiss,
    inversion,
  }
}
