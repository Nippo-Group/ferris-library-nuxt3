<script setup lang="ts">
import { useLanguage } from "@/composable/language/useLanguage";
import menusJapanese from "@/assets/json/menu.json";
import menusEnglish from "@/assets/json/menu-english.json";

const { langState } = useLanguage();

const copyright = "Ferris University Library";

const menus = computed(() => {
  switch (langState.value) {
    case "en":
      return menusEnglish;
    default:
      return menusJapanese;
  }
});
</script>

<template>
  <v-app id="inspire">
    <templates-navigation-drawer :menus="menus"></templates-navigation-drawer>
    <templates-a-header :action="inversion">
      <img
        v-if="langState === 'en'"
        src="~/assets/images/layouts/site-logo-english.png"
        class="ferris-logo"
        width="120"
        height="34"
        alt="Ferris University Library"
      />
      <img
        v-if="langState === 'ja'"
        src="~/assets/images/layouts/site-logo.png"
        class="ferris-logo"
        width="200"
        height="65"
        alt="フェリス女学院大学附属図書館"
      />
    </templates-a-header>
    <v-main>
      <slot />
    </v-main>
    <templates-a-footer :copyright="copyright"></templates-a-footer>
    <templates-to-top></templates-to-top>
    <templates-confirm-download></templates-confirm-download>
  </v-app>
</template>
