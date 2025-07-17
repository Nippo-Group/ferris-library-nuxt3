<script setup lang="ts">
import { items, contentsMap } from '~/contents/search-guide'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
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
        <VTreeview
          :items
          item-value="id"
          open-all
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <PartsHtmlTextArea :markdown="contentsMap['materials-and-copyright']" />
      </VCol>
    </VRow>
  </VContainer>
</template>
