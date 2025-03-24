<script setup lang="ts">
const title = ref('各種申込書')
useSeoMeta({ title: title.value })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <VCol cols="12">
        <contents-application-form-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
