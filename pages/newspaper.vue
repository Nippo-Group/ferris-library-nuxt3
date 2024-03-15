<script setup lang="ts">
const title = ref("緑園本館所蔵新聞リスト");
useSeoMeta({
  title: title.value,
  description: "所蔵されている新聞の情報をご案内しています。",
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <elements-header-lv1>{{ title }}</elements-header-lv1>
      </v-col>
      <v-col cols="12">
        <contents-newspaper-list />
      </v-col>
    </v-row>
  </v-container>
</template>
