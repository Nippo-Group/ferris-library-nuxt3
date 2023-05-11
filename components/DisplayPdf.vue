<template>
  <v-sheet color="grey lighten-3" class="pa-6">
    <v-pagination
      v-if="totalPageNum > 1"
      v-model="currentPageNum"
      :length="totalPageNum"
      total-visible="5"
      class="mb-2"
    ></v-pagination>
    <vue-pdf
      :src="location"
      :page="currentPageNum"
      @num-pages="totalPageNum = $event"
    >
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-row>
      </template>
    </vue-pdf>
    <v-row align="center" justify="space-around" class="mt-4">
      <v-btn :href="location" target="_blank">
        PDFファイルを開く
        <v-icon right>mdi-download</v-icon>
      </v-btn>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'DisplayPdf',
  props: {
    location: { type: String, default: 'デフォルト設定です' },
  },
  data: () => ({
    currentPageNum: 1,
    totalPageNum: 0,
  }),
}
</script>
