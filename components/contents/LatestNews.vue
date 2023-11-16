<script setup lang="ts">
const { contents } = useArticleNews({ limit: 6, orders: "-date" });
</script>

<template>
  <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
    <icons-newspaper-variant start></icons-newspaper-variant>News
  </div>
  <templates-list-news :contents-list="contents"></templates-list-news>
  <div class="text-center mt-5">
    <elements-btn-inside link="ニュース一覧へ" to="news"></elements-btn-inside>
  </div>
</template>
