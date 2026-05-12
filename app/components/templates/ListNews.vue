<script setup lang="ts">
import type { News } from '@/types/news'
import { isFuture } from '@/utils'

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
        v-for="(contents) in contentsList"
        :key="contents.id"
      >
        <TemplatesListNewsItem
          :contents="contents"
          :scheduled-post="isFuture(contents.date)"
        />
      </template>
    </VList>
    <VCardText v-else>
      現在、記事はありません。
    </VCardText>
  </VCard>
</template>
