<script setup lang="ts">
const title = ref("学外の方へ");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row dense>
      <v-col cols="12" md="10" lg="8" xl="6">
        <contents-visitor-news />
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6" class="mt-2">
        <contents-visitor-list />
      </v-col>
    </v-row>
  </v-container>
</template>
