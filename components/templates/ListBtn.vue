<script setup lang="ts">
import { mdiOpenInNew } from '@mdi/js'

type List = {
  name?: string
  href?: string
  push?: string
  openInNew?: boolean
  comment?: string
}
defineProps<{
  list: List[]
}>()
</script>

<template>
  <ul class="link-list">
    <li
      v-for="(item, index) in list"
      :key="'item' + index"
    >
      <v-btn
        v-if="item.name"
        class="text-none"
        color="primary"
        :to="item.push"
        :href="item.href"
        :target="item.href ? '_blank' : '_self'"
        variant="tonal"
      >
        {{ item.name }}
        <v-icon
          v-show="item.openInNew"
          end
          :icon="mdiOpenInNew"
        />
      </v-btn>
      <p class="text-grey">
        {{ item.comment }}
      </p>
    </li>
  </ul>
</template>

<style scoped>
.link-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
