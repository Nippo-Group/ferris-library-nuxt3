<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="10" xl="8">
        <text-page-title>{{ title }}</text-page-title>
        <p class="update-date">{{ updateDate }}</p>
      </v-col>
      <v-col cols="12" lg="10" xl="8">
        <v-tabs v-model="tab" fixed-tabs show-arrows>
          <v-tab v-for="(item, index) in items" :key="'tab' + index">
            {{ item.category }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, index2) in items" :key="'item' + index2">
            <v-card>
              <v-card-title>
                {{ item.category }}
              </v-card-title>
              <v-card-text>
                <list-newspaper :items="item.newspapers"></list-newspaper>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageNewspaper',
  data: () => ({
    title: '緑園本館所蔵新聞リスト',
    updateDate: '2022年4月現在',
    tab: null,
    items: [
      {
        category: '日本語（全国紙・地方紙）',
        newspapers: [
          {
            title: '朝日新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '<ul><li>朝日クロスサーチ（オンライン）<br />1879（明12）～継続中</li></ul>',
          },
          {
            title: '朝日新聞',
            subTitle: '朝日新聞：復刻版（明治・大正編）',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod: '1888（明21）7月～1926（大15 *昭和元年)',
            location: '5F書庫',
            note: '',
          },
          {
            title: '朝日新聞',
            subTitle: '朝日新聞：復刻版（昭和編）',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod: '1927（昭和2）～1955（昭和30）',
            location: '5F書庫',
            note: '',
          },
          {
            title: '朝日新聞',
            subTitle: '朝日新聞 縮刷版',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod: '1966（昭和41）<br />1988（昭63）～継続中',
            location: '1F雑誌・5F書庫',
            note: '当年度以前は5階書庫。 利用の際は2階カウンターに申し込み。',
          },
          {
            title: '朝日新聞',
            subTitle: '朝日新聞 マイクロフィルム',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod:
              '1935（昭和10）～1942（昭和17）<br />1944（昭19）～1945（昭20）<br />1947（昭22）～1954（昭29）（欠号あり）',
            location: '1F貴重書庫',
            note: '利用の際は2階カウンターに申し込み。',
          },
          {
            title: '神奈川新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '産経新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '東京新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '東京新聞',
            subTitle: 'みやこ新聞・都新聞（東京新聞の前身）：復刻版',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod:
              '1888（明21）11月～1937（昭12年）6月　（欠号あり）',
            location: '1F雑誌',
            note: '',
          },
          {
            title: '日本経済新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '<ul><li>日経テレコン21（オンライン）<br />1981(昭56）～継続中</li><li>日経全文記事データベース（CD-ROM)<br />1995（平7）～2010(平22) 《2FCD-ROM端末》</li></ul>',
          },
          {
            title: '毎日新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '<ul><li>毎索（オンライン）<br />1872（明5）～継続中</li></ul>',
          },
          {
            title: '毎日新聞',
            subTitle: '毎日新聞 縮刷版',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod: '1967（昭和42)2月～1988(昭和63）1月',
            location: '5F書庫',
            note: '',
          },
          {
            title: '毎日新聞',
            subTitle: '毎日新聞（横濱毎日新聞）：復刻版',
            country: '',
            publisher: '',
            cycle: '',
            retentionPeriod: '1870（明3）～1906（昭和63）6月',
            location: '5F書庫',
            note: '',
          },
          {
            title: '読売新聞',
            subTitle: '',
            country: '',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '<ul><li>ヨミダス歴史館（オンライン）<br />1874（明7）～継続中</li><li>明治／大正／昭和の讀賣新聞（CD-ROM）<br />1874（明7）-1960（昭35） 《2FCD-ROM端末》</li></ul>',
          },
        ],
      },
      {
        category: '外国語',
        newspapers: [
          {
            title:
              'Die Zeit : Wochenzeitung für Politik, Wirtschaft, Handel und Kultur',
            subTitle: '',
            country: 'ドイツ',
            publisher: '',
            cycle: '週刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
          {
            title:
              'International New York Times : DISTRIBUTED WITH The Japan Times',
            subTitle: '',
            country: '日本',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
          {
            title: 'The Japan Times',
            subTitle: '',
            country: '日本',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '중앙 일보. （中央日報）',
            subTitle: '',
            country: '韓国',
            publisher: '',
            cycle: '日刊',
            retentionPeriod: '最新3か月分',
            location: '2F新聞',
            note: '',
          },
        ],
      },
      {
        category: '専門紙・その他',
        newspapers: [
          {
            title: '環境新聞',
            subTitle: '',
            country: '',
            publisher: '環境新聞社',
            cycle: '週刊',
            retentionPeriod: '最新1年分',
            location: '2F雑誌',
            note: '',
          },
          {
            title: '教育学術新聞',
            subTitle: '',
            country: '',
            publisher: '教育学術新聞',
            cycle: '週刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
          {
            title: 'キリスト教学校教育',
            subTitle: '',
            country: '',
            publisher: 'キリスト教学校教育同盟',
            cycle: '月刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '新聞協会報',
            subTitle: '',
            country: '',
            publisher: '日本新聞協会',
            cycle: '週刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '週刊読書人',
            subTitle: '',
            country: '',
            publisher: '読書人',
            cycle: '週刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '図書新聞',
            subTitle: '',
            country: '',
            publisher: '図書新聞',
            cycle: '週刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '日本教育新聞',
            subTitle: '',
            country: '',
            publisher: '日本教育新聞社',
            cycle: '週刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
          {
            title: '民間放送',
            subTitle: '',
            country: '',
            publisher: '日本民間放送連盟',
            cycle: '旬刊',
            retentionPeriod: '最新1年分',
            location: '2F新聞',
            note: '',
          },
        ],
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

<style scoped>
.update-date {
  text-align: right;
  color: grey;
}
</style>
