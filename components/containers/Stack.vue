<script setup lang="ts">
withDefaults(defineProps<{
  gap?: Gap
  direction?: Direction
  justify?: Justify
  items?: Items
}>(), { gap: 2 })

const gapMap = {
  0: 'ga-0',
  1: 'ga-1',
  2: 'ga-2',
  3: 'ga-3',
  4: 'ga-4',
}

type Gap = keyof typeof gapMap

const directionMap = {
  row: 'flex-row',
  col: 'flex-column',
  rowReverse: 'flex-row-reverse',
  colReverse: 'flex-column-reverse',
}

type Direction = keyof typeof directionMap

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-space-between',
  around: 'justify-space-around',
  evenly: 'justify-space-evenly',
}

type Justify = keyof typeof justifyMap

const itemsMap = {
  start: 'align-start',
  center: 'align-center',
  end: 'align-end',
  stretch: 'align-stretch',
}

type Items = keyof typeof itemsMap
</script>

<template>
  <div
    class="d-flex flex-wrap"
    :class="[
      gapMap[gap],
      direction ? directionMap[direction] : undefined,
      justify ? justifyMap[justify] : undefined,
      items ? itemsMap[items] : undefined,
    ]"
  >
    <slot />
  </div>
</template>
