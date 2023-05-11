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

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <display-pdf
              location="/documents/floor-map/floor-map-ryokuen.pdf"
            ></display-pdf>
            <v-sheet align="center" color="grey lighten-3" class="pa-6">
              <text-sub-title>今どこマップ</text-sub-title>
              <p>パワーポイントのファイルをダウンロードしますか？</p>
              <v-row justify="space-around" class="mt-4">
                <v-btn
                  href="/documents/floor-map/floor-map_3d.ppsx"
                  download="floor-map_3d.ppsx"
                >
                  ダウンロード
                  <v-icon right>mdi-download</v-icon>
                </v-btn>
              </v-row>
            </v-sheet>
          </v-tab-item>
          <v-tab-item>
            <display-pdf
              location="/documents/floor-map/floor-map-yamate.pdf"
            ></display-pdf>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageFloorMap',
  data: () => ({
    title: 'フロアマップ',
    tab: null,
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
