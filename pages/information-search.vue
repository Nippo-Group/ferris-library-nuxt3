<script setup lang="ts">
const title = ref("情報検索");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <contents-information-search-links />
    </v-row>
  </v-container>
</template>
