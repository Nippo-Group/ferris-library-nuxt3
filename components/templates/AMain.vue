<script setup lang="ts">
import { useLoading } from '@/composables/layout/useLoading'

const { loading } = useLoading()
</script>

<template>
  <v-main>
    <VSheet max-width="960">
      <v-skeleton-loader
        :loading="loading"
        type="image, subtitle, sentences"
      >
        <slot />
      </v-skeleton-loader>
    </VSheet>
  </v-main>
</template>
