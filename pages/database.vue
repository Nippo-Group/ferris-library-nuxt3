<script setup lang="ts">
const title = ref('データベース・電子ブック')
useSeoMeta({
  title: title.value,
  description:
    '図書館で契約しているデータベースや電子ブックと利用方法を紹介しています。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-ebook-toolbar />
      </v-col>
    </v-row>
    <contents-ebook-list />
  </v-container>
</template>
