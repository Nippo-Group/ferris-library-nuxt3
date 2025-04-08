<script setup lang="ts">
import { items } from '@/contents/how-to-find'

const title = '資料の探し方'
useSeoMeta({
  title,
  description: '資料探しのヒントとなる書類をまとめています。',
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
      <VCol>
        <VRow
          v-for="(item, i) in items"
          :key="i"
        >
          <VCol cols="12">
            <VCard>
              <VCardTitle>{{ item.category }}</VCardTitle>
              <TemplatesListFile :items="item.contents" />
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>
