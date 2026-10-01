<script setup lang="ts">
import { journals } from '~/contents/journal'

const title = '電子ジャーナル'
useSeoMeta({
  title,
  description:
    '電子ジャーナルとは、インターネット上で読むことができる学術雑誌のことです。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        >
          <p>電子ジャーナルとは、インターネット上で読むことができる学術雑誌のことです。</p>
          <p>紙媒体と同時、または紙媒体より早く公開される場合があり、速報性に優れています。</p>
        </SectionsPageHeader>
      </VCol>
    </VRow>

    <VRow>
      <VSlideXTransition group>
        <VCol
          v-for="item in journals"
          :key="item.id"
          cols="12"
        >
          <TemplatesCardJournal
            v-bind="item"
          />
        </VCol>
      </VSlideXTransition>
    </VRow>
  </VContainer>
</template>
