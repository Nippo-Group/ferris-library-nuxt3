<script setup lang="ts">
import json from '@/assets/json/digital-collection/collection07.json'

const list = [
  {
    type: 'subheader',
    title: '横浜絵葉書（手彩色）: 明治～大正',
  },
  {
    title: '横浜本町通り、横浜馬車道通り、横浜居留地',
    quantity: 132,
    notes: '※1 ※2',
    avatar: '/images/digital-collection/collection07/group01/group01_023.jpg',
    group: 'group01',
  },
  { type: 'divider', inset: true },
  {
    title: '横浜山手英国病院他',
    quantity: 187,
    notes: '※2',
    avatar: '/images/digital-collection/collection07/group02/group02_1004.jpg',
    group: 'group02',
  },
  { type: 'divider', inset: true },
  {
    title: '海岸通り、桟橋、根岸、元町、伊勢佐木町、三渓園他',
    quantity: 106,
    notes: '※2',
    avatar: '/images/digital-collection/collection07/group03/group03_2083.jpg',
    group: 'group03',
  },
]

type Images = {
  src: string
  caption: string
}
const display = ref<Images[]>()
const gallery = (group: string | undefined) => {
  switch (group) {
    case 'group01':
      display.value = json.group01
      break
    case 'group02':
      display.value = json.group02
      break
    case 'group03':
      display.value = json.group03
      break
    default:
      break
  }
}

const images = computed(() => {
  return display.value?.map((value) => {
    return {
      src: value.src,
      title: value.caption,
      alt: value.caption,
      append: value.caption,
    }
  })
})
</script>

<template>
  <v-card>
    <v-list line="two">
      <template
        v-for="(item, i) in list"
        :key="`group-${i}`"
      >
        <v-list-subheader v-if="item.type === 'subheader'">
          {{
            item.title
          }}
        </v-list-subheader>
        <v-divider v-else-if="item.type === 'divider'" />
        <v-list-item
          v-else
          link
          :prepend-avatar="item.avatar"
          @click="gallery(item.group)"
        >
          <v-list-item-title class="wrap-text">
            {{ item.title }}
            <sup>{{ item.notes }}</sup>
          </v-list-item-title>
          <v-list-item-subtitle> {{ item.quantity }}枚 </v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list>
    <v-card-text>
      <p class="notes">
        <span>※1</span>
        98枚目にフェリス女学院（当時の名称「フェリス和英女学校」）が写っています。
      </p>
      <p class="notes">
        <span>※2</span>
        撮影地が明記されていない絵葉書については、文献や法人のウェブサイトなどを調査し、判明したものは補記しました。
      </p>
    </v-card-text>
  </v-card>
  <templates-list-image
    v-if="images"
    :images="images"
  />
</template>

<style scoped>
.caption {
  margin: 0;
}
.notes {
  margin: 0;
}
.notes span {
  margin-right: 1em;
}
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
