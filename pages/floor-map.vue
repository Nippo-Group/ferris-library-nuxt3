<script setup lang="ts">
import { useSelected } from '@/composables/common/useSelected'

const title = 'フロアマップ'
const description = '緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です'
useSeoMeta({ title, description })

const { selected } = useSelected()
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
                src="/documents/floor-map/floor-map-ryokuen.pdf"
              />
            </client-only>
            <VSheet
              align="center"
              color="grey-lighten-3"
              class="pa-6 mt-2"
            >
              <PartsTitleLv2>今どこマップ</PartsTitleLv2>
              <p>パワーポイントのファイルをダウンロードしますか？</p>
              <VRow
                justify="space-around"
                class="mt-4"
              >
                <VBtn
                  href="/documents/floor-map/floor-map_3d.ppsx"
                  download="floor-map_3d.ppsx"
                >
                  ダウンロード
                  <IconsDownloadDefult />
                </VBtn>
              </VRow>
            </VSheet>
          </VWindowItem>
          <VWindowItem>
            <client-only>
              <TemplatesPdfViewer
                src="/documents/floor-map/floor-map-yamate.pdf"
              />
            </client-only>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </VContainer>
</template>
