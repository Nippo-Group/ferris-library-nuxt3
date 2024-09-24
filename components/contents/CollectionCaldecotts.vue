<script setup lang="ts">
import json from '@/assets/json/digital-collection/collection06.json'

const images = computed(() => {
  return json.map((value) => {
    return {
      src: value.src,
      title: value.caption,
      alt: value.caption,
      append: value.caption,
    }
  })
})
</script>

<template>
  <templates-list-image :images="images" />
</template>
