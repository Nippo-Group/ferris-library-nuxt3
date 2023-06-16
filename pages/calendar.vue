<script setup lang="ts">
const title = ref("開館カレンダー・開館時間");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" xl="8">
        <the-calendar></the-calendar>
      </v-col>
      <v-col>
        <info-covid-19></info-covid-19>
      </v-col>
    </v-row>
  </v-container>
</template>
