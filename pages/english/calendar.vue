<script setup lang="ts">
const title = ref("Calendar");
useSeoMeta({ title: title.value });
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-opening-calendar></contents-opening-calendar>
      </v-col>
    </v-row>
  </v-container>
</template>
