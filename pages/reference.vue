<script setup lang="ts">
const title = ref("レファレンスサービス");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>

    <v-row>
      <v-col cols="12">
        <contents-reference-list />
      </v-col>
    </v-row>
  </v-container>
</template>
