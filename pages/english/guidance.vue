<script setup lang="ts">
import { toursEng, guidanceEng } from '~/contents/guidance'

const title = 'Guidance Workshops'
useSeoMeta({
  title,
  description:
    'Guidance for new students and literature search guidance for graduation thesis and report writing are introduced.',
})
definePageMeta({ layout: 'english' })
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
      <VCol
        cols="12"
        lg="6"
      >
        <templates-card-tour
          :title="toursEng.title"
          :text="toursEng.text"
          :contents="toursEng.contents"
        />
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <templates-card-tour
          :title="guidanceEng.title"
          :text="guidanceEng.text"
          :contents="guidanceEng.contents"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
