<script setup lang="ts">
import { useNavigationDrawer } from '@/composables/layout/useNavigationDrawer'

const { inversion } = useNavigationDrawer()
</script>

<template>
  <VAppBar>
    <template #prepend>
      <VAppBarNavIcon @click.stop="inversion" />
    </template>
    <VAppBarTitle>
      <slot />
    </VAppBarTitle>
  </VAppBar>
</template>
