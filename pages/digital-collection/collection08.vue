<script setup lang="ts">
const { show } = useConfirmDL()

const title = ref('Henry More, The Apology of Dr. Henry More')
useSeoMeta({
  title: title.value,
  description:
    'ヘンリー・モアは17世紀イギリスの哲学者・神学者です。この著『ヘンリー・モア博士の弁明』は、彼のプラトン派思想――人の誕生以前の魂の存在を信じる、など――や広教派信仰が批判された際の弁明の書であり、1660年代前半のモアの思想をまとめたものです。EEBO（Early English Books Online）未収録のその全文をPDF化して世界初公開。',
})

const titleLogo = '/images/digital-collection/collection08/title-logo.png'
const topImage = '/images/digital-collection/collection08/eyecatching.png'
const commentary1
  = '<p>Henry More, The Apology of Dr. Henry More, Fellow of Christ\'s College in Cambridge: Wherein Is Contained as Well a More General Account of the Manner and Scope of His Writings, as a Particular Explication of Several Passages in His Grand Mystery of Godliness （London, 1664）</p>'
const commentary2
  = '<p>ヘンリー・モア（1614-1687）はイギリスの哲学者・神学者・詩人。イートン校からケンブリッジ大学のクライスト・カレッジに進学し、学士号・修士号を取得、そのまま研究員として大学に残り、一生を過ごしました。ケンブリッジ・プラトニストと呼ばれる哲学者・神学者集団のひとりであり、著書も多く、当時の思想界で主導的な役割を果たしました。1664年からは王立協会の会員となっており、そこでニュートンら次世代の科学者と交流し、彼らに影響を与えます。メソディズム派教会の創始者ジョン・ウェスレーもモアの著作の読者でした。</p><p>ガリレオやコペルニクスの地動説を受け入れる、錬金術師トマス・ヴォーン（詩人ヘンリー・ヴォーンの双子の弟）の著作を神秘主義的・非理性的として批判するなど、モアは先進的な思考をもっており、デカルトの機械論的な自然哲学・物理学を評価して実際に彼と書簡により交流したりもしました。が、同時に彼は神や霊の世界を重視しており、それゆえデカルトとは後に決別します。同じく神学的な理由から、モアはホッブズの唯物論もスピノザの汎神論も受け入れませんでした。</p><p>宗教的にモアは英国国教会の支持者であり、そのなかでも理性的思考や良心的・常識的判断に基づく緩やかな信仰を説く広教派の立場をとっていました。が、同時に悪霊・魔術・魔女の存在も信じていました。曰く、「悪霊がいなかったら神もいない」。悪霊の存在を疑うことは無神論への第一歩なのでした。さらに彼はカバラ（ユダヤの神秘思想）に対しても強い関心をもっていました。</p><pここに全文を画像データであげる著作The Apology of Dr. Henry More（『ヘンリー・モア博士の弁明』）は、自身のプラトン派思想――人の誕生以前の魂の存在を信じる、など――や広教派信仰が批判された際にモアが書いた弁明の書であり、1660年代前半の段階におけるモアの思想をわかりやすくまとめたものである。地動説など「理性的に考えて明らかに正しいことであれば、キリスト教信仰に反することであっても否定してはならない」、「良心が確信していることが神の掟、神の意思=意志、そして神の命令である」など、16世紀後半から17世紀半ばまで有力であった聖書原理主義――聖書に書かれていることは文字どおりすべて正しいとする考えかた――とは異なる信仰・思想が知的主流となりはじめていたことがよくわかる。同時に、「よい天使たちの体は透明で輝いている、復活したイエスの体もそうである」など、現代の科学では認められない考えも散見され、知的発展途上・途中の渾沌（こんとん）も伝わるであろう。</p><p>この著作は同じくモアの手によるA Modest Enquiry into the Mystery of Iniquity（『悪の秘密に静かに迫る』1664, Wing 2666）と合本で出版されたものですが、1473年から1700年までのあいだにイギリスで出版された印刷物のほとんどすべてを収めるデータベースEarly English Books Online（EEBO）に収められておらず、また再版もされていないため、重要でありつつ見ることができない幻の書となっていました。それを今回本学図書館が購入し、データ化してウェブ上に広く公開する次第です*。16世紀の宗教改革から18世紀の啓蒙の時代まで、政治的・社会的・宗教的に大きく動いたイギリスですが、その一大転換点に位置する時期の著作として、諸研究者に活用していただければ幸いです。<br><span style="font-size: 80%;">* このデータ化作業は、JSPS科研費JP15K02323の助成を受けて本学文学部の冨樫剛教授が遂行しました。</span></p><p>なお人としてのモアは、自己に厳しく、他には思いやり深く、まるで天使のような人だったとのことです。趣味はリュートの演奏でした。</p>'
const breadcrumbs = [
  {
    title: '電子コレクション',
    disabled: false,
    href: '/digital-collection',
  },
  {
    title: 'Henry More, The Apology of Dr. Henry More',
    disabled: true,
    href: '/digital-collection/collection08',
  },
]

const zipFile = {
  name: '一括ダウンロード',
  url: '/documents/digital-collection/collection08/henry_more.zip',
  type: 'ZIP',
}
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <elements-nav-breadcrumbs
          :items="breadcrumbs"
        />
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="8"
              >
                <v-card-title>
                  <img
                    :src="titleLogo"
                    :alt="title"
                    class="titleLogo"
                  >
                </v-card-title>
                <v-card-text>
                  <elements-html-text-area :data="commentary1" />
                </v-card-text>
                <v-card-actions>
                  <elements-btn-dialog-default title="解説">
                    <template #contents>
                      <elements-html-text-area :data="commentary2" />
                    </template>
                  </elements-btn-dialog-default>
                  <v-btn
                    variant="elevated"
                    @click="show(zipFile.name, zipFile.url, zipFile.type)"
                  >
                    一括ダウンロード
                    <icons-download-defult />
                  </v-btn>
                </v-card-actions>
              </v-col>
              <v-col
                cols="12"
                sm="4"
              >
                <v-card-text>
                  <v-img
                    :src="topImage"
                    cover
                    class="bg-grey-lighten-3"
                  />
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <contents-collection-henry-more />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.titleLogo {
  max-width: 100%;
}
</style>
