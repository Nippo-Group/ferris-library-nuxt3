<script setup lang="ts">
const title = ref('フロアマップ')
useSeoMeta({ title: title.value, description: '図書館のフロアマップです。' })
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>
    <p>緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です</p>

    <VRow>
      <VCol cols="12">
        <contents-floor-map />
      </VCol>
    </VRow>
  </VContainer>
</template>
