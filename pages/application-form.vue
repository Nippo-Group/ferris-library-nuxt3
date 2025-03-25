<script setup lang="ts">
const title = '各種申込書'
useSeoMeta({ title })
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
        <contents-application-form-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
