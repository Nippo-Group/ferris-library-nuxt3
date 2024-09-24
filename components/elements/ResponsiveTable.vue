<script setup lang="ts">
import { useDisplay } from 'vuetify'

type Items = string[] | number[]
type State = {
  itemsArray: Items[]
  headers: string[]
}
defineProps<State>()

const breakpoint = computed((): string => {
  return useDisplay().name.value
})
const breakpointSmall = computed((): boolean => {
  const array: string[] = ['xs', 'sm']
  return array.includes(breakpoint.value)
})
</script>

<template>
  <v-table v-if="!breakpointSmall">
    <thead>
      <tr>
        <th
          v-for="(headerItem, headerIndex) in headers"
          :key="headerIndex"
        >
          {{ headerItem }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(items, itemsIndex) in itemsArray"
        :key="`row-${itemsIndex}`"
      >
        <td
          v-for="(item, index) in items"
          :key="`${itemsIndex}-${index}`"
        >
          {{ item }}
        </td>
      </tr>
    </tbody>
  </v-table>
  <ul
    v-else
    class="list"
  >
    <li
      v-for="(items, itemsIndex) in itemsArray"
      :key="`row-${itemsIndex}`"
      class="list_item"
    >
      <p
        v-for="(headerItem, headerIndex) in headers"
        :key="headerIndex"
        class="list_item_inner"
      >
        <span class="list_item_inner_header">{{ headerItem }}</span>
        <span class="list_item_inner_body">{{ items[headerIndex] }}</span>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.list {
  list-style: none;
  margin-left: 0;
}
.list_item {
  border-top: grey solid 1px;
  padding: 8px;
}
.list_item_inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.list_item_inner_header {
  color: grey;
}
</style>
