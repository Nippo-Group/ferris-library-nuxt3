<script setup lang="ts">
import { useNavigationDrawer } from '@/composables/layout/useNavigationDrawer'
import type { IconKey } from '@/utils'
import { getIcon } from '@/utils'

const { visible } = useNavigationDrawer()

type Submenu = {
  title: string
  id: string
  subtitle?: string
  push?: string
  href?: string
}
type Menu = {
  category: string
  id: string
  icon: IconKey
  push?: string
  contents?: Submenu[]
}
defineProps<{
  menus: Menu[]
}>()
const open = ref([])
</script>

<template>
  <VNavigationDrawer
    v-model="visible"
    :width="320"
    mobile-breakpoint="md"
    tag="nav"
  >
    <VList
      v-model:opened="open"
      color="primary"
      nav
      open-strategy="single"
    >
      <template
        v-for="menu in menus"
        :key="menu.id"
      >
        <VListItem
          v-if="menu.push"
          :to="menu.push"
          :title="menu.category"
          :prepend-icon="getIcon(menu.icon)"
        />
        <VListGroup
          v-else
          :value="menu.id"
        >
          <template #activator="{ props }">
            <VListItem
              v-bind="props"
              :title="menu.category"
              :prepend-icon="getIcon(menu.icon)"
            />
          </template>
          <VListItem
            v-for="content in menu.contents"
            :key="content.id"
            :title="content.title"
            :subtitle="content.subtitle || undefined"
            :to="content.push || undefined"
            :href="content.href || undefined"
            :target="content.href ? '_blank' : '_self'"
            :append-icon="content.href ? getIcon('openInNew') : undefined"
            link
          />
        </VListGroup>
      </template>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
