<script setup lang="ts">
import json from "@/assets/json/digital-collection/collection01.json";

const images = computed(() => {
  return json.map((value) => {
    return {
      src: value.src,
      title: value.caption,
      alt: value.caption,
      num: value.num,
      prepend: value.alt,
      append: value.lr + "　" + value.poem,
    };
  });
});
</script>

<template>
  <templates-list-image :images="images"/>
</template>
