<script setup>
const subContentsDialog = ref(false);
const subContentsCard = ref([]);
const mainContents = [
  {
    title: "緑園・山手とも対象者を限定して開館",
    contents:
      '<p class="subtitle-2 text-decoration-underline mt-2">ご利用いただける方</p><p>学部生、大学院生、専任教員、名誉教授、2022年度ご出講の非常勤講師、卒業生・修了生、定年退職教職員、事務職員（副手を含む）、フェリス中高生</p><p>当面の間、上記以外の方は対象外とさせていただきます。一般公開はしていません。開館日時は変更する可能性があります。</p><p>今後の予定は状況により予告なく変更することがあります。今後のスケジュールにつきましては、学生：FerrisPassport、教職員：グループウェアでご確認ください。</p>',
    date: "2022年6月22日現在",
  },
];
const subContents = [
  {
    title: "名誉教授の先生方へ",
    contents:
      '<p>名誉教授の先生方にはご不便をおかけしておりましたが、研究支援の観点から図書館をご利用いただけるようにいたします。</p><p>事前予約は不要です。</p><p>正門での消毒、検温、ご本人確認には、引き続きご協力をお願いいたします。</p><p class="subtitle-2 text-decoration-underline mt-2">資料貸出</p><p>資料貸出を希望される方には、宅配による発送も可能です。図書館あてメールにてご相談ください。</p>',
    date: "2022年6月22日",
  },
  {
    title: "2022年度春季休業中の宅配貸出について",
    contents:
      '<p>新型コロナ感染対策等のためキャンパス入構が困難な学部生及び大学院生については、春季休業中（2023/01/31（火）～2023/04/07（金））も宅配貸出を行います。</p><p class="subtitle-2 text-decoration-underline mt-2 mb-0">申込み</p><p>学外から受けられるサポート＞「宅配による貸出について（PDF）」にしたがい、オンラインレファレンスから申し込んでください。<br>その際、「遠隔受講授業名」の入力は不要です。</p><p class="subtitle-2 text-decoration-underline mt-2 mb-0">注意点</p><p>（1）1回の申込は10冊以内とし、できるだけまとめて申し込んでください。<br>（2）発送は毎週木曜日の予定です。</p>',
    actions: [
      {
        link: "学外から受けられるサポート",
        to: "/off-campus",
      },
    ],
  },
];

const openSubContents = (contents) => {
  subContentsDialog.value = true;
  subContentsCard.value = contents;
};
</script>

<template>
  <v-expansion-panels variant="flat" color="grey-lighten-3">
    <v-expansion-panel title="新型コロナウイルスによる入館制限について">
      <v-expansion-panel-text>
          <template v-for="(section, i) in mainContents" :key="'section-' + i">
            <div class="text-h6">
              {{ section.title }}
            </div>
            <p>
              <div v-html="section.contents"></div>
              <p v-if="section.date" class="text-right">{{ section.date }}</p>
            </p>
          </template>
          <v-item-group>
            <v-container>
            <v-row>
              <v-col
                v-for="(sub, k) in subContents"
                :key="'dialogBtn' + k"
                cols="12"
                md="6"
              >
                <v-btn block variant="outlined" @click="openSubContents(sub)">
                  {{ sub.title }}
                </v-btn>
              </v-col>
            </v-row>
            </v-container>
          </v-item-group>

        <v-dialog v-model="subContentsDialog" max-width="600">
          <v-card>
            <v-card-title>
              {{ subContentsCard.title }}
            </v-card-title>
            <v-card-subtitle v-if="subContentsCard.date">
              {{ subContentsCard.date }}
            </v-card-subtitle>
            <v-card-text>
              <div v-html="subContentsCard.contents"></div>
            </v-card-text>
            <v-card-actions v-if="subContentsCard.actions">
              <btn-inside
                v-for="btn in subContentsCard.actions"
                :key="btn.id"
                :link="btn.link"
                :to="btn.to"
              ></btn-inside>
            </v-card-actions>
            <v-card-actions class="justify-end">
              <v-btn variant="text" @click="subContentsDialog = false"
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.sub-title {
  text-decoration: underline;
}
</style>
