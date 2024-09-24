<script setup lang="ts">
import type { Newspaper } from '@/types/newspaper'

defineProps<{
  items: Newspaper[]
}>()
</script>

<template>
  <v-expansion-panels
    variant="accordion"
    multiple
  >
    <v-expansion-panel
      v-for="(newspaper, index) in items"
      :key="'newspaper' + index"
    >
      <v-expansion-panel-title>
        <span v-if="!newspaper.subTitle">
          <icons-newspaper-variant start />
          {{ newspaper.title }}
        </span>
        <span
          v-else
          class="newspaper-sub-title"
        >
          <icons-menu-right start />
          {{ newspaper.subTitle }}
        </span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <templates-list-newspaper-item
          :country="newspaper.country"
          :publisher="newspaper.publisher"
          :cycle="newspaper.cycle"
          :retention-period="newspaper.retentionPeriod"
          :location="newspaper.location"
          :note="newspaper.note"
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.newspaper-sub-title {
  color: grey;
}
</style>
