<script setup lang="ts">
defineProps<{
  item: string | string[]
}>()
</script>

<template>
  <span v-if="typeof item === 'string'">{{ item }}</span>
  <div
    v-else
    class="d-flex flex-column"
  >
    <span
      v-for="(line, lineIndex) in item"
      :key="lineIndex"
    >
      {{ line }}
    </span>
  </div>
</template>
