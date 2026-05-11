import type { News } from '@/types/news'
import type { Queries } from '@/composables/news/useGetNews'

import { useDisplayMode } from '@/composables/common'
import { useGetNews } from '@/composables/news/useGetNews'
import { getFiscalYear, isFuture } from '@/utils'

export const useNews = (queries: Queries) => {
  // 公開モードの状態を取得
  const { mode } = useDisplayMode()

  // ニュースリストを取得
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

  // 未来のニュースを除外するフィルタ関数（公開モードの場合に使用）
  const excludeFutureNews: FilterFunc = (news) => {
    return !isFuture(news.date)
  }

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

    // 公開モードの場合は、未来の日付のニュースを除外するフィルタ関数を追加
    if (mode.value === 'public') {
      setFilterFuncs([excludeFutureNews])
    }
    // フィルタ関数が登録されている場合は、全ての関数を満たすニュースのみを表示
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
