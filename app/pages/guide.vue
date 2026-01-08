<script setup lang="ts">
import { useSelected } from '@/composables/common/'
import type { File } from '@/types/file'

const title = '図書館利用案内'
const description = '在学生向けの利用案内です。'
useSeoMeta({ title, description })

const { selected } = useSelected()

const items: File[] = [
  {
    name: '図書館の使い方（全般）',
    url: '/documents/guide/guide-general.pdf',
    type: 'PDF',
  },
  {
    name: '資料の探し方',
    url: '/documents/guide/guide-how-to-find.pdf',
    type: 'PDF',
  },
  {
    name: 'MyLibraryの活用方法',
    url: '/documents/guide/guide-my-library.pdf',
    type: 'PDF',
  },
  {
    name: '著作権について',
    url: '/documents/guide/guide-copyright.pdf',
    type: 'PDF',
  },
]
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
        <VTabs
          v-model="selected"
          color="primary"
          grow
        >
          <VTab>緑園本館</VTab>
          <VTab>山手分室</VTab>
        </VTabs>

        <VWindow v-model="selected">
          <VWindowItem>
            <client-only>
              <templates-pdf-viewer
                src="/documents/guide/pamphlet_ryokuen.pdf"
              />
            </client-only>
          </VWindowItem>
          <VWindowItem>
            <client-only>
              <templates-pdf-viewer
                src="/documents/guide/pamphlet_yamate.pdf"
              />
            </client-only>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle>利用案内（詳細）</VCardTitle>
          <VCardText>
            <TemplatesListFile :items />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
