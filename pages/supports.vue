<script setup lang="ts">
const title = ref('障がいのある方への支援')
useSeoMeta({
  title: title.value,
  description: '障がいのある方にへの支援内容をご案内いたします。',
})
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <VCol cols="12">
        <p>図書館では、障がいのある方に以下の支援を行っています。</p>
      </VCol>
      <VCol cols="12">
        <contents-support-for-persons-with-disabilities />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <v-alert
          density="compact"
          type="success"
        >
          上記以外にもサポートが必要でしたら、図書館スタッフまでお申し出ください。できる限りご要望にお応えします。
        </v-alert>
      </VCol>
    </VRow>
  </VContainer>
</template>
