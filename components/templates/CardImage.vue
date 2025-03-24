<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <VCard
    elevation="0"
    color="grey-lighten-4"
  >
    <VCardText v-if="$slots.prepend">
      <slot name="prepend" />
    </VCardText>
    <VImg
      :src="src"
      :alt="alt"
      aspect-ratio="1"
    >
      <template #placeholder>
        <VRow
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate />
        </VRow>
      </template>
    </VImg>
    <VCardText v-if="$slots.append">
      <slot name="append" />
    </VCardText>
  </VCard>
</template>
