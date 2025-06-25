<script setup lang="ts">
import { tours, guidance } from '~/contents/guidance'

const title = 'ガイダンス'
useSeoMeta({
  title,
  description:
    '新入生向けガイダンスと卒業論文やレポート執筆のための文献検索ガイダンスについてのご紹介です。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <templates-card-tour
          :title="tours.title"
          :text="tours.text"
          :contents="tours.contents"
        />
      </VCol>
      <VCol cols="12">
        <templates-card-tour
          :title="guidance.title"
          :text="guidance.text"
          :contents="guidance.contents"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
