<script setup lang="ts">
import type { News } from '@/types/news'
import { useDisplayMode } from '@/composables/common'
import { isFuture } from '@/utils'

const { mode } = useDisplayMode()

defineProps<{
  contentsList: News[] | undefined
}>()

// 公開モードか
const isPublic = computed(() => mode.value === 'public')

// 公開モードかつ未来のニュースか
const isFutureNews = (news: News): boolean => {
  return isPublic.value && isFuture(news.date)
}
</script>

<template>
  <VCard>
    <VList
      v-if="contentsList"
      lines="two"
    >
      <template
        v-for="(contents) in contentsList"
        :key="contents.id"
      >
        <TemplatesListNewsItem
          v-if="!isFutureNews(contents)"
          :contents="contents"
          :scheduled-post="isFuture(contents.date)"
        />
      </template>
    </VList>
    <VCardText v-else>
      現在、記事はありません。
    </VCardText>
  </VCard>
</template>
