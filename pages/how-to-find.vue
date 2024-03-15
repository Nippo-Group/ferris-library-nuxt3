<script setup lang="ts">
const title = ref("資料の探し方");
useSeoMeta({
  title: title.value,
  description: "資料探しのヒントとなる書類をまとめています。",
});
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <contents-how-to-find-list />
  </v-container>
</template>
