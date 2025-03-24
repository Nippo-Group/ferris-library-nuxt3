<script setup lang="ts">
const tab = ref(null)
</script>

<template>
  <v-tabs
    v-model="tab"
    color="primary"
    grow
  >
    <v-tab>緑園本館</v-tab>
    <v-tab>山手分室</v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item>
      <client-only>
        <templates-pdf-viewer
          src="/documents/floor-map/floor-map-ryokuen.pdf"
        />
      </client-only>
      <v-sheet
        align="center"
        color="grey-lighten-3"
        class="pa-6 mt-2"
      >
        <elements-header-lv2>今どこマップ</elements-header-lv2>
        <p>パワーポイントのファイルをダウンロードしますか？</p>
        <VRow
          justify="space-around"
          class="mt-4"
        >
          <v-btn
            href="/documents/floor-map/floor-map_3d.ppsx"
            download="floor-map_3d.ppsx"
          >
            ダウンロード
            <icons-download-defult />
          </v-btn>
        </VRow>
      </v-sheet>
    </v-window-item>
    <v-window-item>
      <client-only>
        <templates-pdf-viewer
          src="/documents/floor-map/floor-map-yamate.pdf"
        />
      </client-only>
    </v-window-item>
  </v-window>
</template>
