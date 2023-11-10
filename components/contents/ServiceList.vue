<script setup lang="ts">
const panel = ref([0, 1]);
const items = [
  {
    title: "貸出",
    content:
      "カウンターに借りたい資料と学生証・ライブラリーカードをお持ちください。緑園本館の2階には、自動貸出機が設置されていて、自分で貸出手続きをすることができます。",
  },
  {
    title: "返却",
    content:
      "開館中はカウンターに、閉館中はブックポストに返却してください。返却期限日を過ぎると、経過した日数分(最大2週間)貸出が停止されますのでご注意ください。緑園本館・山手分室どちらでも返却できます。",
  },
  {
    title: "延長",
    content:
      "次の予約が入っていない場合は貸出期間を延長できます。資料をカウンターまでお持ちください。学部生・大学院生・教職員はMyLibraryでも延長できます。",
  },
  {
    title: "予約",
    content:
      "資料が貸出中の場合は、予約をすることができます。カウンターで予約申し込みしてください。資料が返却されたらフェリスメールでお知らせします。取り置き期間は1週間（教員は3週間）です。",
  },
  {
    title: "取り寄せ",
    content:
      "緑園本館と山手分室の資料を相互に取り寄せることができます。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。資料が到着したらフェリスメールでお知らせします。取り置き期間は1週間です。",
  },
  {
    title: "リクエスト",
    content:
      "ご希望の資料を当図書館で購入します(学部生・大学院生・教職員対象)。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。購入希望の資料は優先的に処理しますが、通常2週間から資料によっては2ヶ月程度かかります。お急ぎの場合は、レファレンス・サービスで学外の資料をご利用ください。図書によっては購入できない場合がありますので、ご了承ください。",
  },
];
</script>

<template>
  <elements-header-lv2>サービス一覧</elements-header-lv2>
  <v-expansion-panels v-model="panel" variant="accordion" multiple>
    <v-expansion-panel v-for="(item, i) in items" :key="i">
      <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
      <v-expansion-panel-text>{{ item.content }}</v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  <v-alert type="warning" class="mt-4">
    教育実習・海外研修等で返却日までに図書館に来館できない場合は、<strong>必ず事前に延長（更新）手続きをしてください</strong>。学部生・大学院生はMyLibraryでも延長できます。更新してもなお期限内に返却できない場合は申し出て下さい（事後は認めません）。なお、返却は郵送や宅配便でも受け付けます。（着払い不可）
  </v-alert>
</template>
