<script setup lang="ts">
import { items, contentsMap, type Contents } from '~/contents/search-guide'
import { useSelected } from '~/composables/common/useSelected'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const initValue = 'materials-and-copyright'
const { selected } = useSelected<Contents>(initValue)
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
        <VCard>
          <VCardActions>
            <TemplatesListSearchGuide :items />
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <PartsHtmlTextArea :markdown="contentsMap[selected || initValue]" />
      </VCol>
    </VRow>
  </VContainer>
</template>
