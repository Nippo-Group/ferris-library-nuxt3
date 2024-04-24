<script setup lang="ts">
import { useNavigationDrawer } from "@/composable/layout/useNavigationDrawer";
const { visible } = useNavigationDrawer();

type Submenu = {
  title: string;
  id: string;
  subtitle?: string;
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
const open = ref([]);
</script>

<template>
  <v-navigation-drawer
    v-model="visible"
    :width="320"
    mobile-breakpoint="md"
    tag="nav"
  >
    <v-list v-model:opened="open" color="primary" nav open-strategy="single">
      <template v-for="menu in menus" :key="menu.id">
        <v-list-item v-if="menu.push" :to="menu.push" :title="menu.category">
          <template #prepend>
            <elements-nav-icon :name="menu.id" />
          </template>
        </v-list-item>
        <v-list-group v-else :value="menu.id">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="menu.category">
              <template #prepend>
                <elements-nav-icon :name="menu.id" />
              </template>
            </v-list-item>
          </template>
          <v-list-item
            v-for="content in menu.contents"
            :key="content.id"
            :title="content.title"
            :subtitle="content.subtitle || undefined"
            :to="content.push || undefined"
            :href="content.href || undefined"
            :target="content.href ? '_blank' : '_self'"
            link
          >
            <template #append>
              <icons-open-in-new v-if="content.href" />
            </template>
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
