<script setup lang="ts">
import { useNavigationDrawer } from '@/composables/layout/useNavigationDrawer'

const { inversion } = useNavigationDrawer()
</script>

<template>
  <v-app-bar>
    <template #prepend>
      <v-app-bar-nav-icon @click.stop="inversion" />
    </template>
    <v-app-bar-title>
      <slot />
    </v-app-bar-title>
  </v-app-bar>
</template>
