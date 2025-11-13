<script setup lang="ts">
import { items } from '@/contents/applicationForm'

const title = '各種申込書'
useSeoMeta({ title })
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
        v-for="(item, index) in items"
        :key="index"
        cols="12"
      >
        <VCard>
          <VCardTitle>
            {{ item.name }}
            <VChip
              color="primary"
              variant="tonal"
            >
              {{ item.target }}
            </VChip>
          </VCardTitle>
          <VCardText v-if="item.note">
            {{ item.note }}
          </VCardText>
          <TemplatesListFile :items="item.files" />
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
