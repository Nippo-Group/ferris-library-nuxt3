export const useVisibleSevral = (max?: number) => {
  const active = ref(0);
  const next = () => {
    if (!max || active.value < max) {
      active.value++;
    }
  };
  const prev = () => {
    if (active.value > 0) {
      active.value--;
    }
  };

  return {
    active,
    next,
    prev,
  };
};
