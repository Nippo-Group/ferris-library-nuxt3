<script setup lang="ts">
import { useLoading } from "@/composable/layout/useLoading";
const { loading } = useLoading();
</script>

<template>
  <v-main>
    <v-skeleton-loader
      :loading="loading"
      max-width="800"
      type="image, subtitle, sentences"
    >
      <slot />
    </v-skeleton-loader>
  </v-main>
</template>
