<script setup lang="ts">
const title = ref("Tour and Guidance Workshops");
useSeoMeta({ title: title.value });
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
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
