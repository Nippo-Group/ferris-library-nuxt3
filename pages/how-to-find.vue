<script setup lang="ts">
const title = ref("資料の探し方");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12">
        <contents-how-to-find-list />
      </v-col>
    </v-row>
  </v-container>
</template>
