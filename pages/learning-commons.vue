<script setup lang="ts">
const title = ref("ラーニングコモンズ");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row dense>
      <v-col cols="12" md="6">
        <contents-learning-commons />
      </v-col>
      <v-col cols="12" md="6">
        <contents-piano-playing />
      </v-col>
    </v-row>
  </v-container>
</template>
