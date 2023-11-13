<script setup lang="ts">
const title = ref("Reference Service");
useSeoMeta({ title: title.value });
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>

    <v-row>
      <v-col cols="12">
        <contents-reference-list-eng />
      </v-col>
    </v-row>
  </v-container>
</template>
