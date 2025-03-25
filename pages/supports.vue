<script setup lang="ts">
const title = '障がいのある方への支援'
useSeoMeta({
  title,
  description: '障がいのある方にへの支援内容をご案内いたします。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        >
          <p>図書館では、障がいのある方に以下の支援を行っています。</p>
        </SectionsPageHeader>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-support-for-persons-with-disabilities />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VAlert
          density="compact"
          type="success"
        >
          上記以外にもサポートが必要でしたら、図書館スタッフまでお申し出ください。できる限りご要望にお応えします。
        </VAlert>
      </VCol>
    </VRow>
  </VContainer>
</template>
