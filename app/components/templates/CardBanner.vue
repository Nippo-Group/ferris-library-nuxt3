<script setup lang="ts">
import { iconMap } from '@/utils'

defineProps<{
  href: string
  img: string
  title: string
  height: string
}>()
</script>

<template>
  <VCard
    :href="href"
    target="_blank"
    dark
  >
    <VImg
      :src="img"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :height="height"
      cover
    >
      <VCardTitle class="text-white">
        {{ title }}
        <VIcon :icon="iconMap['openInNew']" />
      </VCardTitle>
    </VImg>
  </VCard>
</template>
