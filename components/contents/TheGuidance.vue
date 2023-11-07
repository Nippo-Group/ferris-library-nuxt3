<script setup lang="ts">
const items = {
  title: "ガイダンス",
  text: "卒業論文やレポートを執筆する際に必要となる、文献の探し方の習得を目的としています。<br />基礎的な文献検索の実習などをパッケージ化して、ゼミ単位・授業単位で実施します。専任教員・非常勤教員の方々からのお申し込みを受け付けます。<br />このほか学生の希望により個別のガイダンスも受け付けています。",
  contents: [
    {
      subtitle: "実施期間",
      text: "学期期間中の平日※図書館ツアーが集中する4月から5月はツアーを優先させていただきます。",
    },
    {
      subtitle: "内容",
      list: [
        "DVD視聴…レポート・論文を書くためのステップを解説します。上映時間は約10分です。",
        "各種データベースの検索方法の説明と実習を実施します。",
        "その他、ゼミの内容に応じた文献の紹介などを行います。",
      ],
    },
    {
      subtitle: "申込方法",
      text: "「ゼミ対象図書館ガイダンス申込書」（MyLibraryにログインして取得できます）にご記入の上お申し込みください。",
    },
  ],
};
</script>

<template>
  <templates-card-tour
    :title="items.title"
    :text="items.text"
    :contents="items.contents"
  ></templates-card-tour>
</template>
