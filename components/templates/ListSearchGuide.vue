<script setup lang="ts">
import type { SearchGuideItem, Contents } from '~/contents/search-guide'
import { iconMap } from '~/utils'

defineProps<{
  items: SearchGuideItem[]
  action: (id: Contents) => void
}>()

const icon = iconMap['arrowRight']
</script>

<template>
  <ContainersStack
    v-for="item in items"
    :key="item.id"
    direction="col"
  >
    <VChip
      :text="item.title"
      :append-icon="item.contents ? icon : undefined"
      :value="item.contents"
      variant="text"
      size="large"
      @click="item.contents ? action(item.contents) : undefined"
    />
    <VSheet
      v-if="item.children"
      class="ml-4 border-s-md"
    >
      <TemplatesListSearchGuide
        :items="item.children"
        :action
      />
    </VSheet>
  </ContainersStack>
</template>
