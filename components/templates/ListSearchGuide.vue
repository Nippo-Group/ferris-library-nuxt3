<script setup lang="ts">
import type { SearchGuideItem } from '~/contents/search-guide'
import { iconMap } from '~/utils'

defineProps<{
  items: SearchGuideItem[]
}>()
</script>

<template>
  <VRow>
    <VCol
      v-for="item in items"
      :key="item.id"
      cols="12"
    >
      <VBtn
        :text="item.title"
        :append-icon="iconMap['arrowRight']"
        :value="item.contents"
      />
      <slot />
    </VCol>
  </VRow>
</template>
