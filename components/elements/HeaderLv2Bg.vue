<script setup lang="ts">
defineProps<{
  title: string
  lead?: string
}>()
</script>

<template>
  <v-card
    rounded="0"
    color="red-lighten-3 text-white"
  >
    <v-card-title tag="h2">
      {{ title }}
    </v-card-title>
    <v-card-text
      v-if="lead"
      class="text-justify text-grey-darken-3"
    >
      <div class="text-white">
        {{ lead }}
      </div>
    </v-card-text>
  </v-card>
</template>
