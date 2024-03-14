<script setup lang="ts">
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" tag="section">
        <contents-slide-show></contents-slide-show>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <contents-search-opac></contents-search-opac>
      </v-col>
    </v-row>
  </v-container>
</template>
