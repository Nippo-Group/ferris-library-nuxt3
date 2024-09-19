<script setup lang="ts">
import json from "@/assets/json/digital-collection/collection05.json";

const images = computed(() => {
  return json.map((value) => {
    return {
      num: value.num,
      src: value.src,
      title: value.caption,
      alt: value.caption,
      text: value.text,
      cover: value.cover,
    };
  });
});
</script>

<template>
  <templates-list-image-set-of-three
    :images="images"
  />
</template>
