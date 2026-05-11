import type { News } from '@/types/news'
import type { Queries } from '@/composables/news/useGetNews'

import { useGetNews } from '@/composables/news/useGetNews'
import { getFiscalYear } from '@/utils'

export const useNews = (queries: Queries) => {
  // ニュースリストを取得
  const { contents, error } = useGetNews(queries)

  // ニュースリスト本体
  const newsList = computed<News[]>(() => {
    const items = contents.value ?? []
    return items.filter(news => filterFuncs.value.every(fn => fn(news)))
  })

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

  return {
    newsList,
    newsListSize,
    years,
    error,
    setFilterFuncs,
  }
}
