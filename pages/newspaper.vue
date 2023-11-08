<script setup lang="ts">
const title = ref("緑園本館所蔵新聞リスト");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="10" xl="8">
        <elements-text-page-title>{{ title }}</elements-text-page-title>
      </v-col>
      <v-col cols="12" lg="10" xl="8">
        <contents-newspaper-list />
      </v-col>
    </v-row>
  </v-container>
</template>
