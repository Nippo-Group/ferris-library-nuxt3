<script setup lang="ts">
import imgCarrier01 from '@/assets/images/carrier/carrier-01.gif'
import imgCarrier02 from '@/assets/images/carrier/carrier-02.gif'
import imgLibrariELogin from '@/assets/images/carrier/librariE-login.png'
import imgLibrariEQr from '@/assets/images/carrier/librariE-qr.png'
import imgLibrariECarrier from '@/assets/images/carrier/librariE-carrier.png'
import type { Item, ItemHeading } from '@/types/carrier'

const tab = ref(null)

const items1: (Item | ItemHeading)[] = [
  {
    name: 'JapanKnowledge Lib',
    type: 'データベース',
    logout: true,
    content:
      '「会社四季報」や「週刊エコノミスト」など、就活に役立つコンテンツを一括検索できます。（データ更新：毎週）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'http://japanknowledge.com/library/',
      },
    ],
  },
  {
    name: 'magazineplus',
    type: 'データベース',
    logout: true,
    content:
      '「週刊東洋経済」「一橋ビジネスレビュー」などのビジネス誌のタイトル情報が収録されています。（データ更新：毎週）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'https://web.nichigai.jp/magazine?user_id=FRA',
      },
    ],
  },
  {
    name: '日経テレコン',
    type: 'データベース',
    logout: false,
    content:
      '「日本経済新聞」「日経産業新聞」「日経（MJ）流通新聞」（1975年4月から）の記事や企業情報、人事情報などを検索・閲覧できます。（データ更新：毎日）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'https://t21ipau.nikkei.co.jp/ipauth/auth/auth?sid=1',
      },
    ],
  },
]
const items2: (Item | ItemHeading)[] = [
  {
    name: 'データベース',
    heading: true,
    content: '',
  },
  {
    name: '朝日新聞クロスサーチ',
    type: 'データベース',
    logout: true,
    content:
      '1985年から当日までの「朝日新聞」「AERA」「週刊朝日」の記事を同時に検索・閲覧できます。「就活応援」のジャンルでは、朝日新聞の就活関連記事を、特集ごとに閲覧することができます。（データ更新：毎日）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'https://database.asahi.com/login/loginexec.php?user_id=fej248gyk&password=bby046wwt',
      },
    ],
  },
  {
    name: '毎索',
    type: 'データベース',
    logout: true,
    content:
      '創刊号（1872年）からの「毎日新聞」「週刊エコノミスト」「Mainichi Daily News」の記事を検索・閲覧できます。（データ更新：毎日）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'https://dbs.g-search.or.jp/WMAI/WMAI_ipcu_login.html',
      },
    ],
  },
  {
    name: '日経テレコン',
    type: 'データベース',
    logout: false,
    content:
      '「日本経済新聞」「日経産業新聞」「日経（MJ）流通新聞」（1975年4月から）の記事や企業情報、人事情報などを検索・閲覧できます。（データ更新：毎日）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'https://www.db-month.biglobe.ne.jp/ferris/',
      },
    ],
  },
  {
    name: 'ヨミダス',
    type: 'データベース',
    logout: true,
    content:
      '創刊号（1874年）からの読売新聞と、THE JAPAN NEWS（英字新聞）の記事を検索・閲覧できます。就活に特化したコーナーがあります。（データ更新：毎日）',
    access: '学内PCから',
    links: [
      {
        name: 'アクセス',
        url: 'https://yomidas.yomiuri.co.jp/',
      },
    ],
  },
  {
    name: '雑誌',
    heading: true,
    content:
      '※雑誌は公式Webサイトで記事の一部を読むことができる場合がありますのでアクセスしてみてください',
  },
  {
    name: 'AERA',
    type: '雑誌',
    logout: false,
    content:
      '政治、経済、生活関連のニュース週刊誌です。（保存期間1年）（「朝日新聞クロスサーチ」からも検索・閲覧できます）',
    access: '緑園本館2階雑誌コーナー',
    links: [
      {
        name: '朝日新聞クロスサーチ',
        url: 'https://xsearch.asahi.com/login/',
      },
    ],
  },
  {
    name: '週刊エコノミスト',
    type: '雑誌',
    logout: false,
    content:
      '経済、外交、社会問題について専門家が分析する総合ビジネス誌です。（保存期間1年）（「Japanknowledge Lib」からも検索・閲覧できます）',
    access: '緑園本館2階雑誌コーナー',
    links: [
      {
        name: 'Japanknowledge Lib',
        url: 'http://japanknowledge.com/library/',
      },
    ],
  },
  {
    name: '週刊金曜日',
    type: '雑誌',
    logout: false,
    content: '人権、市民運動、平和、環境などを考察しています。（保存期間1年）',
    access: '緑園本館2階雑誌コーナー',
  },
  {
    name: '週刊東洋経済',
    type: '雑誌',
    logout: false,
    content: '最もスタンダードな経済ビジネス情報誌です。（保存期間1年）',
    access: '緑園本館2階雑誌コーナー',
  },
  {
    name: '日経WOMAN',
    type: '雑誌',
    logout: false,
    content: '働く女性のためのビジネス情報誌です。（保存期間1年）',
    access: '緑園本館2階雑誌コーナー',
  },
  {
    name: 'Newsweek日本版',
    type: '雑誌',
    logout: false,
    content: '世界中で発行されている国際ニュース誌の日本版です。',
    access: '緑園本館2階雑誌コーナー',
  },
  {
    name: '一橋ビジネスレビュー',
    type: '雑誌',
    logout: false,
    content: '経営マネジメント誌です。経営者インタビューなどを掲載しています。',
    access: '緑園本館2階雑誌コーナー',
  },
]
const items3: (Item | ItemHeading)[] = [
  {
    name: '「なるにはbooks」シリーズ',
    type: '図書',
    logout: false,
    content:
      '専門家の視点からその仕事の魅力を紹介する職業ガイドブックシリーズです。',
    access: '緑園図書館3階 請求記号（背ラベルの番号）：366.29||N53',
  },
  {
    name: 'LibrariE',
    type: '電子ブック',
    logout: false,
    content:
      'スマートフォンから、いつでもどこでもアクセスできます。「キャリア支援」の特集ページがあります。',
    access: 'https://web.d-library.jp/ferris/g0101/top/',
    links: [
      {
        name: 'アクセス',
        url: 'https://web.d-library.jp/ferris/g0101/top/',
      },
    ],
    imgs: [
      {
        src: imgLibrariELogin,
        width: '600',
        height: '267',
        alt: 'LibrariE ログイン方法',
        caption: 'ログイン方法',
      },
      {
        src: imgLibrariECarrier,
        width: '569',
        height: '363',
        alt: 'LibrariE キャリア支援',
        caption: 'キャリア支援',
      },
      {
        src: imgLibrariEQr,
        width: '92',
        height: '92',
        alt: 'LibrariE QRコード',
        caption: 'QRコード',
      },
    ],
  },
]
</script>

