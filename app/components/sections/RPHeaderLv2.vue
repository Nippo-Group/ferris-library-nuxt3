<script setup lang="ts">
defineProps<{
  title: string
  lead?: string
}>()
</script>

<template>
  <VCard
    rounded="0"
    color="red-lighten-3 text-white"
  >
    <VCardTitle tag="h2">
      {{ title }}
    </VCardTitle>
    <VCardText
      v-if="lead"
      class="text-justify text-grey-darken-3"
    >
      <div class="text-white">
        {{ lead }}
      </div>
    </VCardText>
  </VCard>
</template>
