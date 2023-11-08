<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-btn
    :href="props.url"
    target="_blank"
    class="btn-open-in-new"
    color="grey-lighten-4"
    variant="elevated"
  >
    {{ props.link }}
    <icons-open-in-new end></icons-open-in-new>
  </v-btn>
</template>

<style scoped>
.btn-open-in-new {
  text-transform: none;
}
</style>
