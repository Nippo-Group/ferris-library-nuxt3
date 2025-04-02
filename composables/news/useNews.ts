import type { News } from '@/types/news'
import type { Queries } from '@/composables/news/useGetNews'

import { useGetNews } from '@/composables/news/useGetNews'
import { getFiscalYear } from '@/utils'

export const useNews = (queries: Queries) => {
  const { contents, error } = useGetNews(queries)

  const newsList = ref<News[] | undefined>()
  type FilterFunc = (news: News) => boolean
  const filterFuncs = ref<FilterFunc[]>([])

  const newsListSize = computed<number>(() => {
    return newsList.value ? newsList.value.length : 0
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
    newsList.value = arr
  })

  return {
    newsList,
    newsListSize,
    years,
    error,
    setFilterFuncs,
  }
}
