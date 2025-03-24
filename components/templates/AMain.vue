<script setup lang="ts">
import { useLoading } from '@/composables/layout/useLoading'

const { loading } = useLoading()
</script>

<template>
  <VMain>
    <VSheet max-width="960">
      <VSkeletonLoader
        :loading="loading"
        type="image, subtitle, sentences"
      >
        <slot />
      </VSkeletonLoader>
    </VSheet>
  </VMain>
</template>
