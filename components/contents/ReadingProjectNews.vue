<script setup lang="ts">
const { contents } = useArticleNews({
  ids: "zt10lnwef,tzndu8jahabw,rne-f461pg",
});
</script>

<template>
  <templates-card-reading-project title="News">
    <templates-list-news :contents-list="contents"></templates-list-news>
  </templates-card-reading-project>
</template>
