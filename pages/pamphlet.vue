<script setup lang="ts">
const title = ref('学生向けパンフレット')
useSeoMeta({
  title: title.value,
  description: '在学生対象の図書館利用案内パンフレットを掲載しています。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <p>在学生対象のパンフレットです</p>
    <v-row>
      <v-col cols="12">
        <contents-student-pamphlet />
      </v-col>
    </v-row>
  </v-container>
</template>
