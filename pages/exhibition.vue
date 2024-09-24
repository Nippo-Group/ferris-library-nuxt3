<script setup lang="ts">
const title = ref('企画展示')
useSeoMeta({
  title: title.value,
  description: '図書館で実施された企画展示についてご紹介しています。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-exhibition-list />
      </v-col>
    </v-row>
  </v-container>
</template>
