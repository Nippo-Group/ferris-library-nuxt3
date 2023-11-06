<script setup lang="ts">
const title = ref("News");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <contents-all-news></contents-all-news>
      </v-col>
    </v-row>
  </v-container>
</template>
