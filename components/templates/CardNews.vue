<script setup lang="ts">
import type { News } from '@/types/news'

defineProps<{
  items: News
}>()

defineEmits(['dialogClose'])

const dayjs = useDayjs()
</script>

<template>
  <v-card tag="article">
    <v-card-item>
      <p class="text-primary mb-4">
        <icons-newspaper-variant />
        News
      </p>
      <v-card-title
        tag="h1"
        class="card-title"
      >
        {{ items.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ useDateFormat(dayjs(items.date)).ja.value }}
      </v-card-subtitle>
    </v-card-item>
    <div class="content-body">
      <v-card-text class="news-contents">
        <elements-html-text-area :data="items.contents" />
      </v-card-text>
      <v-card-actions
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
      </v-card-actions>
      <v-card-actions
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
      </v-card-actions>
    </div>
    <v-divider />
    <v-card-actions class="justify-end">
      <v-btn
        variant="text"
        @click="$emit('dialogClose')"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
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
