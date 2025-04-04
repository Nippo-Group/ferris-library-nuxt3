<script setup lang="ts">
import { iconMap } from '@/utils'

type Item = {
  title: string
  disabled: boolean
  href: string
}
type Items = {
  items: Item[]
}
defineProps<Items>()
</script>

<template>
  <VBreadcrumbs
    :items="items"
    color="primary"
    class="ml-0"
  >
    <template #divider>
      <VIcon :icon="iconMap['chevronRight']" />
    </template>
  </VBreadcrumbs>
</template>
