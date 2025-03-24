<script setup lang="ts">
import type { News } from '@/types/news'

defineProps<{
  contents: News
}>()

const { visible, dismiss, show } = useVisible()
const { isReservation } = useReservation()
</script>

<template>
  <VListItem
    link
    @click="show"
  >
    <VListItemTitle class="wrap-text">
      <span
        v-show="isReservation(contents.date)"
        class="text-red-lighten-2"
      >予約投稿：</span>
      {{ contents.title }}
    </VListItemTitle>
    <VListItemSubtitle>
      {{ useDateFormat(contents.date).ja.value }}
    </VListItemSubtitle>
    <template #append>
      <icons-arrow-right-circle
        class="text-gray-lighten-1"
      />
    </template>
  </VListItem>
  <v-dialog
    v-model="visible"
    scrollable
    max-width="600"
  >
    <templates-card-news
      :items="contents"
      @dialog-close="dismiss"
    />
  </v-dialog>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
