<script setup lang="ts">
import type { News } from "@/types/news";
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

const { show } = useConfirmDL();

const title = ref("学外の方へ");
useSeoMeta({ title: title.value });

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { ids: "a7oeej8j623" },
});

const selected = ref();

const items = [
  "卒業生・修了生",
  "定年退職教職員",
  "他大学所属の教員、学生の方",
  "神奈川県内大学図書館共通閲覧証をお持ちの方",
  "横浜市内大学図書館コンソーシアム参加大学所属の方",
  "一般の方",
];
type Service = {
  title?: string;
  type: "info" | "success" | "warning" | "error";
  notes: string;
};
type Pdf = {
  title: string;
  url: string;
  name: string;
  type: "PDF";
};
type ItemsContents = {
  name: string;
  service: Service[];
  pdfs?: Pdf[];
};
const itemsContents: ItemsContents[] = [
  {
    name: "卒業生・修了生",
    service: [
      {
        title: "来館 館内複写",
        type: "success",
        notes: "身分証明書をお持ちください。",
      },
      {
        title: "貸出",
        type: "success",
        notes:
          "カウンターでライブラリーカードの発行手続きをしてください。貸出冊数・期間については貸出サービスをご覧ください。",
      },
      {
        title: "複写取り寄せ",
        type: "error",
        notes: "直接ご来館の上、複写してください。",
      },
    ],
  },
  {
    name: "定年退職教職員",
    service: [
      {
        title: "来館 館内複写",
        type: "success",
        notes: "身分証明書をお持ちください。",
      },
      {
        title: "貸出",
        type: "success",
        notes:
          "カウンターでライブラリーカードの発行手続きをしてください。貸出冊数・期間については貸出サービスをご覧ください。",
      },
      {
        title: "複写取り寄せ",
        type: "error",
        notes: "直接ご来館の上、複写してください。",
      },
    ],
  },
  {
    name: "他大学所属の教員、学生の方",
    service: [
      {
        type: "warning",
        notes: "ご所属の大学図書館を通じてお申し込みの上、ご利用ください。",
      },
      {
        title: "来館 館内複写",
        type: "success",
        notes:
          "<strong>所属の大学図書館発行の紹介状</strong>と学生証・身分証明書をお持ちください。また、事前に所属の図書館を通じて来館日と利用資料をお知らせください。",
      },
      {
        title: "貸出",
        type: "error",
        notes: "館外貸出はできません。図書館間貸出をご利用ください。",
      },
      {
        title: "複写取り寄せ",
        type: "success",
        notes:
          "所属の大学図書館を通じて、著作権の範囲で資料のコピーを取り寄せることが出来ます。",
      },
      {
        title: "図書館間貸出",
        type: "success",
        notes:
          "所属の大学図書館に資料をお送りします。楽譜・AV資料・雑誌・貴重書は対象外です。お送りした資料は館内利用（閲覧）のみ可能です。持ち出し、複写はできません。",
      },
    ],
  },
  {
    name: "神奈川県内大学図書館共通閲覧証をお持ちの方",
    service: [
      {
        title: "来館 館内複写",
        type: "success",
        notes:
          "学生は<strong>大学院女子学生</strong>、<strong>学部女子学生</strong>に限ります。共通閲覧証と学生証・身分証明書をお持ちの上、直接ご来館ください。定期試験期間のため、1月、7月を除きます。",
      },
      {
        title: "貸出",
        type: "error",
        notes: "館外貸出はできません。図書館間貸出をご利用ください。",
      },
    ],
  },
  {
    name: "横浜市内大学図書館コンソーシアム参加大学所属の方",
    service: [
      {
        title: "来館 館内複写",
        type: "success",
        notes:
          "学生は<strong>大学院女子学生</strong>、<strong>学部女子学生</strong>に限ります。学生証・身分証明書をお持ちの上、直接ご来館ください。定期試験期間のため1月、7月を除きます。",
      },
      {
        title: "貸出",
        type: "error",
        notes: "館外貸出はできません。図書館間貸出をご利用ください。",
      },
    ],
    pdfs: [
      {
        title: "フェリス女学院大学附属図書館コンソーシアム利用案内",
        url: "/documents/consortium/ferris.pdf",
        name: "コンソーシアム利用案内",
        type: "PDF",
      },
    ],
  },
  {
    name: "一般の方",
    service: [
      {
        title: "来館 館内複写",
        type: "success",
        notes:
          "「利用希望資料」「利用希望日時」を明記した公共図書館など公的機関発行の紹介状と、身分証明書をお持ちください。",
      },
      {
        title: "貸出",
        type: "error",
        notes: "館外貸出はできません。",
      },
    ],
  },
];
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row dense>
      <v-col v-if="data" cols="12" md="10" lg="8" xl="6">
        <div class="text-center text-md-left text-h6 mb-2">
          <icons-newspaper-variant start></icons-newspaper-variant>
          関連ニュース
        </div>
        <list-news :contents="data?.contents"></list-news>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6" class="mt-2">
        <v-select
          v-model="selected"
          :items="items"
          variant="filled"
          label="選択してください"
        ></v-select>
        <template v-for="(content, index) in itemsContents">
          <v-card
            v-if="selected == content.name"
            :key="index"
            transition="scroll-x-transition"
          >
            <v-card-title>{{ content.name }}</v-card-title>
            <v-card-text>
              <div class="alerts-wrapper">
                <v-alert
                  v-for="(service, index2) in content.service"
                  :key="index + '-' + index2"
                  variant="outlined"
                  :type="service.type"
                  prominent
                  :border="false"
                >
                  <div v-if="service.title" class="text-h6">
                    {{ service.title }}
                  </div>
                  <div v-if="service.notes" v-html="service.notes"></div>
                </v-alert>
              </div>
            </v-card-text>
            <v-card-actions v-if="content.pdfs">
              <v-list>
                <v-list-item
                  v-for="(pdf, index3) in content.pdfs"
                  :key="'pdf' + index3"
                  link
                  @click="show(pdf.title, pdf.url, pdf.type)"
                >
                  <v-list-item-title class="wrap-text">
                    {{ pdf.title }}
                  </v-list-item-title>
                  <template #append>
                    <icons-file-pdf></icons-file-pdf>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.alerts-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
