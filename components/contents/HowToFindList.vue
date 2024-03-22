<script setup lang="ts">
import type { File } from "@/types/file";

type Item = {
  category: string;
  contents: File[];
};
const items: Item[] = [
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
      {
        target: "学部生向け",
        name: "JapanKnowledge Libの使い方",
        date: "2023年5月",
        url: "/documents/how-to-find/how-to-use-japan-knowledge.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "朝日新聞クロスサーチの使い方",
        date: "2023年5月",
        url: "/documents/how-to-find/how-to-use-asahi-xserch.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "日本文学Web図書館の使い方",
        date: "2023年5月",
        url: "/documents/how-to-find/how-to-use-japanese-literature-web.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "Gale Literatureの使い方",
        date: "2023年5月",
        url: "/documents/how-to-find/how-to-use-gale-literature.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "JSTORの使い方",
        date: "2023年5月",
        url: "/documents/how-to-find/how-to-use-jstor.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "ProQuestの使い方",
        date: "2023年5月",
        url: "/documents/how-to-find/how-to-use-pro-quest.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "図書館アドバイス会配付資料",
    contents: [
      {
        target: "留学生向け",
        name: "かしこい図書館の使い方ちょっとアドバイス会",
        date: "2023年10月実施",
        url: "/documents/how-to-find/advice-for-international-students.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "かしこい図書館の使い方ちょっとアドバイス会（レポート準備編）",
        date: "2023年6月実施",
        url: "/documents/how-to-find/report-advice.pdf",
        type: "PDF",
      },
      {
        target: "学部生向け",
        name: "かしこい図書館の使い方ちょっとアドバイス会（卒論準備編）",
        date: "2023年7月実施",
        url: "/documents/how-to-find/graduation-thesis-advice.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "参考：文献検索のレッスン資料",
    contents: [
      {
        target: "1～2年生向け",
        name: "アカデミック・ライティング入門 説明資料",
        date: "2023年6月実施",
        url: "/documents/how-to-find/academic-writing.pdf",
        type: "PDF",
      },
      {
        target: "3～4年生向け",
        name: "英語英米文学科専門ゼミ（日英語比較・異文化コミュニケーション）説明資料",
        date: "2023年10月実施",
        url: "/documents/how-to-find/english-literature-seminar-american.pdf",
        type: "PDF",
      },
      {
        target: "1～2年生向け",
        name: "日本語日本文学プレ専門ゼミ（日本語教育）説明資料",
        date: "2023年6月実施",
        url: "/documents/how-to-find/japanese-literature-seminar-education.pdf",
        type: "PDF",
      },
      {
        target: "3～4年生向け",
        name: "コミュニケーション学科専門ゼミ（心理学）説明資料",
        date: "2023年6月実施",
        url: "/documents/how-to-find/communication-seminar-psychology.pdf",
        type: "PDF",
      },
      {
        target: "1～2年生向け",
        name: "国際交流学科基礎演習（フランス史・国際関係）説明資料",
        date: "2023年10月実施",
        url: "/documents/how-to-find/international-exchange-semina-france.pdf",
        type: "PDF",
      },
      {
        target: "3～4年生向け",
        name: "国際交流学科専門演習（中国文化）説明資料",
        date: "2023年11月実施",
        url: "/documents/how-to-find/international-exchange-seminar-chinese.pdf",
        type: "PDF",
      },
    ],
  },
];
</script>

<template>
  <v-row v-for="(item, i) in items" :key="i">
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ item.category }}</v-card-title>
        <templates-list-file :items="item.contents"></templates-list-file>
      </v-card>
    </v-col>
  </v-row>
</template>
