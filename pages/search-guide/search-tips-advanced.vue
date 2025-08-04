<script setup lang="ts">
import { contentsMap } from '~/contents/search-guide'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const id = 'search-tips-advanced'
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <TemplatesToolbarSearchGuide />
      </VCol>
      <VCol cols="12">
        <VCard>
          <VCardText
            class="text-area"
          >
            <PartsHtmlTextArea
              :markdown="
                contentsMap[id]"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
