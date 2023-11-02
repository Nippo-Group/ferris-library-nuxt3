<script setup lang="ts">
import {
  mdiHome,
  mdiLibrary,
  mdiInformation,
  mdiTextBoxSearchOutline,
  mdiNewspaperVariantOutline,
  mdiBookOpenVariant,
  mdiConnection,
  mdiTranslate,
  mdiOpenInNew,
} from "@mdi/js";
import { useDrawer } from "@/composable/utilities/useDrawer";

const { visible } = useDrawer();

type Submenu = {
  title: string;
  id: string;
  push?: string;
  href?: string;
};
type Menu = {
  category: string;
  id: string;
  icon?: string;
  push?: string;
  contents?: Submenu[];
};
defineProps<{
  menus: Menu[];
}>();

const menusIcons = (name: string) => {
  switch (name) {
    case "home":
      return mdiHome;
    case "facility":
      return mdiLibrary;
    case "service":
      return mdiInformation;
    case "retrieval":
      return mdiTextBoxSearchOutline;
    case "news":
      return mdiNewspaperVariantOutline;
    case "topics":
      return mdiBookOpenVariant;
    case "links":
      return mdiConnection;
    case "englishPage":
      return mdiTranslate;
    case "japanesePage":
      return mdiTranslate;
    default:
      return null;
  }
};

const open = ref([]);
</script>

<template>
  <v-navigation-drawer v-model="visible" :width="320">
    <v-list v-model:opened="open">
      <template v-for="menu in menus" :key="menu.id">
        <v-list-item
          v-if="menu.push"
          :to="menu.push"
          :prepend-icon="menusIcons(menu.id)"
          :title="menu.category"
        >
        </v-list-item>
        <v-list-group
          v-else
          :value="menu.id"
          :prepend-icon="menusIcons(menu.id)"
        >
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="menu.category"></v-list-item>
          </template>
          <v-list-item
            v-for="content in menu.contents"
            :key="content.id"
            :title="content.title"
            :to="content.push ? content.push : null"
            :href="content.href ? content.href : null"
            :target="content.href ? '_blank' : '_self'"
            link
            :append-icon="content.href ? mdiOpenInNew : null"
          >
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
