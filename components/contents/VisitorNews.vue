<script setup lang="ts">
import { useNews } from "@/composable/news/useNews";

const { newsList } = useNews({ ids: "a7oeej8j623" });
</script>

<template>
  <div class="text-h6 mb-2">
    <icons-newspaper-variant start></icons-newspaper-variant>
    関連ニュース
    <templates-list-news :contents-list="newsList"></templates-list-news>
  </div>
</template>
