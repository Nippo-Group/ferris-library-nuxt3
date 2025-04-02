<script setup lang="ts">
import type { News } from '@/types/news'
import { dateFormat, isFuture } from '@/utils'
import { useVisible } from '@/composables/common'

defineProps<{
  contents: News
}>()

const { visible, dismiss, show } = useVisible()
</script>

<template>
  <VListItem
    link
    @click="show"
  >
    <VListItemTitle class="wrap-text">
      <span
        v-show="isFuture(contents.date)"
        class="text-red-lighten-2"
      >予約投稿：</span>
      {{ contents.title }}
    </VListItemTitle>
    <VListItemSubtitle>
      {{ dateFormat(contents.date, 'ja') }}
    </VListItemSubtitle>
    <template #append>
      <icons-arrow-right-circle
        class="text-gray-lighten-1"
      />
    </template>
  </VListItem>
  <VDialog
    v-model="visible"
    scrollable
    max-width="600"
  >
    <templates-card-news
      :items="contents"
      @dialog-close="dismiss"
    />
  </VDialog>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
