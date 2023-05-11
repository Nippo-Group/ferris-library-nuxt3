<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12" xl="6">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8">
                <v-card-title>
                  <img :src="titleLogo" :alt="title" class="titleLogo" />
                </v-card-title>
                <v-card-text v-html="commentary1"> </v-card-text>
                <v-card-actions>
                  <btn-dialog-default>
                    <template #name>解説</template>
                    <template #contents>
                      <div v-html="commentary2"></div>
                    </template>
                  </btn-dialog-default>
                  <v-btn
                    @click.native="
                      ;(snackbar = true),
                        (university = 'ZIP'),
                        (fileUrl =
                          '/documents/digital-collection/collection08/henry_more.zip')
                    "
                  >
                    一括ダウンロード
                    <v-icon right>mdi-tray-arrow-down</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card-text>
                  <v-img :src="topImage" contain class="grey lighten-3"></v-img>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col
        v-for="(image, idx) in images"
        :key="idx"
        cols="6"
        sm="4"
        md="3"
        xl="2"
      >
        <v-card
          elevation="0"
          color="grey lighten-4"
          height="100%"
          @click="index = idx"
        >
          <v-img
            :src="image.src"
            class="open-tinybox"
            aspect-ratio="1.5"
            contain
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text>{{ image.caption }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <VueTinybox v-model="index" :images="images" loop></VueTinybox>
    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="timeout">
      {{ university }}ファイルを開きますか？
      <template #action="{ attrs }">
        <v-btn class="mx-3" :href="fileUrl" target="_blank"
          >はい<v-icon right>mdi-download</v-icon></v-btn
        >
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'PageDigitalCollection08',
  data: () => ({
    title: 'Henry More, The Apology of Dr. Henry More',
    titleLogo: '/images/digital-collection/collection08/title-logo.png',
    index: null,
    dialog: false,
    multiLine: true,
    snackbar: false,
    university: '',
    fileUrl: null,
    timeout: 6000,
    topImage: '/images/digital-collection/collection08/eyecatching.png',
    commentary1:
      "<p>Henry More, The Apology of Dr. Henry More, Fellow of Christ's College in Cambridge: Wherein Is Contained as Well a More General Account of the Manner and Scope of His Writings, as a Particular Explication of Several Passages in His Grand Mystery of Godliness （London, 1664）</p>",
    commentary2:
      '<p>ヘンリー・モア（1614-1687）はイギリスの哲学者・神学者・詩人。イートン校からケンブリッジ大学のクライスト・カレッジに進学し、学士号・修士号を取得、そのまま研究員として大学に残り、一生を過ごしました。ケンブリッジ・プラトニストと呼ばれる哲学者・神学者集団のひとりであり、著書も多く、当時の思想界で主導的な役割を果たしました。1664年からは王立協会の会員となっており、そこでニュートンら次世代の科学者と交流し、彼らに影響を与えます。メソディズム派教会の創始者ジョン・ウェスレーもモアの著作の読者でした。</p><p>ガリレオやコペルニクスの地動説を受け入れる、錬金術師トマス・ヴォーン（詩人ヘンリー・ヴォーンの双子の弟）の著作を神秘主義的・非理性的として批判するなど、モアは先進的な思考をもっており、デカルトの機械論的な自然哲学・物理学を評価して実際に彼と書簡により交流したりもしました。が、同時に彼は神や霊の世界を重視しており、それゆえデカルトとは後に決別します。同じく神学的な理由から、モアはホッブズの唯物論もスピノザの汎神論も受け入れませんでした。</p><p>宗教的にモアは英国国教会の支持者であり、そのなかでも理性的思考や良心的・常識的判断に基づく緩やかな信仰を説く広教派の立場をとっていました。が、同時に悪霊・魔術・魔女の存在も信じていました。曰く、「悪霊がいなかったら神もいない」。悪霊の存在を疑うことは無神論への第一歩なのでした。さらに彼はカバラ（ユダヤの神秘思想）に対しても強い関心をもっていました。</p><pここに全文を画像データであげる著作The Apology of Dr. Henry More（『ヘンリー・モア博士の弁明』）は、自身のプラトン派思想――人の誕生以前の魂の存在を信じる、など――や広教派信仰が批判された際にモアが書いた弁明の書であり、1660年代前半の段階におけるモアの思想をわかりやすくまとめたものである。地動説など「理性的に考えて明らかに正しいことであれば、キリスト教信仰に反することであっても否定してはならない」、「良心が確信していることが神の掟、神の意思=意志、そして神の命令である」など、16世紀後半から17世紀半ばまで有力であった聖書原理主義――聖書に書かれていることは文字どおりすべて正しいとする考えかた――とは異なる信仰・思想が知的主流となりはじめていたことがよくわかる。同時に、「よい天使たちの体は透明で輝いている、復活したイエスの体もそうである」など、現代の科学では認められない考えも散見され、知的発展途上・途中の渾沌（こんとん）も伝わるであろう。</p><p>この著作は同じくモアの手によるA Modest Enquiry into the Mystery of Iniquity（『悪の秘密に静かに迫る』1664, Wing 2666）と合本で出版されたものですが、1473年から1700年までのあいだにイギリスで出版された印刷物のほとんどすべてを収めるデータベースEarly English Books Online（EEBO）に収められておらず、また再版もされていないため、重要でありつつ見ることができない幻の書となっていました。それを今回本学図書館が購入し、データ化してウェブ上に広く公開する次第です*。16世紀の宗教改革から18世紀の啓蒙の時代まで、政治的・社会的・宗教的に大きく動いたイギリスですが、その一大転換点に位置する時期の著作として、諸研究者に活用していただければ幸いです。<br><span style="font-size: 80%;">* このデータ化作業は、JSPS科研費JP15K02323の助成を受けて本学文学部の冨樫剛教授が遂行しました。</span></p><p>なお人としてのモアは、自己に厳しく、他には思いやり深く、まるで天使のような人だったとのことです。趣味はリュートの演奏でした。</p>',
    breadcrumbs: [
      {
        text: '電子コレクション',
        disabled: false,
        href: '/digital-collection',
      },
      {
        text: 'Henry More, The Apology of Dr. Henry More',
        disabled: true,
        href: '/digital-collection/collection08',
      },
    ],
    images: [
      {
        src: '/images/digital-collection/collection08/henrymore002.jpg',
        caption: 'The Apology of Dr. Henry More',
      },
      {
        src: '/images/digital-collection/collection08/henrymore003.jpg',
        caption: '(pp.478-479)',
      },
      {
        src: '/images/digital-collection/collection08/henrymore004.jpg',
        caption: '(pp.480)-481',
      },
      {
        src: '/images/digital-collection/collection08/henrymore005.jpg',
        caption: 'pp.482-483',
      },
      {
        src: '/images/digital-collection/collection08/henrymore006.jpg',
        caption: 'pp.484-485',
      },
      {
        src: '/images/digital-collection/collection08/henrymore007.jpg',
        caption: 'pp.486-487',
      },
      {
        src: '/images/digital-collection/collection08/henrymore008.jpg',
        caption: 'pp.488-489',
      },
      {
        src: '/images/digital-collection/collection08/henrymore009.jpg',
        caption: 'pp.490-491',
      },
      {
        src: '/images/digital-collection/collection08/henrymore010.jpg',
        caption: 'pp.492-493',
      },
      {
        src: '/images/digital-collection/collection08/henrymore011.jpg',
        caption: 'pp.494-495',
      },
      {
        src: '/images/digital-collection/collection08/henrymore012.jpg',
        caption: 'pp.496-497',
      },
      {
        src: '/images/digital-collection/collection08/henrymore013.jpg',
        caption: 'pp.498-499',
      },
      {
        src: '/images/digital-collection/collection08/henrymore014.jpg',
        caption: 'pp.500-501',
      },
      {
        src: '/images/digital-collection/collection08/henrymore015.jpg',
        caption: 'pp.502-503',
      },
      {
        src: '/images/digital-collection/collection08/henrymore016.jpg',
        caption: 'pp.504-505',
      },
      {
        src: '/images/digital-collection/collection08/henrymore017.jpg',
        caption: 'pp.506-507',
      },
      {
        src: '/images/digital-collection/collection08/henrymore018.jpg',
        caption: 'pp.508-509',
      },
      {
        src: '/images/digital-collection/collection08/henrymore019.jpg',
        caption: 'pp.510-511',
      },
      {
        src: '/images/digital-collection/collection08/henrymore020.jpg',
        caption: 'pp.512-513',
      },
      {
        src: '/images/digital-collection/collection08/henrymore021.jpg',
        caption: 'pp.514-515',
      },
      {
        src: '/images/digital-collection/collection08/henrymore022.jpg',
        caption: 'pp.516-517',
      },
      {
        src: '/images/digital-collection/collection08/henrymore023.jpg',
        caption: 'pp.518-519',
      },
      {
        src: '/images/digital-collection/collection08/henrymore024.jpg',
        caption: 'pp.520-521',
      },
      {
        src: '/images/digital-collection/collection08/henrymore025.jpg',
        caption: 'pp.522-523',
      },
      {
        src: '/images/digital-collection/collection08/henrymore026.jpg',
        caption: 'pp.524-525',
      },
      {
        src: '/images/digital-collection/collection08/henrymore027.jpg',
        caption: 'pp.526-527',
      },
      {
        src: '/images/digital-collection/collection08/henrymore028.jpg',
        caption: 'pp.528-529',
      },
      {
        src: '/images/digital-collection/collection08/henrymore029.jpg',
        caption: 'pp.530-531',
      },
      {
        src: '/images/digital-collection/collection08/henrymore030.jpg',
        caption: 'pp.532-533',
      },
      {
        src: '/images/digital-collection/collection08/henrymore031.jpg',
        caption: 'pp.534-535',
      },
      {
        src: '/images/digital-collection/collection08/henrymore032.jpg',
        caption: 'pp.536-537',
      },
      {
        src: '/images/digital-collection/collection08/henrymore033.jpg',
        caption: 'pp.538-539',
      },
      {
        src: '/images/digital-collection/collection08/henrymore034.jpg',
        caption: 'pp.540-541',
      },
      {
        src: '/images/digital-collection/collection08/henrymore035.jpg',
        caption: 'pp.542-543',
      },
      {
        src: '/images/digital-collection/collection08/henrymore036.jpg',
        caption: 'pp.544-545',
      },
      {
        src: '/images/digital-collection/collection08/henrymore037.jpg',
        caption: 'pp.546-547',
      },
      {
        src: '/images/digital-collection/collection08/henrymore038.jpg',
        caption: 'pp.548-549',
      },
      {
        src: '/images/digital-collection/collection08/henrymore039.jpg',
        caption: 'pp.550-551',
      },
      {
        src: '/images/digital-collection/collection08/henrymore040.jpg',
        caption: 'pp.552-553',
      },
      {
        src: '/images/digital-collection/collection08/henrymore041.jpg',
        caption: 'pp.554-555',
      },
      {
        src: '/images/digital-collection/collection08/henrymore042.jpg',
        caption: 'pp.556-557',
      },
      {
        src: '/images/digital-collection/collection08/henrymore043.jpg',
        caption: 'pp.558-559',
      },
      {
        src: '/images/digital-collection/collection08/henrymore044.jpg',
        caption: 'pp.560-561',
      },
      {
        src: '/images/digital-collection/collection08/henrymore045.jpg',
        caption: 'pp.562-563',
      },
      {
        src: '/images/digital-collection/collection08/henrymore046.jpg',
        caption: 'pp.564-565',
      },
      {
        src: '/images/digital-collection/collection08/henrymore047.jpg',
        caption: 'pp.566-567',
      },
      {
        src: '/images/digital-collection/collection08/henrymore048.jpg',
        caption: 'The Cotents of the Apology',
      },
      {
        src: '/images/digital-collection/collection08/henrymore049.jpg',
        caption: 'The Cotents of the Apology (next page)',
      },
      {
        src: '/images/digital-collection/collection08/henrymore001.jpg',
        caption: 'A Modest Enquiry into the Mystery of Iniquity',
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
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
</style>
