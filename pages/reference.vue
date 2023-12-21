<script setup lang="ts">
const title = ref("レファレンスサービス");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>

    <contents-reference-list />
  </v-container>
</template>
