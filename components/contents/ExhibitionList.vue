<script setup lang="ts">
import { useExhibitions } from '@/composables/exhibition/useExhibitions'
import type { Exhibition } from '@/types/exhibitions'

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
const { getfiscalYear } = useFiscalYear()
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
    flag.push(getfiscalYear(date) === yearValue.value)
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
    <VRow dense>
      <VCol cols="12">
        <elements-selection-year
          v-model="yearValue"
          :items="yearItems"
        />
      </VCol>
      <VCol cols="12">
        <v-toolbar
          :border="true"
          color="white"
          density="compact"
          rounded
        >
          <v-text-field
            v-model="keyword"
            hide-details
            single-line
            label="Keywords"
            clearable
          />
          <VSpacer />
          <v-btn
            icon
            @click="reverse"
          >
            <icons-sort-defult />
          </v-btn>
        </v-toolbar>
      </VCol>
    </VRow>
    <VRow v-if="exhibitionList">
      <v-slide-y-transition group>
        <VCol
          v-for="item in exhibitionList"
          v-show="filter(item.title + item.content, item.date)"
          :key="item.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <templates-card-exhibition-list
            :item="item"
            @click="openDitails(item)"
          />
        </VCol>
      </v-slide-y-transition>
    </VRow>
    <VRow v-else>
      <VCol
        cols="12"
        md="6"
        lg="4"
      >
        <v-card title="情報がありません" />
      </VCol>
    </VRow>
  </VContainer>
  <templates-card-exhibition-details
    ref="childRef"
    :eyecatch="eyecatch"
    :category="category"
    :title="contentTitle"
    :place-to-exhibit="placeToExhibit"
    :content="content"
  />
</template>

<style scoped>
.v-move {
  transition: transform 1s;
}
</style>
