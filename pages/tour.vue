<script setup lang="ts">
const title = ref("ツアー・ガイダンス");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <contents-the-tour />
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <contents-the-guidance />
      </v-col>
    </v-row>
  </v-container>
</template>
