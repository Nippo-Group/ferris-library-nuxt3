<script setup lang="ts">
import { useNews } from "@/composable/news/useNews";

const { newsList } = useNews({
  ids: "2nqt2bwmsqd,zt10lnwef,tzndu8jahabw,rne-f461pg",
});
</script>

<template>
  <templates-card-reading-project title="News">
    <templates-list-news :contents-list="newsList"></templates-list-news>
  </templates-card-reading-project>
</template>