<template>
  <VTabs v-model="tab">
    <VTab>企業や業種を研究する</VTab>
    <VTab>最新の時事情報をつかむ</VTab>
    <VTab>職種や資格について調べる</VTab>
    <VTab>OPACで関連本を集める</VTab>
  </VTabs>

  <VWindow v-model="tab">
    <VWindowItem>
      <VContainer>
        <PartsHeaderLv2>企業や業種を研究する</PartsHeaderLv2>
        <templates-list-carrier :items="items1" />
      </VContainer>
    </VWindowItem>
    <VWindowItem>
      <VContainer>
        <PartsHeaderLv2>最新の時事情報をつかむ</PartsHeaderLv2>
        <templates-list-carrier :items="items2" />
      </VContainer>
    </VWindowItem>
    <VWindowItem>
      <VContainer>
        <PartsHeaderLv2>職種や資格について調べる</PartsHeaderLv2>
        <templates-list-carrier :items="items3" />
      </VContainer>
    </VWindowItem>
    <VWindowItem>
      <VContainer>
        <PartsHeaderLv2>OPACで関連本を集める</PartsHeaderLv2>
        <p class="mb-2">
          「就職」「キャリア」「職業」「業種」「企業」「仕事」「就活」などのキーワードで検索してみましょう。
        </p>
        <elements-btn-my-library />
        <VTimeline
          density="compact"
          side="end"
        >
          <VTimelineItem size="small">
            <VImg
              :src="imgCarrier01"
              width="65vw"
              aspect-ratio="4/3"
            />
            <p class="text-caption">
              部分一致検索にキーワードを入れて検索
            </p>
          </VTimelineItem>
          <VTimelineItem size="small">
            <VImg
              :src="imgCarrier02"
              width="65vw"
              aspect-ratio="4/3"
            />
            <p class="text-caption">
              情報がヒット
            </p>
          </VTimelineItem>
        </VTimeline>
      </VContainer>
    </VWindowItem>
  </VWindow>
</template>
