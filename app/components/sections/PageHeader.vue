<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <ContainersStack
    direction="col"
    :gap="0"
  >
    <PartsTitlePage>{{ title }}</PartsTitlePage>
    <slot>
      <p v-if="description">
        {{ description }}
      </p>
    </slot>
  </ContainersStack>
</template>
