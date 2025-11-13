<script setup lang="ts">
type Props = {
  link: string
  to: string
}
defineProps<Props>()
</script>

<template>
  <VBtn
    color="primary"
    variant="outlined"
    :to="to"
  >
    {{ link }}
  </VBtn>
</template>
