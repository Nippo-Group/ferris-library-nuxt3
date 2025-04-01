<script setup lang="ts">
import { toursEng, guidanceEng } from '@/contents/tour'

const title = 'Tour and Guidance Workshops'
useSeoMeta({
  title,
  description:
    'Tour for new students, guidance on literature search for graduation thesis and report writing.',
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
