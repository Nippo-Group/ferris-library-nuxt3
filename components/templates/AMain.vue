<script setup lang="ts">
import { useLoading } from '@/composables/layout/useLoading'

const { loading } = useLoading()
</script>

<template>
  <v-main>
    <VSheet max-width="960">
      <VSkeletonLoader
        :loading="loading"
        type="image, subtitle, sentences"
      >
        <slot />
      </VSkeletonLoader>
    </VSheet>
  </v-main>
</template>
