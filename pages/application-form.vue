<script setup lang="ts">
const title = ref('各種申込書')
useSeoMeta({ title: title.value })
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
    <VRow>
      <VCol cols="12">
        <contents-application-form-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
