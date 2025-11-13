<script setup lang="ts">
import { iconMap } from '@/utils'

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <VBtn
    :href="props.url"
    target="_blank"
    class="btn-open-in-new"
    color="grey-lighten-4"
    variant="elevated"
    :append-icon="iconMap['openInNew']"
  >
    {{ props.link }}
  </VBtn>
</template>

<style scoped>
.btn-open-in-new {
  text-transform: none;
}
</style>
