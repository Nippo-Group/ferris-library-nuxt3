<script setup lang="ts">
import { useNews } from '@/composables/news/useNews'

const { newsList } = useNews({ limit: 6, orders: '-date' })
</script>

<template>
  <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
    <icons-newspaper-variant start />News
  </div>
  <templates-list-news :contents-list="newsList" />
  <div class="text-center mt-5">
    <elements-btn-inside
      link="ニュース一覧へ"
      to="news"
    />
  </div>
</template>
