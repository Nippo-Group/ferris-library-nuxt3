<script setup lang="ts">
const title = ref('Contact / Access')
useSeoMeta({
  title: title.value,
  description: 'Access to the library and contact information.',
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
        <contents-contact-ryokuen />
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <contents-contact-yamate />
      </v-col>
    </v-row>
  </v-container>
</template>
