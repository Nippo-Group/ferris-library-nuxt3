<script setup lang="ts">
const title = ref('電子コレクション')
useSeoMeta({
  title: title.value,
  description: '図書館が所有または管理している資料を閲覧することができます。',
})
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>
    <VAlert
      density="compact"
      border="start"
      variant="outlined"
      type="warning"
    >
      当WEBサイト上にある情報や画像などは、フェリス女学院大学附属図書館が所有または管理しています。<br>
      無断転載や無断使用を禁じます。
    </VAlert>
    <VRow>
      <VCol>
        <contents-digital-collection-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
