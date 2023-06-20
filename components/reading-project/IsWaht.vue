<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { ids: "tzndu8jahabw,rne-f461pg" },
});

const title = "「読書運動プロジェクト」とは？";
const leadSentence =
  "本学の読書運動プロジェクトは、1998年にシアトル市で始まり、シカゴ市で2001年以降大きな成果を収め全米各地に広まった《One Book, One Community.》にヒントを得たものです。この取組みは、選定された図書の読書を通じてコミュニティの意識を育むOneBook, One Chicagoとしてシカゴ公共図書館で現在も続いています。本学では2002年度から始まり、図書館を拠点として「読書」を個人的な経験だけでなく他者と共有・発信する活動を支援しています。";
const mainActivity = {
  title: "主な活動",
  content: [
    "本の展示",
    "POPコンテスト・創作コンクール",
    "選書ツアー",
    "朗読会",
    "各種イベントの実施",
  ],
};
const documents = [
  {
    name: "活動報告書",
    url: "/documents/reading-project/activity-report2020-2021.pdf",
    type: "PDF",
  },
  {
    name: "リーフレット",
    url: "/documents/reading-project/activity-introduction-leaflet.pdf",
    type: "PDF",
  },
];
type ConfirmDialog = (
  fileName: string,
  fileUrl: string,
  fileType: string
) => void;
const confirmDialog = inject<ConfirmDialog>("confirmDialog");

const recruiting = {
  title: "《学内のみなさまへ》学生メンバー募集中！",
  content: [
    "<p>図書館や本の魅力を学内外の様々な人に伝える活動を、一緒にしてみませんか？<br />学年不問で、いつからでも参加できます。</p>",
    "【こんな人におすすめ！】<ul><li>本が好き</li><li>イラストを描くのが好き</li><li>イベントが好き、企画してみたい</li><li>大学生だからこそできる活動がしたい</li><li>人前で話すのは苦手だが、克服したい</li></ul>",
    "<p>参加希望の方、もっと詳しく活動について知りたい方は、図書館カウンターもしくは下記メールアドレスまでお問い合わせください。</p>",
  ],
};
const mediaInformation = {
  title: "掲載されました！",
  actions: [
    {
      url: "https://magazine.ferris.ac.jp/20220830/16312/",
      title: "読書運動プロジェクト活動報告　～2022夏～",
      source: "フェリスを綴る　2022年8月30日掲載",
    },
    {
      url: "https://magazine.ferris.ac.jp/20221021/17101/",
      title:
        "読書体験の魅力を共有し、新たな本に出会う機会を創出する読書運動プロジェクト",
      source: "フェリスを綴る　2022年10月11日掲載",
    },
    {
      url: "https://magazine.ferris.ac.jp/20230328/17905/",
      title:
        "読書運動プロジェクト：朗読会「しあわせの、かたち。 ―ひとりひとりが願うこと―」を開催しました",
      source: "フェリスを綴る　2023年3月28日掲載",
    },
  ],
};
</script>

<template>
  <card-reading-project :title="title" :lead-sentence="leadSentence">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <card-reading-project-detail :sub-title="mainActivity.title">
            <v-container>
              <v-row dense>
                <v-col cols="12" md="6">
                  <ol class="detail-list">
                    <li
                      v-for="(item, index) in mainActivity.content"
                      :key="index"
                    >
                      {{ item }}
                    </li>
                  </ol>
                </v-col>
                <v-col
                  v-for="(document, index) in documents"
                  :key="`document${index}`"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <card-reading-project-detail-article>
                    <v-card-text>
                      <the-pdf-viewer
                        :src="document.url"
                        :button-hidden="true"
                      ></the-pdf-viewer>
                      <v-btn
                        v-if="confirmDialog"
                        block
                        variant="text"
                        @click="
                          confirmDialog(
                            document.name,
                            document.url,
                            document.type
                          )
                        "
                      >
                        {{ document.name }}
                        <icons-file-pdf end />
                      </v-btn>
                    </v-card-text>
                  </card-reading-project-detail-article>
                </v-col>
              </v-row>
            </v-container>
          </card-reading-project-detail>
        </v-col>
        <v-col cols="12" xl="8">
          <card-reading-project-detail sub-title="Notice">
            <v-container>
              <v-row dense>
                <v-col cols="12" md="6">
                  <card-reading-project-detail-article :name="recruiting.title">
                    <v-card-text>
                      <div
                        v-for="(item, recruitingIndex) in recruiting.content"
                        :key="recruitingIndex"
                        class="mb-4"
                        v-html="item"
                      ></div>
                      <btn-email address="r_library@ferris.ac.jp"></btn-email>
                    </v-card-text>
                  </card-reading-project-detail-article>
                </v-col>
                <v-col cols="12" md="6">
                  <card-reading-project-detail-article
                    :name="mediaInformation.title"
                  >
                    <v-card-text v-if="mediaInformation.actions">
                      <v-list>
                        <v-list-item
                          v-for="(
                            media, mediaIndex
                          ) in mediaInformation.actions"
                          :key="mediaIndex"
                          :href="media.url"
                          target="_blank"
                        >
                          <v-list-item-title>{{
                            media.title
                          }}</v-list-item-title>
                          <v-list-item-subtitle>{{
                            media.source
                          }}</v-list-item-subtitle>
                          <template #append>
                            <icons-open-in-new />
                          </template>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </card-reading-project-detail-article>
                </v-col>
              </v-row>
            </v-container>
          </card-reading-project-detail>
        </v-col>
        <v-col v-if="data" cols="12" xl="4">
          <card-reading-project-detail sub-title="News">
            <list-news :pagination="false" :contents="data.contents">
            </list-news>
          </card-reading-project-detail>
        </v-col>
      </v-row>
    </v-container>
  </card-reading-project>
</template>

<style scoped>
.detail-list {
  list-style-type: none;
  counter-reset: num;
  padding: 0;
}
.detail-list li {
  position: relative;
  padding-left: 3em;
  margin: 0.5em 0;
  line-height: 2em;
}
.detail-list li::before {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  background-color: #ef9a9a;
  color: white;
  font-weight: bold;
  text-align: center;
  counter-increment: num;
  content: counter(num);
}
</style>
