<script setup lang="ts">
const title = ref("Information search");
useSeoMeta({
  title: title.value,
  description: "Information Retrieval Flowchart",
});
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <contents-information-search-links />
    </v-row>
  </v-container>
</template>
