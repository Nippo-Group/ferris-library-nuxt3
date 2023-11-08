<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { ids: "zt10lnwef,tzndu8jahabw,rne-f461pg" },
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
  <templates-list-news :contents-list="contents"></templates-list-news>
</template>
