<script setup lang="ts">
const title = 'ツアー・ガイダンス'
useSeoMeta({
  title,
  description:
    '新入生向けのツアーと卒業論文やレポート執筆のための文献検索ガイダンスについてのご紹介です。',
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
        <contents-the-tour />
      </VCol>
      <VCol cols="12">
        <contents-the-guidance />
      </VCol>
    </VRow>
  </VContainer>
</template>
