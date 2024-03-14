<script setup lang="ts">
const title = ref("ツアー・ガイダンス");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-the-tour />
      </v-col>
      <v-col cols="12">
        <contents-the-guidance />
      </v-col>
    </v-row>
  </v-container>
</template>
