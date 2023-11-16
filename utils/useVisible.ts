export const useVisible = () => {
  const visible = ref<boolean>(false);
  const show = () => (visible.value = true);
  const dismiss = () => (visible.value = false);
  const inversion = () => (visible.value = !visible.value);

  return {
    visible: readonly(visible),
    show,
    dismiss,
    inversion,
  };
};
