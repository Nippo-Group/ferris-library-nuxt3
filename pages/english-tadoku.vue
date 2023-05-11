<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>
      英語多読（たどく）とは、辞書を使わずに、意味の分からないところは読み飛ばしながら、たくさんの英語の本を読む学習法で、英語の力を身につけるために効果的であると言われています。本学では、電子ブックと書籍の2種類の英語多読用図書を所蔵しています。
    </p>
    <v-row>
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-subtitle class="pb-0">電子ブック</v-card-subtitle>
          <v-card-title class="pt-0">EBSCO eBooks</v-card-title>
          <v-img
            position="top center"
            max-height="164"
            :src="require(`@/assets/images/english-tadoku/tadoku-01.jpg`)"
          ></v-img>
          <v-card-text>
            Macmillan Readers や Magic Tree
            Houseといった、英語多読用の電子ブック398冊が利用できます。
          </v-card-text>
          <v-card-actions>
            <btn-open-in-new
              link="学内からはこちら"
              url="http://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=nlebk"
            ></btn-open-in-new>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-text>
            <v-alert dense text type="success" class="mb-0">
              学部生・大学院生・教職員は学外からも利用が可能です。
              ※大学のアカウントでログインできます。
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <btn-open-in-new
              link="学外からはこちら"
              url="https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top.do&method=open"
            ></btn-open-in-new>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-subtitle class="pb-0">電子ブック</v-card-subtitle>
          <v-card-title class="pt-0"
            >Gale Virtual Reference Library</v-card-title
          >
          <v-img
            position="top center"
            max-height="164"
            :src="require(`@/assets/images/english-tadoku/tadoku-02.jpg`)"
          ></v-img>
          <v-card-text>
            <p>
              俳優、ミュージシャン、アスリート、実業家、政治家などの各界の有名人についての伝記シリーズ「People
              in the News Series」61冊を利用できます。
            </p>
            <p>学内からのみ利用できます。</p>
          </v-card-text>
          <v-card-actions>
            <btn-open-in-new
              link="学内からはこちら"
              url="https://go.galegroup.com/ps/i.do?p=GVRL&sw=w&u=ferris&v=2.1&subject=%E5%A4%9A%E8%AA%AD%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%EF%BC%9A%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%92%E3%81%AB%E3%81%8E%E3%82%8F%E3%81%99%E6%9C%89%E5%90%8D%E4%BA%BA%E4%BC%9D%E8%A8%98&pg=BooksForSubject&it=static"
            ></btn-open-in-new>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-subtitle class="pb-0">書籍</v-card-subtitle>
          <v-card-title class="pt-0">英語多読図書コーナー</v-card-title>
          <v-card-text>
            緑園本館4階に、英語多読図書を集めたコーナーがあります。貸出条件は一般図書と同じです。
          </v-card-text>
          <v-img
            :src="require(`@/assets/images/english-tadoku/tadoku-03.jpg`)"
            width="90%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishTadoku',
  data: () => ({
    title: '英語多読図書',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
