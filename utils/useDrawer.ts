export const useDrawer = () => {
  const visible = useState<boolean>("visible", () => true);

  const show = () => (visible.value = true);
  const dismiss = () => (visible.value = false);
  const inversion = () => (visible.value = !visible.value);

  return {
    visible,
    show,
    dismiss,
    inversion,
  };
};
