<script setup lang="ts">
definePageMeta({ layout: "english" });
useSeoMeta({
  description: "This is the official website of the Ferris University Library.",
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" tag="section">
        <contents-slide-show/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <contents-search-opac/>
      </v-col>
    </v-row>
  </v-container>
</template>
