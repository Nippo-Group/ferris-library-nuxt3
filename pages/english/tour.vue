<script setup lang="ts">
const title = ref('Tour and Guidance Workshops')
useSeoMeta({
  title: title.value,
  description:
    'Tour for new students, guidance on literature search for graduation thesis and report writing.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <contents-the-tour />
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <contents-the-guidance />
      </v-col>
    </v-row>
  </v-container>
</template>
