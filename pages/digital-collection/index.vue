<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" lg="4" xl="3">
        <v-card height="100%">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ item.kind }}</div>
              <v-list-item-title class="text-h5 mb-1 wrap-text">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle v-if="item.subtitle">
                {{ item.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="120" color="grey lighten-2">
              <img :src="item.image" />
            </v-list-item-avatar>
          </v-list-item>
          <v-card-text>
            <p v-for="(text, j) in item.texts" :key="j">{{ text.p }}</p>
          </v-card-text>
          <v-card-actions>
            <btn-inside
              v-if="item.identification"
              link="資料をみる"
              :to="'/digital-collection/' + item.identification"
            ></btn-inside>
            <btn-open-in-new
              v-if="item.link"
              link="資料をみる"
              :url="item.link"
            ></btn-open-in-new>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageDigitalCollectionIndex',
  data: () => ({
    title: '電子コレクション',
    reveal: false,
    items: [
      {
        kind: '貴重資料',
        title: '新三十六歌仙画帖',
        texts: [
          {
            p: '歌仙とは傑出した歌人を意味しています。最も著名なのは、藤原公任撰『三十六人撰』に基づく三十六歌仙です。柿本人麻呂に始まって、中務に終わる三十六人の歌人を意味しています。また、歌合の流行と、大和絵の肖像画である似絵 ( ﾆｾｴ ) の隆盛とにより、平安時代末期から盛んに制作されるようになったのが、歌仙絵です（歌仙を描いた肖像画）。',
          },
          {
            p: '本学所蔵の画帖は、江戸時代初期の画家、狩野洞雲によって描かれた三十六人の歌仙の画像と和歌を折帖に装丁したものです。本画帖に撰ばれた新三十六歌仙は、三十六歌仙の鎌倉時代版です。後鳥羽院、式子内親王、藤原定家といった、鎌倉時代を代表する歌人たちの肖像画とその和歌が貼り合わされた、豪華で貴重な資料です。',
          },
        ],
        image: '/images/digital-collection/collection01/01.jpg',
        identification: 'collection01',
      },
      {
        kind: '貴重資料',
        title: '竹取物語',
        texts: [
          {
            p: '本学所蔵の「奈良絵本 竹取物語」は、近世宝永年間製作の、上・中・下三冊合わせて２４枚の絵を有するきわめて美麗な本です。',
          },
          {
            p: 'これほど多数の絵を収載する本は類例がなく、精緻な画風で美術的価値も高いが、それだけでなく、従来ほとんど絵に取り上げられることのなかった場面を大量に含んでいます。',
          },
          {
            p: '類型的な竹取物語絵ではなく、この本は男性登場人物を中心にした失敗譚に焦点をあて、一方、かぐや姫を中心とする女性の身上に触れる部分がほとんどないことが特徴として挙げられます。',
          },
          {
            p: '失敗の顛末の忠実な絵画化を始め、竹取物語享受史にとっても興味深い第一級の資料です。',
          },
        ],
        image: '/images/digital-collection/collection02/00.jpg',
        identification: 'collection02',
      },
      {
        kind: '貴重資料',
        title: '大和物語',
        texts: [
          { p: '『大和物語』は平安前期に成立したとされる歌物語です。' },
          {
            p: '本学所蔵の書物は「奈良絵本」といわれる挿絵付きの筆写本で、表紙裏は金泥で塗られ、草花が金で描かれた料紙に、墨の濃淡も鮮やかに、流れるような文字が書き綴られた美麗なものです。',
          },
          {
            p: '各巻に収められた挿絵は、いずれも金砂子の工霞に縁どられ、王朝世界の華やかさが感じられます。',
          },
        ],
        image: '/images/digital-collection/collection03/00.jpg',
        identification: 'collection03',
      },
      {
        kind: '貴重資料',
        title: 'Japanese Fairy Tale',
        texts: [
          {
            p: '明治時代に作られた縮緬本（ちりめんぼん）とよばれるシリーズ『Japanese Fairy Tale』をデジタル化しました。「桃太郎」「瘤取り爺」「猿蟹合戦」など、日本を代表する昔話が英語で収録されています。明治十八年（一八八五年）以来、長谷川武次郎が作り、タムスンという宣教師、チェンバレンという学者、作家のラフカディオ・ハーン等が再話しています。イラストレーションは小林永濯（えいたく）という画家です。',
          },
          {
            p: '実物は貴重資料室で保管しています。図書館内でCD-ROMとあわせて利用することができます。',
          },
        ],
        image: '/images/digital-collection/collection04/e_j24_no02.jpg',
        identification: 'collection04',
      },
      {
        kind: '貴重資料',
        title: 'ビアトリクス・ポターの絵本',
        subtitle: '表紙のみ',
        texts: [
          {
            p: 'このたび出版社のご協力を得て、Beatrix Potterの全作品を電子データ化することができました。当サイト上では、全作品の表紙を見ることができます。最初の作品は、世界中で親しまれているThe Tale of Peter Rabbit (『ピーターラビットのおはなし』)です。',
          },
          {
            p: '図書館で所蔵しているCD-ROMは、研究用としてイラストレーションとテクストを詳しく調査できるようになっています。また、図書館にはシリーズ23冊の英語版、日本語版、また初版本を含む貴重な古書などもそろえてありますので、関心のある方は実際に作品をご覧下さい。',
          },
        ],
        image: '/images/digital-collection/collection05/01-000.jpg',
        identification: 'collection05',
      },
      {
        kind: '貴重資料',
        title: 'コルデコットの絵本',
        subtitle: '表紙のみ',
        texts: [
          {
            p: '英国ヴィクトリア朝後期に活躍した絵本作家、ランドルフ・コールデコットの絵本16点の表紙の画像を掲載しています。',
          },
          {
            p: 'コールデコット以前に、子ども向けに描かれた絵は、言葉によって伝達される物語を、そのまま繰り返し絵で示したものにすぎませんでした。しかし彼は、テキスト（ことば）とイメージ（絵）の働き合う関係を発展させ、さらに、当時の人々の生活の様子を躍動感あふれる筆致で描きました。その手法は後の画家たちに多大な影響を与え、彼は現代絵本の祖と呼ばれています。そして、その名を冠したアメリカのコールデコット賞は、権威ある絵本賞として、毎年優れた絵本画家たちに与えられています。',
          },
        ],
        image: '/images/digital-collection/collection06/13-00.jpg',
        identification: 'collection06',
      },
      {
        kind: '貴重資料',
        title: '横浜絵葉書',
        subtitle: '手彩色',
        texts: [
          {
            p: '本学所蔵の『横浜絵葉書（手彩色）』は、明治から大正時代における、横浜市内の名所の数々を描いたもので、国内外から横浜を訪れた多くの人々が買い求めました。現在は関東大震災や戦災で失われた横浜の景観や市民の暮らしを知る上で、貴重な歴史資料となっています。',
          },
        ],
        image:
          '/images/digital-collection/collection07/group01/group01_023.jpg',
        identification: 'collection07',
      },
      {
        kind: '貴重資料',
        title: 'Henry More, The Apology of Dr. Henry More',
        texts: [
          {
            p: 'ヘンリー・モアは17世紀イギリスの哲学者・神学者です。この著『ヘンリー・モア博士の弁明』は、彼のプラトン派思想――人の誕生以前の魂の存在を信じる、など――や広教派信仰が批判された際の弁明の書であり、1660年代前半のモアの思想をまとめたものです。EEBO（Early English Books Online）未収録のその全文をPDF化して世界初公開。',
          },
        ],
        image: '/images/digital-collection/collection08/eyecatching.png',
        identification: 'collection08',
      },
      {
        kind: '紀要',
        title: 'FAIR',
        subtitle: 'フェリス女学院大学学術機関リポジトリ',
        texts: [
          {
            p: '本学の教育研究活動の成果のアーカイブです。今後も随時更新される予定です。',
          },
        ],
        link: 'https://ferris.repo.nii.ac.jp/',
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
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.overflow {
  max-height: 120px;
}
</style>
