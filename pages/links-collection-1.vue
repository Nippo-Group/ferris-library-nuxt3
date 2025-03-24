<script setup lang="ts">
const title = '一次情報リンク集'
const description
  = '電子図書館や、電子化された図書や雑誌など、一次情報（源情報、本文そのもの）を入手できるサイトを集めました。'
useSeoMeta({
  title,
  description,
})
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
    <div>
      <p>
        {{ description }}
      </p>
      <p>
        なお、当館所蔵の電子化された一次資料は「FAIRフェリス女学院大学学術機関リポジトリ」並びに「電子コレクション」に収録しています。
      </p>
    </div>
    <contents-links-collection1-list />
  </VContainer>
</template>
