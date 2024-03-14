<script setup lang="ts">
const title = ref("企画展示");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-exhibition-list />
      </v-col>
    </v-row>
  </v-container>
</template>
