<script setup lang="ts">
const drawer: Ref<boolean | null> = ref(null);
provide("drawer", drawer);
</script>

<template>
  <v-app id="inspire">
    <layout-header></layout-header>
    <layout-navigation-drawer v-model="drawer"></layout-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
    <layout-footer></layout-footer>
    <layout-to-top></layout-to-top>
    <confirm-download></confirm-download>
  </v-app>
</template>
