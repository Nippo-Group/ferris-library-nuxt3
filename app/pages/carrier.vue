<script setup lang="ts">
import type { Categories } from '@/contents/carrier'
import { categories, items1, items2, items3 } from '@/contents/carrier'
import imgCarrier01 from '@/assets/images/carrier/carrier-01.gif'
import imgCarrier02 from '@/assets/images/carrier/carrier-02.gif'
import { useSelected } from '@/composables/common/'

const title = 'キャリア支援'
const description
  = '図書館のキャリア支援のコーナーです。就職活動に役立つ契約データベースや図書館資料を紹介します。'
useSeoMeta({
  title,
  description,
})

const { selected } = useSelected<Categories>()
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
      <VCol cols="12">
        <VTabs v-model="selected">
          <VTab
            v-for="(cat, index) in categories"
            :key="index"
          >
            {{ cat }}
          </VTab>
        </VTabs>

        <VWindow v-model="selected">
          <VWindowItem>
            <VContainer>
              <PartsTitleLv2>{{ categories[0] }}</PartsTitleLv2>
              <templates-list-carrier :items="items1" />
            </VContainer>
          </VWindowItem>
          <VWindowItem>
            <VContainer>
              <PartsTitleLv2>{{ categories[1] }}</PartsTitleLv2>
              <templates-list-carrier :items="items2" />
            </VContainer>
          </VWindowItem>
          <VWindowItem>
            <VContainer>
              <PartsTitleLv2>{{ categories[2] }}</PartsTitleLv2>
              <templates-list-carrier :items="items3" />
            </VContainer>
          </VWindowItem>
          <VWindowItem>
            <VContainer>
              <PartsTitleLv2>{{ categories[3] }}</PartsTitleLv2>
              <p class="mb-2">
                「就職」「キャリア」「職業」「業種」「企業」「仕事」「就活」などのキーワードで検索してみましょう。
              </p>
              <PartsBtnMyLibrary />
              <VTimeline
                density="compact"
                side="end"
              >
                <VTimelineItem size="small">
                  <VImg
                    :src="imgCarrier01"
                    aspect-ratio="4/3"
                    width="676"
                  />
                  <p class="text-caption">
                    部分一致検索にキーワードを入れて検索
                  </p>
                </VTimelineItem>
                <VTimelineItem size="small">
                  <VImg
                    :src="imgCarrier02"
                    aspect-ratio="4/3"
                    width="676"
                  />
                  <p class="text-caption">
                    情報がヒット
                  </p>
                </VTimelineItem>
              </VTimeline>
            </VContainer>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </VContainer>
</template>
