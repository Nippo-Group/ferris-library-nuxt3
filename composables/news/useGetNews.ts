import type { News } from '@/types/news'
import { useDisplayMode } from '@/composables/common'
import { isFuture } from '@/utils'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

export const useGetNews = (queries: Queries) => {
  const { mode } = useDisplayMode()

  const { data, error } = useMicroCMSGetList<News>({
    endpoint: 'news',
    queries,
  })

  const contents = computed<News[] | undefined>(() => {
    if (mode.value === 'private') {
      return data.value?.contents
    }
    else {
      return data.value?.contents.filter((news) => {
        return !isFuture(news.date)
      })
    }
  })

  return {
    contents,
    error,
  }
}
