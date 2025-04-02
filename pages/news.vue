<script setup lang="ts">
import type { News } from '@/types/news'
import { useNews } from '@/composables/news/useNews'
import { getFiscalYear } from '@/utils'

const title = 'News'
useSeoMeta({ title, description: '図書館のニュース一覧です。' })

// ニュース一覧の取得
const { newsList, newsListSize, years, setFilterFuncs } = useNews({
  limit: 100,
  orders: '-date',
})

// ニュース一覧をページネーションの設定にあわせてスライス
const displayList = computed(() => {
  return newsList.value?.slice(itemStart.value, itemEnd.value)
})

// ページネーション機能
const { page, pageLength, itemStart, itemEnd, setContentSize }
  = usePagination()

// 年度別絞り込み機能
const { yearValue, yearItems, setYearItems } = useSelectionYear()

// ウォッチャー
watchEffect(() => {
  setContentSize(newsListSize.value)
  setYearItems(years.value)
})
watch(yearValue, () => {
  const func = (news: News) => {
    if (yearValue.value === 'all') {
      return true
    }
    else {
      return getFiscalYear(news.date) === yearValue.value
    }
  }
  setFilterFuncs([func])
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsSelectionYear
          v-model="yearValue"
          :items="yearItems"
        />
        <templates-list-news :contents-list="displayList" />
        <VPagination
          v-model="page"
          :length="pageLength"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
