import type { News } from '@/types/news'
import { isFuture } from '@/utils'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

export const useGetNews = (queries: Queries) => {
  // 未来の日付の記事を考慮した余裕をもたせたlimit値を設定
  const bufferedLimit = queries.limit ? queries.limit + 10 : undefined

  // microCMSからニュースデータを取得
  const { data, error } = useMicroCMSGetList<News>({
    endpoint: 'news',
    queries: { ...queries, limit: bufferedLimit },
  })

  // 取得されたニュースリスト（件数調節）
  const contents = computed<News[] | undefined>(() => {
    // 未来のニュースの数をカウント
    const futureCount = data.value?.contents.filter((news) => {
      return isFuture(news.date)
    }).length || 0

    // リミットで指定された件数＋未来のニュースを返す
    return queries.limit ? data.value?.contents.slice(0, queries.limit + futureCount) : data.value?.contents
  })

  return {
    contents,
    error,
  }
}
