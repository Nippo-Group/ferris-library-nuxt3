import type { News } from '@/types/news'
import { useDisplayMode } from '@/composables/common'
import { isFuture } from '@/utils'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

export const useGetNews = (queries: Queries) => {
  // 公開モード・非公開モードの状態を取得
  const { mode } = useDisplayMode()

  // 未来の日付の記事を考慮した余裕をもたせたlimit値を設定
  const bufferedLimit = queries.limit ? queries.limit + 10 : undefined

  // microCMSからニュースデータを取得
  const { data, error } = useMicroCMSGetList<News>({
    endpoint: 'news',
    queries: { ...queries, limit: bufferedLimit },
  })

  // 公開モードと非公開モードで表示するニュースを切り替える
  const contents = computed<News[] | undefined>(() => {
    if (mode.value === 'private') { // 非公開モードの場合は、limit値のニュースと未来のニュースを合わせる
      // 未来のニュースの数をカウント
      const futureCount = data.value?.contents.filter((news) => {
        return isFuture(news.date)
      }).length || 0

      return queries.limit ? data.value?.contents.slice(0, queries.limit + futureCount) : data.value?.contents
    }
    else { // 公開モードの場合は、未来の日付のニュースを除外し、数をlimit値に合わせる
      return data.value?.contents.filter((news) => {
        return !isFuture(news.date)
      }).slice(0, queries.limit)
    }
  })

  return {
    contents,
    error,
  }
}
