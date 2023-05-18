<script setup lang="ts">
const drawer: Ref<boolean | null> = ref(null);
provide("drawer", drawer);
</script>

<template>
  <v-app id="inspire">
    <layout-header></layout-header>
    <layout-navigation-drawer v-model="drawer"></layout-navigation-drawer>
    <v-main>
      <transition name="fade-page">
        <slot />
      </transition>
    </v-main>
    <layout-footer></layout-footer>
    <layout-to-top></layout-to-top>
  </v-app>
</template>

<style scoped>
.fade-page-enter-active {
  transition: opacity 1s ease-in;
}
.fade-page-enter {
  opacity: 0;
}
</style>
