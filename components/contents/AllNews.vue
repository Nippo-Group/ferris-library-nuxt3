<script setup lang="ts">
import { useNews } from '@/composable/news/useNews'
import type { News } from '@/types/news'

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
const { getfiscalYear } = useFiscalYear()

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
      return getfiscalYear(news.date) === yearValue.value
    }
  }
  setFilterFuncs([func])
})
</script>

<template>
  <elements-selection-year
    v-model="yearValue"
    :items="yearItems"
  />
  <templates-list-news :contents-list="displayList" />
  <v-pagination
    v-model="page"
    :length="pageLength"
  />
</template>
