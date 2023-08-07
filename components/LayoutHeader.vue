<script setup>
import { useLanguage } from "@/composable/language/useLanguage";

const { langState } = useLanguage();

const drawer = inject("drawer");
</script>

<template>
  <v-app-bar color="white">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="pl-2">
      <transition name="fade-image">
        <img
          v-if="langState === 'en'"
          src="~/assets/images/layouts/site-logo-english.png"
          class="ferris-logo"
          width="120"
          height="34"
          alt="Ferris University Library"
        />
      </transition>
      <transition name="fade-image">
        <img
          v-if="langState === 'ja'"
          src="~/assets/images/layouts/site-logo.png"
          class="ferris-logo"
          width="200"
          height="65"
          alt="フェリス女学院大学附属図書館"
        />
      </transition>
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
