<script setup lang="ts">
import type { News } from '@/types/news'

defineProps<{
  contentsList: News[] | undefined
}>()
</script>

<template>
  <VCard>
    <VList
      v-if="contentsList"
      lines="two"
    >
      <template
        v-for="(contents, index) in contentsList"
        :key="contents.id"
      >
        <VDivider v-show="index > 0" />
        <templates-list-news-item :contents="contents" />
      </template>
    </VList>
    <VCardText v-else>
      現在、記事はありません。
    </VCardText>
  </VCard>
</template>
