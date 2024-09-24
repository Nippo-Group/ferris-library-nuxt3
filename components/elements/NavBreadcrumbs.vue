<script setup lang="ts">
type Item = {
  title: string
  disabled: boolean
  href: string
}
type Items = {
  items: Item[]
}
defineProps<Items>()
</script>

<template>
  <v-breadcrumbs
    :items="items"
    color="primary"
    class="ml-0"
  >
    <template #divider>
      <icons-chevron-right />
    </template>
  </v-breadcrumbs>
</template>
