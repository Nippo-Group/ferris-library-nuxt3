<script setup lang="ts">
const title = ref("資料の探し方");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-how-to-find-list />
      </v-col>
    </v-row>
  </v-container>
</template>
