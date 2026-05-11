import type { News } from '@/types/news'
import type { Queries } from '@/composables/news/useGetNews'

import { useGetNews } from '@/composables/news/useGetNews'
import { getFiscalYear } from '@/utils'

export const useNews = (queries: Queries) => {
  const { contents, error } = useGetNews(queries)

  // ニュースリスト本体
  const newsList = ref<News[] | undefined>()

  // ニュースの件数
  const newsListSize = computed<number>(() => {
    return newsList.value ? newsList.value.length : 0
  })

  /**
  * ニュースをフィルタリングする関数の配列
  * 複数の関数が登録された場合、全て true を返すニュースのみを表示
  */
  type FilterFunc = (news: News) => boolean
  const filterFuncs = ref<FilterFunc[]>([])

  // ニュースの年度リスト
  const years = computed<string[]>(() => {
    if (!contents.value) return []

    const uniqueYears = new Set(
      contents.value.map(news => getFiscalYear(news.date)),
    )
    return Array.from(uniqueYears).sort((a, b) => b.localeCompare(a))
  })

  // ニュースを絞り込むための関数群をセットする関数
  const setFilterFuncs = (funcs: FilterFunc[]) => {
    filterFuncs.value = funcs
  }

  // ニュースリストを更新するためのwatchEffect
  watchEffect(() => {
    let arr = contents.value
    if (filterFuncs.value) {
      arr = arr?.filter((value) => {
        return filterFuncs.value.every(func => func(value))
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
