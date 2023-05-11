<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card>
          <v-card-title>{{ cardTitle }}</v-card-title>
          <v-card-text>{{ cardBody }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageOffCampus',
  data: () => ({
    title: '学外から受けられるサポート',
    cardTitle: '新型コロナウイルス感染拡大防止措置：宅配による貸出',
    cardBody: '2023年度前期授業方針に従い、2023年5月7日をもって終了しました。',
  }),
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    openConfirmDownload(content) {
      this.openFile = content
      this.$refs.confirmDownload.dialogOpen()
    },
  },
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
