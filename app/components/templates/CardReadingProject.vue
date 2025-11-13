<script setup lang="ts">
type State = {
  title?: string
}
defineProps<State>()
</script>

<template>
  <VCard height="100%">
    <VCardTitle
      v-if="title"
      class="text-red-lighten-3"
    >
      {{ title }}
    </VCardTitle>
    <slot />
  </VCard>
</template>

<style scoped>
.title-custom {
  overflow-wrap: break-word;
}
</style>
