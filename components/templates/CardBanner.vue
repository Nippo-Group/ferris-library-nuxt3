<script setup lang="ts">
defineProps<{
  href: string
  img: string
  title: string
  height: string
}>()
</script>

<template>
  <VCard
    :href="href"
    target="_blank"
    dark
  >
    <v-img
      :src="img"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :height="height"
      cover
    >
      <VCardTitle class="text-white">
        {{ title }}
        <icons-open-in-new />
      </VCardTitle>
    </v-img>
  </VCard>
</template>
