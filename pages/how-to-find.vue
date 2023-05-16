<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" lg="6">
        <v-card>
          <v-card-title>{{ item.category }}</v-card-title>
          <v-list>
            <v-list-item
              v-for="(content, j) in item.contents"
              :key="j"
              link
              @click="openConfirmDownload(content)"
            >
              <v-list-item-subtitle class="mb-2">
                <v-chip v-if="content.target" small color="primary lighten-2">
                  {{ content.target }}
                </v-chip>
                <v-chip v-if="content.date" small outlined>
                  {{ content.date }}
                </v-chip>
              </v-list-item-subtitle>
              <v-list-item-title class="wrap-text">
                {{ content.name }}
              </v-list-item-title>
              <template #append>
                <v-icon>mdi-file-pdf-box</v-icon>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <confirm-download ref="confirmDownload" :file="openFile"></confirm-download>
  </v-container>
</template>

<script>
export default {
  name: "PageHowToFind",
  data: () => ({
    title: "資料の探し方",
    openFile: {},
    items: [
      {
        category: "音楽資料の探し方",
        contents: [
          {
            target: "学部生向け",
            name: "音楽資料の探し方：超入門",
            date: "2021年2月",
            url: "/documents/how-to-find/music-materials.pdf",
            type: "PDF",
          },
        ],
      },
      {
        category: "検索ツールの使い方",
        contents: [
          {
            target: "学部生向け",
            name: "OPACの使い方",
            date: "2020年6月",
            url: "/documents/how-to-find/how-to-use-opac.pdf",
            type: "PDF",
          },
          {
            target: "学部生向け",
            name: "CiNiiの使い方",
            date: "2022年8月",
            url: "/documents/how-to-find/how-to-use-cinii.pdf",
            type: "PDF",
          },
        ],
      },
      {
        category: "図書館アドバイス会配付資料",
        contents: [
          {
            target: "学部生向け",
            name: "かしこい図書館の使い方ちょっとアドバイス会（レポート準備編）",
            date: "2022年6月2日実施",
            url: "/documents/how-to-find/report-advice.pdf",
            type: "PDF",
          },
          {
            target: "留学生向け",
            name: "かしこい図書館の使い方ちょっとアドバイス会",
            date: "2022年5月11日実施",
            url: "/documents/how-to-find/advice-for-international-students.pdf",
            type: "PDF",
          },
          {
            target: "学部生向け",
            name: "かしこい図書館の使い方ちょっとアドバイス会（卒論準備編）",
            date: "2022年7月5日日実施",
            url: "/documents/how-to-find/graduation-thesis-advice.pdf",
            type: "PDF",
          },
        ],
      },
      {
        category: "参考：文献検索のレッスン資料",
        contents: [
          {
            target: "3～4年生向け",
            name: "英語英米文学科専門ゼミ（アメリカ文学）説明資料",
            date: "2022年4月実施",
            url: "/documents/how-to-find/english-literature-seminar-american.pdf",
            type: "PDF",
          },
          {
            target: "3～4年生向け",
            name: "英語英米文学科専門ゼミ（日英語比較・異文化コミュニケーション）説明資料",
            date: "2022年6月実施",
            url: "/documents/how-to-find/english-literature-seminar-comparison.pdf",
            type: "PDF",
          },
          {
            target: "3～4年生向け",
            name: "コミュニケーション学科専門ゼミ（心理学）説明資料",
            date: "2022年6月実施",
            url: "/documents/how-to-find/communication-seminar-psychology.pdf",
            type: "PDF",
          },
          {
            target: "3～4年生向け",
            name: "国際交流学科専門演習（ヨーロッパ史）説明資料",
            date: "2022年5月実施",
            url: "/documents/how-to-find/international-exchange-semina-european.pdf",
            type: "PDF",
          },
          {
            target: "3～4年生向け",
            name: "国際交流学科専門演習（中国研究）説明資料",
            date: "2022年6月実施",
            url: "/documents/how-to-find/international-exchange-seminar-chinese.pdf",
            type: "PDF",
          },
        ],
      },
    ],
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
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
