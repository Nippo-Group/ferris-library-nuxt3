import type { Exhibition } from '@/types/exhibitions'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

export const useGetExhibitions = (queries: Queries) => {
  const { mode } = useDisplayMode()
  const { isReservation } = useReservation()

  const { data, error } = useMicroCMSGetList<Exhibition>({
    endpoint: 'exhibition',
    queries,
  })

  const contents = computed<Exhibition[] | undefined>(() => {
    if (mode.value === 'private') {
      return data.value?.contents
    }
    else {
      return data.value?.contents.filter((article) => {
        return !isReservation(article.date)
      })
    }
  })

  return {
    error,
    contents,
  }
}
