<script setup lang="ts">
withDefaults(defineProps<{ gap?: 0 | 1 | 2 | 3 | 4 }>(), { gap: 2 })

const gapMap = {
  0: 'ga-0',
  1: 'ga-1',
  2: 'ga-2',
  3: 'ga-3',
  4: 'ga-4',
}
</script>

<template>
  <div
    class="d-flex flex-wrap"
    :class="gapMap[gap]"
  >
    <slot />
  </div>
</template>
