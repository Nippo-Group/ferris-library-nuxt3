<script setup lang="ts">
const title = 'キャリア支援'
const description
  = '図書館のキャリア支援のコーナーです。就職活動に役立つ契約データベースや図書館資料を紹介します。'
useSeoMeta({
  title,
  description,
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
          :description
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-carrier-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
