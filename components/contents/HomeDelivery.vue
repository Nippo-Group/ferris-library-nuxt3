<script setup lang="ts">
const title = '新型コロナウイルス感染拡大防止措置：宅配による貸出'
const text = '2023年度前期授業方針に従い、2023年5月7日をもって終了しました。'
</script>

<template>
  <VCard>
    <VCardTitle class="wrap-text">
      {{ title }}
    </VCardTitle>
    <VCardText>{{ text }}</VCardText>
  </VCard>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
