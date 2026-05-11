<script setup lang="ts">
import type { News } from '@/types/news'
import { dateFormat, iconMap } from '@/utils'
import { useVisible } from '@/composables/common'

defineProps<{
  contents: News
  scheduledPost?: boolean
}>()

const { visible, dismiss, show } = useVisible()

const clickAction = (url?: string): void => {
  if (url) {
    window.open(url, '_blank')
  }
  else {
    show()
  }
}
</script>

<template>
  <VListItem
    link
    class="border-b-sm"
    @click="clickAction(contents.redirect)"
  >
    <VListItemTitle class="wrap-text">
      <span
        v-show="scheduledPost"
        class="text-red-lighten-2"
      >予約投稿：</span>
      {{ contents.title }}
    </VListItemTitle>
    <VListItemSubtitle>
      {{ dateFormat(contents.date, 'ja') }}
    </VListItemSubtitle>
    <template #append>
      <VIcon
        :icon="contents.redirect ? iconMap['openInNew'] :iconMap['arrowRight']"
        class="text-gray-lighten-1"
      />
    </template>
  </VListItem>
  <VDialog
    v-model="visible"
    scrollable
    max-width="800"
  >
    <TemplatesCardNews
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
