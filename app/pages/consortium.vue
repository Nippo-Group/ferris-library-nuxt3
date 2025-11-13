<script setup lang="ts">
import { items, note } from '@/contents/consortium'
import { iconMap } from '@/utils'

const title = '横浜市内大学図書館コンソーシアム'
const description
  = '横浜市内大学図書館コンソーシアムは、「横浜市内大学間学術・教育交流協議会」の会員校によって、学生の教育機会の多様化を図ること、相互に各図書館の特性を生かしつつ協力し、交流を深め、教育・研究活動の推進を図ることを目的として結成されました。'
useSeoMeta({
  title,
  description,
})
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
        <p>
          最新の情報は各館のホームページなどでご確認ください。
        </p>
      </VCol>
      <VCol cols="12">
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
                <VIcon
                  v-if="item.url"
                  :icon="iconMap['openInNew']"
                />
              </template>
            </VListItem>
          </VList>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VAlert
          density="compact"
          type="success"
        >
          <PartsHtmlTextArea :markdown="note" />
        </VAlert>
      </VCol>
    </VRow>
  </VContainer>
</template>
