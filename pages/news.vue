<script setup lang="ts">
const title = ref("News");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-all-news></contents-all-news>
      </v-col>
    </v-row>
  </v-container>
</template>
