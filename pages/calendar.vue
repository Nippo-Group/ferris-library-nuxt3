<script setup lang="ts">
const title = ref("開館カレンダー・開館時間");
useSeoMeta({ title: title.value });
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
