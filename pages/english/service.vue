<script setup lang="ts">
const title = ref('Lending Service')
useSeoMeta({
  title: title.value,
  description:
    'Information about the library\'s service list, number of books checked out, and loan periods.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-service-list />
      </v-col>
      <v-col
        cols="12"
        class="text-center"
      >
        <elements-btn-my-library />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <contents-lending-notes />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <contents-lending-period />
      </v-col>
    </v-row>
  </v-container>
</template>
