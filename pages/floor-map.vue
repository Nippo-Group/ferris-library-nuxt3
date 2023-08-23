<script setup lang="ts">
const title = ref("フロアマップ");
useSeoMeta({ title: title.value });

const tab = ref(null);
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です</p>

    <v-row>
      <v-col cols="12" lg="10" xl="6">
        <v-tabs v-model="tab" color="primary" grow>
          <v-tab>緑園本館</v-tab>
          <v-tab>山手分室</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item>
            <the-pdf-viewer
              src="/documents/floor-map/floor-map-ryokuen.pdf"
            ></the-pdf-viewer>
            <v-sheet align="center" color="grey-lighten-3" class="pa-6">
              <text-sub-title>今どこマップ</text-sub-title>
              <p>パワーポイントのファイルをダウンロードしますか？</p>
              <v-row justify="space-around" class="mt-4">
                <v-btn
                  href="/documents/floor-map/floor-map_3d.ppsx"
                  download="floor-map_3d.ppsx"
                >
                  ダウンロード
                  <icons-download-defult />
                </v-btn>
              </v-row>
            </v-sheet>
          </v-window-item>
          <v-window-item>
            <the-pdf-viewer
              src="/documents/floor-map/floor-map-yamate.pdf"
            ></the-pdf-viewer>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
