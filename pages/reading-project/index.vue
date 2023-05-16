<template>
  <v-sheet color="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12" xl="8">
          <v-card tile>
            <v-img
              :src="titleImage"
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
              height="180px"
            >
              <v-card-title class="text-h4"
                ><span class="page-title">読書運動</span
                ><span class="page-title">プロジェクト</span></v-card-title
              >
            </v-img>
          </v-card>
        </v-col>
        <reading-project-is-waht @onClick="openConfirmDownload">
          <list-news :pagination="false" :contents="contents"> </list-news>
        </reading-project-is-waht>
        <reading-project-activity-introduction />
        <!--<reading-project-activity-report />-->
        <reading-project-activity-base />
        <reading-project-contact-address />
      </v-row>
      <confirm-download
        ref="confirmDownload"
        :file="openFile"
      ></confirm-download>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "PageReadingProjectIndex",
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: "news",
      queries: { ids: "tzndu8jahabw,rne-f461pg" },
    });
    return data;
  },
  data: () => ({
    title: "読書運動プロジェクト",
    titleImage: "~/assets/images/reading-project/reading-project-title.png",
    openFile: {
      name: "活動報告書",
      url: "/documents/reading-project/activity-report2020-2021.pdf",
      type: "PDF",
    },
  }),
  head() {
    return {
      title: this.title,
    };
  },
  methods: {
    openConfirmDownload(content) {
      this.openFile = content;
      this.$refs.confirmDownload.dialogOpen();
    },
  },
};
</script>

<style scoped>
.page-title {
  display: inline-block;
}
</style>
