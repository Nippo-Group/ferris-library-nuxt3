<script setup lang="ts">
const title = ref('学生向けパンフレット')
useSeoMeta({
  title: title.value,
  description: '在学生対象の図書館利用案内パンフレットを掲載しています。',
})
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <p>在学生対象のパンフレットです</p>
    <VRow>
      <VCol cols="12">
        <contents-student-pamphlet />
      </VCol>
    </VRow>
  </VContainer>
</template>
