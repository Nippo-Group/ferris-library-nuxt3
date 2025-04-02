import type { Exhibition } from '@/types/exhibitions'
import type { Queries } from '@/composables/exhibition/useGetExhibitions'

import { useGetExhibitions } from '@/composables/exhibition/useGetExhibitions'
import { getFiscalYear } from '@/utils'

export const useExhibitions = (queries: Queries) => {
  const { contents, error } = useGetExhibitions(queries)

  const exhibitionList = ref<Exhibition[] | undefined>()
  type FilterFunc = (news: Exhibition) => boolean
  const filterFuncs = ref<FilterFunc[]>([])

  const exhibitionListSize = computed<number>(() => {
    return exhibitionList.value ? exhibitionList.value.length : 0
  })

  const years = computed<string[] | undefined>(() => {
    const arr = contents.value?.map((news) => {
      return getFiscalYear(news.date)
    })
    const set = new Set(arr)
    return [...set]
  })

  const setFilterFuncs = (funcs: FilterFunc[]) => {
    filterFuncs.value = funcs
  }

  const reverse = () => {
    exhibitionList.value?.reverse()
  }

  watchEffect(() => {
    let arr = contents.value
    if (filterFuncs.value) {
      arr = arr?.filter((value) => {
        const judges: boolean[] = []
        for (const func of filterFuncs.value) {
          judges.push(func(value))
        }
        return judges.every(judg => judg === true)
      })
    }
    exhibitionList.value = arr
  })

  return {
    exhibitionList,
    exhibitionListSize,
    years,
    error,
    setFilterFuncs,
    reverse,
  }
}
