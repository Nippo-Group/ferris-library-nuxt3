<script setup lang="ts">
import type { News } from '@/types/news'
import { dateFormat, iconMap } from '@/utils'

defineProps<{
  items: News
}>()

defineEmits(['dialogClose'])
</script>

<template>
  <VCard tag="article">
    <VCardItem>
      <p class="text-primary mb-4">
        <VIcon :icon="iconMap['newspaper']" />
        News
      </p>
      <VCardTitle
        tag="h1"
        class="card-title"
      >
        {{ items.title }}
      </VCardTitle>
      <VCardSubtitle>
        {{ dateFormat(items.date, 'ja') }}
      </VCardSubtitle>
    </VCardItem>
    <VDivider />
    <div class="content-body">
      <VCardText class="news-contents">
        <PartsHtmlTextArea :data="items.contents.toString()" />
      </VCardText>
      <VCardActions
        v-if="items.actions && items.actions.link"
        class="overflow-x-auto"
      >
        <PartsBtnInside
          v-if="items.actions && items.actions.link && items.actions.to"
          :link="items.actions.link"
          :to="items.actions.to"
        />
        <PartsBtnInside
          v-if="items.actions2 && items.actions2.link && items.actions2.to"
          :link="items.actions2.link"
          :to="items.actions2.to"
        />
      </VCardActions>
      <VCardActions
        v-if="items.openinnew && items.openinnew.link"
        class="overflow-x-auto"
      >
        <PartsBtnOpenInNew
          v-if="items.openinnew && items.openinnew.link && items.openinnew.url"
          :link="items.openinnew.link"
          :url="items.openinnew.url"
        />
        <PartsBtnOpenInNew
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
