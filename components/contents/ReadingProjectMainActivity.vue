<script setup lang="ts">
const title = '主な活動'
const mainActivity = [
  '本の展示',
  'POPコンテスト・創作コンクール',
  '選書ツアー',
  '朗読会',
  '各種イベントの実施',
]
const documents = [
  {
    name: '活動報告書',
    url: '/documents/reading-project/activity-report2020-2021.pdf',
    type: 'PDF',
  },
  {
    name: 'リーフレット',
    url: '/documents/reading-project/activity-introduction-leaflet.pdf',
    type: 'PDF',
  },
]
const { show } = useConfirmDL()
</script>

<template>
  <templates-card-reading-project :title="title">
    <VContainer>
      <VRow dense>
        <VCol
          cols="12"
          md="6"
        >
          <elements-numbered-list :items="mainActivity" />
        </VCol>
        <VCol
          v-for="(document, index) in documents"
          :key="`document${index}`"
          cols="12"
          sm="6"
          md="3"
        >
          <client-only>
            <templates-pdf-viewer
              :src="document.url"
              button-hidden
              pagination-hidden
            />
          </client-only>
          <VBtn
            block
            variant="text"
            @click="show(document.name, document.url, document.type)"
          >
            {{ document.name }}
            <icons-file-pdf end />
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </templates-card-reading-project>
</template>
