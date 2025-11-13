<script setup lang="ts">
import type { Newspaper } from '~/app/types/newspaper'
import { iconMap } from '@/utils'

defineProps<{
  items: Newspaper[]
}>()
</script>

<template>
  <VExpansionPanels
    variant="accordion"
    multiple
  >
    <VExpansionPanel
      v-for="(newspaper, index) in items"
      :key="'newspaper' + index"
    >
      <VExpansionPanelTitle>
        <span v-if="!newspaper.subTitle">
          <VIcon
            :icon="iconMap['newspaper']"
            start
          />
          {{ newspaper.title }}
        </span>
        <span
          v-else
          class="newspaper-sub-title"
        >
          <VIcon
            :icon="iconMap['menuRight']"
            start
          />
          {{ newspaper.subTitle }}
        </span>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        <templates-list-newspaper-item
          :country="newspaper.country"
          :publisher="newspaper.publisher"
          :cycle="newspaper.cycle"
          :retention-period="newspaper.retentionPeriod"
          :location="newspaper.location"
          :note="newspaper.note"
        />
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style scoped>
.newspaper-sub-title {
  color: grey;
}
</style>
