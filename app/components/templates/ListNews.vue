<script setup lang="ts">
import type { News } from '~/app/types/news'

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
        <TemplatesListNewsItem :contents="contents" />
      </template>
    </VList>
    <VCardText v-else>
      現在、記事はありません。
    </VCardText>
  </VCard>
</template>
