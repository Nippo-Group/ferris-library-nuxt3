<script setup lang="ts">
import type { Exhibition } from '~/app/types/exhibitions'
import { useSelectionYear } from '@/composables/common'
import { useExhibitions } from '@/composables/exhibition/useExhibitions'
import { getFiscalYear, iconMap } from '@/utils'

const title = '企画展示'
useSeoMeta({
  title,
  description: '図書館で実施された企画展示についてご紹介しています。',
})

const { exhibitionList, years, reverse } = useExhibitions({
  limit: 100,
  orders: '-date',
})

// ダイアログで詳細を表示
const eyecatch = ref<string>()
const category = ref<string>()
const contentTitle = ref<string>('')
const placeToExhibit = ref<string>()
const content = ref<string>('')
const childRef = ref()
const openDitails = (item: Exhibition) => {
  eyecatch.value = item.eyecatch ? item.eyecatch.url : undefined
  category.value = item.category ? item.category.name : undefined
  contentTitle.value = item.title
  placeToExhibit.value = item.placeToExhibit
    ? item.placeToExhibit.placeToExhibit
    : undefined
  content.value = item.content ? item.content : '読み込みエラー'
  childRef.value.show()
}

// 検索
const keyword = ref<string | undefined>()
const filter = (text: string, date: string): boolean => {
  const flag: boolean[] = []

  if (keyword.value) {
    flag.push(text.includes(keyword.value))
  }
  else {
    flag.push(true)
  }

  if (yearValue.value === 'all') {
    flag.push(true)
  }
  else {
    flag.push(getFiscalYear(date) === yearValue.value)
  }

  return flag.every(value => value === true)
}

const { yearValue, yearItems, setYearItems } = useSelectionYear()
watchEffect(() => {
  setYearItems(years.value)
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsSelectionYear
          v-model="yearValue"
          :items="yearItems"
        />
      </VCol>
      <VCol cols="12">
        <VToolbar
          :border="true"
          color="white"
          density="compact"
          rounded
        >
          <VTextField
            v-model="keyword"
            hide-details
            single-line
            label="Keywords"
            clearable
          />
          <VSpacer />
          <VBtn
            :icon="iconMap['sort']"
            @click="reverse"
          />
        </VToolbar>
      </VCol>
    </VRow>
    <VRow v-if="exhibitionList">
      <VSlideYTransition group>
        <VCol
          v-for="item in exhibitionList"
          v-show="filter(item.title + item.content, item.date)"
          :key="item.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <TemplatesCardExhibitionList
            :item="item"
            @click="openDitails(item)"
          />
        </VCol>
      </VSlideYTransition>
    </VRow>
    <VRow v-else>
      <VCol
        cols="12"
        md="6"
        lg="4"
      >
        <VCard title="情報がありません" />
      </VCol>
    </VRow>
    <TemplatesCardExhibitionDetails
      ref="childRef"
      :eyecatch="eyecatch"
      :category="category"
      :title="contentTitle"
      :place-to-exhibit="placeToExhibit"
      :content="content"
    />
  </VContainer>
</template>

<style scoped>
.v-move {
  transition: transform 1s;
}
</style>
