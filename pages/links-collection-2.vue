<script setup lang="ts">
import { categories, items } from '@/contents/links-collection2'
import { useSelected } from '@/composables/common/'

const title = '二次情報リンク集'
const description
  = '国内外の図書館の所蔵情報、図書や雑誌（論文）のタイトル・著者といった書誌情報など、一次情報にアクセスするための二次情報を入手できるサイトを集めました。'
useSeoMeta({
  title,
  description,
})

const { selected } = useSelected<string>('各種図書館が所蔵している資料を探す')
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
          :description
        />
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
