import type { Exhibition } from '~/app/types/exhibitions'
import { useDisplayMode } from '@/composables/common'
import { isFuture } from '@/utils'

export type Queries = {
  orders?: string
  limit?: number
  ids?: string
}

export const useGetExhibitions = (queries: Queries) => {
  const { mode } = useDisplayMode()

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
        return !isFuture(article.date)
      })
    }
  })

  return {
    error,
    contents,
  }
}
