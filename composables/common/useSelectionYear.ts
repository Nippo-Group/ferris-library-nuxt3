import type { Item } from '@/components/parts/SelectionYear.vue'

export const useSelectionYear = () => {
  const initValue: string = 'all'
  const initItem: Item = {
    label: 'すべて',
    value: initValue,
  }

  const yearValue = ref<string>(initValue)
  const yearItems = ref<Item[]>([initItem])

  const setYearItems = (list?: string[]) => {
    yearItems.value = []
    yearItems.value.push(initItem)

    if (list) {
      for (const item of list) {
        yearItems.value.push({ label: `${item}年度`, value: item })
      }
    }
  }

  return {
    yearValue,
    yearItems,
    setYearItems,
  }
}
