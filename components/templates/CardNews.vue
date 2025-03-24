<script setup lang="ts">
import type { News } from '@/types/news'

defineProps<{
  items: News
}>()

defineEmits(['dialogClose'])

const dayjs = useDayjs()
</script>

<template>
  <VCard tag="article">
    <VCardItem>
      <p class="text-primary mb-4">
        <icons-newspaper-variant />
        News
      </p>
      <VCardTitle
        tag="h1"
        class="card-title"
      >
        {{ items.title }}
      </VCardTitle>
      <VCardSubtitle>
        {{ useDateFormat(dayjs(items.date)).ja.value }}
      </VCardSubtitle>
    </VCardItem>
    <div class="content-body">
      <VCardText class="news-contents">
        <elements-html-text-area :data="items.contents" />
      </VCardText>
      <VCardActions
        v-if="items.actions && items.actions.link"
        class="overflow-x-auto"
      >
        <elements-btn-inside
          v-if="items.actions && items.actions.link && items.actions.to"
          :link="items.actions.link"
          :to="items.actions.to"
        />
        <elements-btn-inside
          v-if="items.actions2 && items.actions2.link && items.actions2.to"
          :link="items.actions2.link"
          :to="items.actions2.to"
        />
      </VCardActions>
      <VCardActions
        v-if="items.openinnew && items.openinnew.link"
        class="overflow-x-auto"
      >
        <elements-btn-open-in-new
          v-if="items.openinnew && items.openinnew.link && items.openinnew.url"
          :link="items.openinnew.link"
          :url="items.openinnew.url"
        />
        <elements-btn-open-in-new
          v-if="
            items.openinnew2 && items.openinnew2.link && items.openinnew2.url
          "
          :link="items.openinnew2.link"
          :url="items.openinnew2.url"
        />
      </VCardActions>
    </div>
    <VDivider />
    <VCardActions class="justify-end">
      <VBtn
        variant="text"
        @click="$emit('dialogClose')"
      >
        Close
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<style scoped>
.card-title {
  text-overflow: inherit;
  white-space: unset;
}
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.content-body {
  max-height: 80vh;
  overflow-y: scroll;
}
</style>
