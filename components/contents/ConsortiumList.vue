<script setup lang="ts">
const items = [
  {
    name: '神奈川大学図書館',
    url: 'https://www.kanagawa-u.ac.jp/library/',
  },
  {
    name: '関東学院大学図書館',
    url: 'https://kgulibrary.kanto-gakuin.ac.jp/',
  },
  {
    name: '慶應義塾大学日吉メディアセンター',
    url: 'https://www.lib.keio.ac.jp/hiyoshi',
  },
  {
    name: '國學院大學たまプラーザ図書館',
    url: 'https://www.kokugakuin.ac.jp/student/lifesupport/library',
  },
  {
    name: '鶴見大学図書館',
    url: 'https://www.tsurumi-u.ac.jp/site/library-official/',
  },
  {
    name: '桐蔭横浜大学大学情報センター',
    url: 'http://ufinity.toin.ac.jp/',
  },
  {
    name: '東京都市大学横浜キャンパス図書館',
    url: 'https://library.tcu.ac.jp/',
  },
  {
    name: '東洋英和女学院大学図書館',
    url: 'https://www.toyoeiwa.ac.jp/daigaku/shisetsu/library',
  },
  {
    name: 'フェリス女学院大学附属図書館',
  },
  {
    name: '明治学院大学横浜校舎図書館',
    url: 'https://www.meijigakuin.ac.jp/library/',
  },
  {
    name: '横浜国立大学附属図書館',
    url: 'http://www.lib.ynu.ac.jp/',
  },
  {
    name: '横浜商科大学図書館',
    url: 'http://library.shodai.ac.jp/',
  },
  {
    name: '横浜市立大学学術情報センター',
    url: 'https://opac.yokohama-cu.ac.jp/drupal/',
  },
]
</script>

<template>
  <VCard>
    <VCardTitle> 大学名一覧（50音順） </VCardTitle>
    <VList>
      <VListItem
        v-for="(item, index) in items"
        :key="index"
        :link="Boolean(item.url)"
        :href="item.url"
        target="_blank"
        :title="item.name"
      >
        <template #append>
          <icons-open-in-new v-if="item.url" />
        </template>
      </VListItem>
    </VList>
  </VCard>
</template>
