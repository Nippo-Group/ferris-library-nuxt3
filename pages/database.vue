<script setup lang="ts">
const title = ref("データベース・電子ブック");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12" xl="8">
        <contents-ebook-toolbar />
      </v-col>
    </v-row>
    <contents-ebook-list />
  </v-container>
</template>
