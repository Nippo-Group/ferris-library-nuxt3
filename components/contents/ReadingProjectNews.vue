<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { ids: "zt10lnwef,tzndu8jahabw,rne-f461pg" },
});
</script>

<template>
  <templates-card-reading-project title="News">
    <templates-list-news :contents-list="data?.contents"></templates-list-news>
  </templates-card-reading-project>
</template>
