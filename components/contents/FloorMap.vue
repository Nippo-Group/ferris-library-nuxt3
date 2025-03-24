<script setup lang="ts">
const tab = ref(null)
</script>

<template>
  <VTabs
    v-model="tab"
    color="primary"
    grow
  >
    <VTab>緑園本館</VTab>
    <VTab>山手分室</VTab>
  </VTabs>

  <VWindow v-model="tab">
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
            <icons-download-defult />
          </VBtn>
        </VRow>
      </VSheet>
    </VWindowItem>
    <VWindowItem>
      <client-only>
        <templates-pdf-viewer
          src="/documents/floor-map/floor-map-yamate.pdf"
        />
      </client-only>
    </VWindowItem>
  </VWindow>
</template>
