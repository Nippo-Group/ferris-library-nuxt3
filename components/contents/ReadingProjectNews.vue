<script setup lang="ts">
import { useNews } from '@/composable/news/useNews'

const newsIds = [
  'bp922vzsag',
  '3-h0zb9femhn',
  '2nqt2bwmsqd',
  'zt10lnwef',
  'tzndu8jahabw',
  'rne-f461pg',
]

const { newsList } = useNews({
  ids: newsIds.join(','),
})
</script>

<template>
  <templates-card-reading-project title="News">
    <templates-list-news :contents-list="newsList" />
  </templates-card-reading-project>
</template>
