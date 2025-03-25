<script setup lang="ts">
const title = '学生向けパンフレット'
useSeoMeta({
  title,
  description: '在学生対象の図書館利用案内パンフレットを掲載しています。',
})
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
    <p>在学生対象のパンフレットです</p>
    <VRow>
      <VCol cols="12">
        <contents-student-pamphlet />
      </VCol>
    </VRow>
  </VContainer>
</template>
