<script setup lang="ts">
const drawer = ref<boolean | null>(null);
provide("drawer", drawer);
</script>

<template>
  <v-app id="inspire">
    <layout-navigation-drawer v-model="drawer"></layout-navigation-drawer>
    <layout-header></layout-header>
    <v-main>
      <slot />
    </v-main>
    <layout-footer></layout-footer>
    <layout-to-top></layout-to-top>
    <confirm-download></confirm-download>
  </v-app>
</template>
