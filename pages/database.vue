<script setup lang="ts">
const title = ref("データベース・電子ブック");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row>
      <v-col cols="12" xl="8">
        <contents-ebook-list />
      </v-col>
    </v-row>
  </v-container>
</template>
