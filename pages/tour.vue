<script setup lang="ts">
const title = ref('ツアー・ガイダンス')
useSeoMeta({
  title: title.value,
  description:
    '新入生向けのツアーと卒業論文やレポート執筆のための文献検索ガイダンスについてのご紹介です。',
})
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>
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
