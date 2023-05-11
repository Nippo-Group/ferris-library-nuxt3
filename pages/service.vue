<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <text-sub-title>サービス一覧</text-sub-title>
        <v-expansion-panels v-model="panel" accordion multiple>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header>{{
              item.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>{{
              item.content
            }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-alert dense border="left" type="warning" class="mt-4">
          教育実習・海外研修等で返却日までに図書館に来館できない場合は、<strong>必ず事前に延長（更新）手続きをしてください</strong>。学部生・大学院生はMyLibraryでも延長できます。更新してもなお期限内に返却できない場合は申し出て下さい（事後は認めません）。なお、返却は郵送や宅配便でも受け付けます。（着払い不可）
        </v-alert>
      </v-col>
      <v-col cols="12" md="10" lg="8" class="text-center">
        <btn-my-library></btn-my-library>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <text-sub-title>貸出冊数</text-sub-title>
        <v-data-table
          :headers="headersQuantity"
          :items="quantity"
          :items-per-page="4"
          hide-default-footer
          class="elevation-1"
        ></v-data-table>
        <v-alert dense text type="success" class="mt-4">
          参考図書、雑誌の最新号、貴重書、マイクロ資料、ビデオ、LD、DVD、CD-ROMは館内でご利用ください。
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <text-sub-title>貸出期間</text-sub-title>
        <v-data-table
          :headers="headersPeriod"
          :items="period"
          :items-per-page="7"
          hide-default-footer
          class="elevation-1"
        ></v-data-table>
        <v-alert dense type="info" class="mt-4">
          春・夏・冬季休暇中には学部生・大学院生を対象に長期貸出を行います。詳細はこのHPや掲示などでお知らせします。
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <text-sub-title>注意事項</text-sub-title>
        <v-alert dense outlined type="error">
          貸出手続きを忘れると出口のアラームが鳴ります。
        </v-alert>
        <v-alert dense outlined type="error">
          資料を<strong>破損・紛失</strong>したときは速やかにお知らせください。
        </v-alert>
        <v-alert dense border="left" type="warning">
          借りたい資料が図書館にない場合や探せない場合はカウンターにご相談ください。他の図書館の蔵書検索や、探し方のコツなどを案内します。
        </v-alert>
        <v-alert dense border="left" type="warning">
          資料の又貸しや学生証・ライブラリーカードの貸借は、資料の紛失・返却の遅延等の原因になるため一切禁止です。
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageService',
  data: () => ({
    title: '貸出サービス',
    panel: [0, 1],
    items: [
      {
        title: '貸出',
        content:
          'カウンターに借りたい資料と学生証・ライブラリーカードをお持ちください。緑園本館の2階には、自動貸出機が設置されていて、自分で貸出手続きをすることができます。',
      },
      {
        title: '返却',
        content:
          '開館中はカウンターに、閉館中はブックポストに返却してください。返却期限日を過ぎると、経過した日数分(最大2週間)貸出が停止されますのでご注意ください。緑園本館・山手分室どちらでも返却できます。',
      },
      {
        title: '延長',
        content:
          '次の予約が入っていない場合は貸出期間を延長できます。資料をカウンターまでお持ちください。学部生・大学院生・教職員はMyLibraryでも延長できます。',
      },
      {
        title: '予約',
        content:
          '資料が貸出中の場合は、予約をすることができます。カウンターで予約申し込みしてください。資料が返却されたらフェリスメールでお知らせします。取り置き期間は1週間（教員は3週間）です。',
      },
      {
        title: '取り寄せ',
        content:
          '緑園本館と山手分室の資料を相互に取り寄せることができます。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。資料が到着したらフェリスメールでお知らせします。取り置き期間は1週間です。',
      },
      {
        title: 'リクエスト',
        content:
          'ご希望の資料を当図書館で購入します(学部生・大学院生・教職員対象)。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。購入希望の資料は優先的に処理しますが、通常2週間から資料によっては2ヶ月程度かかります。お急ぎの場合は、レファレンス・サービスで学外の資料をご利用ください。図書によっては購入できない場合がありますので、ご了承ください。',
      },
    ],
    headersQuantity: [
      {
        text: '対象',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '図書／雑誌', value: 'books' },
      { text: '学科推奨図書', value: 'recommendeds' },
      { text: '楽譜', value: 'scores' },
      { text: 'CD/レコード', value: 'cds' },
    ],
    quantity: [
      {
        name: '学部生／大学院生／科目等履修生／ディプロマ生',
        books: '各30冊',
        recommendeds: '30冊',
        scores: '8冊',
        cds: '各8点',
      },
      {
        name: '卒業生／中高生',
        books: '各30冊',
        recommendeds: '不可',
        scores: '8冊',
        cds: '各8点',
      },
      {
        name: '職員／定年退職教職員',
        books: '各30冊',
        recommendeds: '不可',
        scores: '8冊',
        cds: '各8点',
      },
      {
        name: '教員／名誉教授',
        books: '各60冊',
        recommendeds: '不可',
        scores: '30冊',
        cds: '各30点',
      },
    ],
    headersPeriod: [
      {
        text: '対象',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '図書', value: 'books' },
      { text: '学科推奨図書', value: 'recommendeds' },
      { text: '雑誌／楽譜', value: 'scores' },
      { text: 'CD/レコード', value: 'cds' },
    ],
    period: [
      {
        name: '1～3年生／科目等履修生／ディプロマ生',
        books: '2週間',
        recommendeds: '2週間',
        scores: '1週間',
        cds: '翌々日',
      },
      {
        name: '4年生',
        books: '30日',
        recommendeds: '2週間',
        scores: '1週間',
        cds: '翌々日',
      },
      {
        name: '大学院生',
        books: '30日',
        recommendeds: '2週間',
        scores: '1週間',
        cds: '1週間',
      },
      {
        name: '職員／定年退職教職員',
        books: '30日',
        recommendeds: '不可',
        scores: '1週間',
        cds: '1週間',
      },
      {
        name: '卒業生／中高生',
        books: '2週間',
        recommendeds: '不可',
        scores: '1週間',
        cds: '翌々日',
      },
      {
        name: '専任教員／名誉教授',
        books: '当年度2月末まで',
        recommendeds: '不可',
        scores: '当年度2月末まで',
        cds: '当年度2月末まで',
      },
      {
        name: '非常勤教員',
        books: '当年度1月末まで',
        recommendeds: '不可',
        scores: '当年度1月末まで',
        cds: '当年度1月末まで',
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
