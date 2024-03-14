<script setup lang="ts">
import { useLoading } from "@/composable/layout/useLoading";
const { loading } = useLoading();
</script>

<template>
  <v-main>
    <v-sheet max-width="960">
      <v-skeleton-loader :loading="loading" type="image, subtitle, sentences">
        <slot />
      </v-skeleton-loader>
    </v-sheet>
  </v-main>
</template>
