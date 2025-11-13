<script setup lang="ts">
import { categories, items } from '@/contents/links-collection1'
import { useSelected } from '@/composables/common/'

const title = '一次情報リンク集'
const description
  = '電子図書館や、電子化された図書や雑誌など、一次情報（源情報、本文そのもの）を入手できるサイトを集めました。'
useSeoMeta({
  title,
  description,
})

const { selected } = useSelected<string>('電子図書館 (Digital Library) ／ 電子化された資料とリンク集')
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        >
          <p>
            {{ description }}
          </p>
          <p>
            なお、当館所蔵の電子化された一次資料は「FAIRフェリス女学院大学学術機関リポジトリ」並びに「電子コレクション」に収録しています。
          </p>
        </SectionsPageHeader>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VSelect
          v-model="selected"
          :items="categories"
          variant="filled"
          label="カテゴリー"
        />
        <TemplatesListLinksCollection
          :items="items"
          :category="selected"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
