<script setup lang="ts">
const title = 'フロアマップ'
const description = '緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です'
useSeoMeta({ title, description })
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
        <contents-floor-map />
      </VCol>
    </VRow>
  </VContainer>
</template>
