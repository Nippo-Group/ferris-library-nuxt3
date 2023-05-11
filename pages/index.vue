<template>
  <v-container>
    <v-skeleton-loader
      type="image, card-heading, list-item-two-line, list-item-two-line, list-item-two-line"
      :loading="loading"
    >
      <v-row>
        <v-col cols="12" xl="8">
          <home-main-visual></home-main-visual>
        </v-col>
        <v-col cols="12" xl="8">
          <home-calender></home-calender>
        </v-col>
        <v-col cols="12" xl="8">
          <info-covid-19></info-covid-19>
        </v-col>
        <v-col cols="12" xl="8">
          <div class="text-center text-md-left text-h5 mb-2">
            <v-icon left>mdi-gesture-tap</v-icon>Pick Out
          </div>
          <home-pickout></home-pickout>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" xl="4">
          <div class="text-center text-md-left text-h5 mb-2">
            <v-icon left>mdi-newspaper-variant-outline</v-icon>News
          </div>
          <list-news :contents="contents"></list-news>
          <div class="text-center mt-5">
            <btn-inside link="ニュース一覧へ" to="news"></btn-inside>
          </div>
        </v-col>
        <v-col cols="12" lg="6" xl="4">
          <div class="text-center text-md-left text-h5 mb-2">
            <v-icon left>mdi-library-shelves</v-icon>OPAC 蔵書検索
          </div>
          <home-opac></home-opac>
        </v-col>
      </v-row>
    </v-skeleton-loader>
  </v-container>
</template>

<script>
export default {
  name: 'PageIndex',
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 6, orders: '-date' },
    })
    return data
  },
  data: () => ({
    title: 'フェリス女学院大学附属図書館',
    loading: true,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
  mounted() {
    this.loading = false
  },
}
</script>
