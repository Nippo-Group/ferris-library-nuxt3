<script setup lang="ts">
const title = ref("Information search");
useSeoMeta({ title: title.value });
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
