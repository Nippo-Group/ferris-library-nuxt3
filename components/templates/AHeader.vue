<script setup lang="ts">
import { useNavigationDrawer } from "@/composable/layout/useNavigationDrawer";

const { inversion } = useNavigationDrawer();
</script>

<template>
  <v-app-bar color="white">
    <v-app-bar-nav-icon @click.stop="inversion"></v-app-bar-nav-icon>
    <v-toolbar-title class="pl-2">
      <slot />
    </v-toolbar-title>
  </v-app-bar>
</template>

<style scoped>
.ferris-logo {
  vertical-align: middle;
  max-width: 100%;
}
.site-title {
  font-feature-settings: "palt";
  font-weight: bold;
}
.fade-image-enter-active {
  transition: all 0.5s ease-out;
}
.fade-image-enter {
  transform: translateX(200px);
  opacity: 0;
}
</style>
