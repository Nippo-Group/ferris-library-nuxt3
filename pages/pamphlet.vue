<script setup lang="ts">
import { useSelected } from '@/composables/common/'

const title = '学生向けパンフレット'
useSeoMeta({
  title,
  description: '在学生対象の図書館利用案内パンフレットを掲載しています。',
})

const { selected } = useSelected()
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
    <p>在学生対象のパンフレットです</p>
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
                src="/documents/pamphlet/pamphlet_ryokuen.pdf"
              />
            </client-only>
          </VWindowItem>
          <VWindowItem>
            <client-only>
              <templates-pdf-viewer
                src="/documents/pamphlet/pamphlet_yamate.pdf"
              />
            </client-only>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </VContainer>
</template>
