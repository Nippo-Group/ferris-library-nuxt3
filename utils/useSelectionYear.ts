import type { Item } from "@/components/elements/SelectionYear.vue";

export const useSelectionYear = () => {
  const init = ref("all");
  const yearValue = ref<string>(init.value);
  const yearItems = ref<Item[]>([
    {
      label: "すべて",
      value: init.value,
    },
  ]);

  const setYearItems = (list: Item[]) => {
    yearItems.value = yearItems.value.concat(list);
  };

  return {
    yearValue,
    yearItems,
    setYearItems,
  };
};
