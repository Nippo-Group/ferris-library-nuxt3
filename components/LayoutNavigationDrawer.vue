<script setup>
import menusJapanese from "@/assets/json/menu.json";
import menusEnglish from "@/assets/json/menu-english.json";
import { useLanguageStore } from "@/stores/language";

const langStore = useLanguageStore();

const menus = computed(() => {
  switch (langStore.language) {
    case "en":
      return menusEnglish;
    default:
      return menusJapanese;
  }
});
</script>

<template>
  <v-list>
    <template v-for="menu in menus" :key="menu.id">
      <v-list-item v-if="menu.push" :to="menu.push">
        <template #prepend>
          <v-icon>{{ menu.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ menu.category }}</v-list-item-title>
      </v-list-item>
      <v-list-group v-else :prepend-icon="menu.icon">
        <template #activator>
          <v-list-item-title>{{ menu.category }}</v-list-item-title>
        </template>

        <template v-for="content in menu.contents" :key="content.id">
          <v-list-item
            :to="content.push ? content.push : null"
            :href="content.href ? content.href : null"
            :target="content.href ? '_blank' : '_self'"
            link
          >
            <v-list-item-title class="wrap-text">
              {{ content.title }}
            </v-list-item-title>
            <template v-if="content.icon" #prepend>
              <v-icon>
                {{ content.icon }}
              </v-icon>
            </template>
          </v-list-item>
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
