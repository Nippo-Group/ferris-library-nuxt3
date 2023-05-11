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
      </v-row>
      <v-row>
        <v-col cols="12" xl="8">
          <div class="text-center text-md-left text-h5 mb-2">
            <v-icon left>mdi-library-shelves</v-icon>OPAC Detailed search
          </div>
          <home-opac></home-opac>
        </v-col>
      </v-row>
    </v-skeleton-loader>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishIndex',
  layout: 'LayoutEnglish',
  data: () => ({
    title: 'Ferris University Library',
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
