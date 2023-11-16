<script setup lang="ts">
const { contents } = useArticleNews({ ids: "a7oeej8j623" });
</script>

<template>
  <div class="text-center text-md-left text-h6 mb-2">
    <icons-newspaper-variant start></icons-newspaper-variant>
    関連ニュース
    <templates-list-news :contents-list="contents"></templates-list-news>
  </div>
</template>
