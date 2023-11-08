<script setup lang="ts">
const title = ref("Calendar");
useSeoMeta({ title: title.value });
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row>
      <v-col cols="12" xl="8">
        <the-calendar></the-calendar>
      </v-col>
    </v-row>
  </v-container>
</template>
