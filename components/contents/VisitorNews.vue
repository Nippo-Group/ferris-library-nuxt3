<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { ids: "a7oeej8j623" },
});
const contents = computed(() => {
  if (data) {
    return data.value?.contents;
  } else {
    return undefined;
  }
});
</script>

<template>
  <div class="text-center text-md-left text-h6 mb-2">
    <icons-newspaper-variant start></icons-newspaper-variant>
    関連ニュース
    <templates-list-news :contents-list="contents"></templates-list-news>
  </div>
</template>
