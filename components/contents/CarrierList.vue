<script setup lang="ts">
import imgCarrier01 from "~/assets/images/carrier/carrier-01.gif";
import imgCarrier02 from "~/assets/images/carrier/carrier-02.gif";
import type { Item, ItemHeading } from "@/types/carrier";

const tab = ref(null);

const items1: (Item | ItemHeading)[] = [
  {
    name: "JapanKnowledge Lib",
    type: "データベース",
    logout: true,
    content:
      "「会社四季報」や「週刊エコノミスト」など、就活に役立つコンテンツを一括検索できます。（データ更新：毎週）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "http://japanknowledge.com/library/",
      },
    ],
  },
  {
    name: "magazineplus",
    type: "データベース",
    logout: true,
    content:
      "「週刊東洋経済」「一橋ビジネスレビュー」などのビジネス誌のタイトル情報が収録されています。（データ更新：毎週）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "https://web.nichigai.jp/magazine?user_id=FRA",
      },
    ],
  },
  {
    name: "日経テレコン",
    type: "データベース",
    logout: false,
    content:
      "「日本経済新聞」「日経産業新聞」「日経（MJ）流通新聞」（1975年4月から）の記事や企業情報、人事情報などを検索・閲覧できます。（データ更新：毎日）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "https://t21ipau.nikkei.co.jp/ipauth/auth/auth?sid=1",
      },
    ],
  },
];
const items2: (Item | ItemHeading)[] = [
  {
    name: "データベース",
    heading: true,
    content: "",
  },
  {
    name: "朝日新聞クロスサーチ",
    type: "データベース",
    logout: true,
    content:
      "1985年から当日までの「朝日新聞」「AERA」「週刊朝日」の記事を同時に検索・閲覧できます。「就活応援」のジャンルでは、朝日新聞の就活関連記事を、特集ごとに閲覧することができます。（データ更新：毎日）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "https://database.asahi.com/login/loginexec.php?user_id=fej248gyk&password=bby046wwt",
      },
    ],
  },
  {
    name: "毎索",
    type: "データベース",
    logout: true,
    content:
      "創刊号（1872年）からの「毎日新聞」「週刊エコノミスト」「Mainichi Daily News」の記事を検索・閲覧できます。（データ更新：毎日）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "https://dbs.g-search.or.jp/WMAI/WMAI_ipcu_login.html",
      },
    ],
  },
  {
    name: "日経テレコン",
    type: "データベース",
    logout: false,
    content:
      "「日本経済新聞」「日経産業新聞」「日経（MJ）流通新聞」（1975年4月から）の記事や企業情報、人事情報などを検索・閲覧できます。（データ更新：毎日）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "https://www.db-month.biglobe.ne.jp/ferris/",
      },
    ],
  },
  {
    name: "ヨミダス",
    type: "データベース",
    logout: true,
    content:
      "創刊号（1874年）からの読売新聞と、THE JAPAN NEWS（英字新聞）の記事を検索・閲覧できます。就活に特化したコーナーがあります。（データ更新：毎日）",
    access: "学内PCから",
    links: [
      {
        name: "アクセス",
        url: "https://yomidas.yomiuri.co.jp/",
      },
    ],
  },
  {
    name: "雑誌",
    heading: true,
    content:
      "※雑誌は公式Webサイトで記事の一部を読むことができる場合がありますのでアクセスしてみてください",
  },
  {
    name: "AERA",
    type: "雑誌",
    logout: false,
    content:
      "政治、経済、生活関連のニュース週刊誌です。（保存期間1年）（「朝日新聞クロスサーチ」からも検索・閲覧できます）",
    access: "緑園本館2階雑誌コーナー",
    links: [
      {
        name: "朝日新聞クロスサーチ",
        url: "https://xsearch.asahi.com/login/",
      },
    ],
  },
  {
    name: "週刊エコノミスト",
    type: "雑誌",
    logout: false,
    content:
      "経済、外交、社会問題について専門家が分析する総合ビジネス誌です。（保存期間1年）（「Japanknowledge Lib」からも検索・閲覧できます）",
    access: "緑園本館2階雑誌コーナー",
    links: [
      {
        name: "Japanknowledge Lib",
        url: "http://japanknowledge.com/library/",
      },
    ],
  },
  {
    name: "週刊金曜日",
    type: "雑誌",
    logout: false,
    content: "人権、市民運動、平和、環境などを考察しています。（保存期間1年）",
    access: "緑園本館2階雑誌コーナー",
  },
  {
    name: "週刊東洋経済",
    type: "雑誌",
    logout: false,
    content: "最もスタンダードな経済ビジネス情報誌です。（保存期間1年）",
    access: "緑園本館2階雑誌コーナー",
  },
  {
    name: "日経WOMAN",
    type: "雑誌",
    logout: false,
    content: "働く女性のためのビジネス情報誌です。（保存期間1年）",
    access: "緑園本館2階雑誌コーナー",
  },
  {
    name: "Newsweek日本版",
    type: "雑誌",
    logout: false,
    content: "世界中で発行されている国際ニュース誌の日本版です。",
    access: "緑園本館2階雑誌コーナー",
  },
  {
    name: "一橋ビジネスレビュー",
    type: "雑誌",
    logout: false,
    content: "経営マネジメント誌です。経営者インタビューなどを掲載しています。",
    access: "緑園本館2階雑誌コーナー",
  },
];
const items3: (Item | ItemHeading)[] = [
  {
    name: "「なるにはbooks」シリーズ",
    type: "図書",
    logout: false,
    content:
      "専門家の視点からその仕事の魅力を紹介する職業ガイドブックシリーズです。",
    access: "緑園図書館3階 請求記号（背ラベルの番号）：366.29||N53",
  },
];
</script>

<template>
  <v-tabs v-model="tab">
    <v-tab>企業や業種を研究する</v-tab>
    <v-tab>最新の時事情報をつかむ</v-tab>
    <v-tab>職種や資格について調べる</v-tab>
    <v-tab>OPACで関連本を集める</v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item>
      <v-container>
        <elements-header-lv2>企業や業種を研究する</elements-header-lv2>
        <templates-list-carrier :items="items1"/>
      </v-container>
    </v-window-item>
    <v-window-item>
      <v-container>
        <elements-header-lv2>最新の時事情報をつかむ</elements-header-lv2>
        <templates-list-carrier :items="items2"/>
      </v-container>
    </v-window-item>
    <v-window-item>
      <v-container>
        <elements-header-lv2>職種や資格について調べる</elements-header-lv2>
        <templates-list-carrier :items="items3"/>
      </v-container>
    </v-window-item>
    <v-window-item>
      <v-container>
        <elements-header-lv2>OPACで関連本を集める</elements-header-lv2>
        <p class="mb-2">
          「就職」「キャリア」「職業」「業種」「企業」「仕事」「就活」などのキーワードで検索してみましょう。
        </p>
        <elements-btn-my-library/>
        <v-timeline density="compact" side="end">
          <v-timeline-item size="small">
            <v-img :src="imgCarrier01" width="65vw" aspect-ratio="4/3"/>
            <p class="text-caption">部分一致検索にキーワードを入れて検索</p>
          </v-timeline-item>
          <v-timeline-item size="small">
            <v-img :src="imgCarrier02" width="65vw" aspect-ratio="4/3"/>
            <p class="text-caption">情報がヒット</p>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-window-item>
  </v-window>
</template>
