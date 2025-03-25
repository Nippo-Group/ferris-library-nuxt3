<script setup lang="ts">
const title = '横浜市内大学図書館コンソーシアム'
const description
  = '横浜市内大学図書館コンソーシアムは、「横浜市内大学間学術・教育交流協議会」の会員校によって、学生の教育機会の多様化を図ること、相互に各図書館の特性を生かしつつ協力し、交流を深め、教育・研究活動の推進を図ることを目的として結成されました。'
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
        <p>
          最新の情報は各館のホームページなどでご確認ください。
        </p>
        <contents-consortium-list />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-consortium-notes />
      </VCol>
    </VRow>
  </VContainer>
</template>
