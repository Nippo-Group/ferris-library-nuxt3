import type { News } from '@/types/news'
import { useDisplayMode } from '@/composables/common'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

export const useGetNews = (queries: Queries) => {
  const { mode } = useDisplayMode()
  const { isReservation } = useReservation()

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
        return !isReservation(news.date)
      })
    }
  })

  return {
    contents,
    error,
  }
}
