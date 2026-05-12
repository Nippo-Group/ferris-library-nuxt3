import type { News } from '@/types/news'
import { isFuture } from '@/utils'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

/**
 * APIからニュース記事のリストを取得するためのComposable
 * 注意点： SSGでの運用のため、取得の処理はレンダリング時に行われ、クライアントサイドでは行われないようにすること
 * @param queries 順番・件数・IDなどのクエリパラメータ
 * @returns ニュース記事のリストとエラー情報
 */
export const useGetNews = (queries: Queries) => {
  // 未来の日付の記事を考慮した余裕をもたせたlimit値を設定
  const bufferedLimit = queries.limit ? Math.min(queries.limit + 10, 100) : undefined

  // microCMSからニュースデータを取得
  const { data, error } = useMicroCMSGetList<News>({
    endpoint: 'news',
    queries: { ...queries, limit: bufferedLimit },
  })

  // 取得されたニュースリスト（件数調節）
  const contents = computed<News[]>(() => {
    // 未来のニュースの数をカウント
    const futureCount = data.value?.contents?.filter(news => isFuture(news.date)).length ?? 0

    // リミットで指定された件数＋未来のニュースを返す
    return queries.limit
      ? data.value?.contents?.slice(0, queries.limit + futureCount)
      : data.value?.contents
  })

  return {
    contents,
    error,
  }
}
