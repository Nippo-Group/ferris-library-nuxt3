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
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" />
          </v-card-title>
          <v-card-text>
            <p v-for="(text, i) in commentary" :key="'text1' + i">{{ text }}</p>
          </v-card-text>
          <v-card-text>
            <p
              v-for="(caption, j) in commentary2"
              :key="'text2' + j"
              class="caption"
            >
              {{ caption }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="(image, idx) in images"
        :key="'image' + idx"
        cols="6"
        sm="4"
        md="3"
      >
        <v-card
          elevation="0"
          color="grey lighten-4"
          height="100%"
          @click="index = idx"
        >
          <v-card-text
            ><v-chip small class="mr-2">{{ image.num }}</v-chip></v-card-text
          >
          <v-img :src="image.src" class="open-tinybox" aspect-ratio="1" contain>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text>
            <p class="mb-0">Japanese Fairy Tale</p>
            <p class="mb-0">{{ image.caption }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <VueTinybox v-model="index" :images="images" loop></VueTinybox>
  </v-container>
</template>

<script>
export default {
  name: 'PageDigitalCollection04',
  data: () => ({
    title: 'Japanese Fairy Tale',
    titleLogo: '/images/digital-collection/collection04/title-logo.gif',
    index: null,
    dialog: false,
    commentary: [
      'はじめに',
      'フェリス女学院大学の図書館にある、この希少本シリーズは小型の和装本で、縮緬本（ちりめんぼん）とよばれるものです。このシリーズは英語で書かれていて、昔話絵本のシリーズになっています。日本の代表的な昔話、「桃太郎」「瘤取り爺」「猿蟹合戦」などが入っています。',
      'このシリーズは、明治十八年（一八八五年）以来、長谷川武次郎が作りました。本大学にあるものは、テクストが英語で書かれていますが、他にもドイツ語で出されたものがあります。これらの本は、箱根のホテル等で売られていたといわれていますので、来日した外国人に向けておみやげとして売られたと考えられます。',
      '再話しているのは、タムスンという宣教師、チェンバレンという学者、作家のラフカディオ・ハーン等です。明治期に、はじめに日本の昔話を外国向けに紹介した人たちが外国人であったということは興味深いことです。',
      'フェリスにあるシリーズは、そのほとんど大半を、小林永濯（えいたく）という画家が描いており、みごとなイラストレーションです。日本の昔話のイメージをよく表現してあり、事物、衣装などの時代考証もきちんとなされています。',
      'これらの本は長谷川弘文社という出版社によって作られ、本の体裁は絵と文章を印刷した後に、その紙を縮めて縮緬としたものです。これがその呼び方である「縮緬本」の由来です。',
      'このシリーズは貴重本ですので、今回、データ・ベース化することになりました。関心のある人は、図書館で電子化されたものを見ることができます。複製本（CD-ROM版）も二部用意されています。実物は図書館貴重資料室に保管されていますが、たいへん貴重なものですから、取り扱いは図書館員の指示のもと、慎重に行って下さい。',
      '藤本朝巳',
    ],
    commentary2: [
      '本の写真の著作権は、それぞれの本の著作権保持者に帰属し、保護されています。',
      'また、当webサイト上にある情報や画像などはフェリス女学院大学が所有または管理しております。無断転載や無断使用を禁じます。',
    ],
    breadcrumbs: [
      {
        text: '電子コレクション',
        disabled: false,
        href: '/digital-collection',
      },
      {
        text: 'Japanese Fairy Tale',
        disabled: true,
        href: '/digital-collection/collection04',
      },
    ],
    images: [
      {
        num: 'E/H51/B',
        src: '/images/digital-collection/collection04/e_h51_b.jpg',
        caption: 'The Boy WHO DREW CATS',
      },
      {
        num: 'E/H51/C',
        src: '/images/digital-collection/collection04/e_h51_c.jpg',
        caption: 'CHIN CHIN KOBAKAMA',
      },
      {
        num: 'E/H51/F',
        src: '/images/digital-collection/collection04/e_h51_f.jpg',
        caption: 'The FOUNTAIN OF YOUTH',
      },
      {
        num: 'E/H51/G',
        src: '/images/digital-collection/collection04/e_h51_g.jpg',
        caption: 'THE GOBLIN SPIDER',
      },
      {
        num: 'E/J24/No1',
        src: '/images/digital-collection/collection04/e_j24_no01.jpg',
        caption: 'MOMOTARO',
      },
      {
        num: 'E/J24/No2',
        src: '/images/digital-collection/collection04/e_j24_no02.jpg',
        caption: 'THE TONGUE-CUT SPARROW',
      },
      {
        num: 'E/J24/No3',
        src: '/images/digital-collection/collection04/e_j24_no03.jpg',
        caption: 'BATTLE OF THE MONKEY AND THE CRAB',
      },
      {
        num: 'E/J24/No4',
        src: '/images/digital-collection/collection04/e_j24_no04.jpg',
        caption: 'The Old Man Who Made The Dead Trees Blossom',
      },
      {
        num: 'E/J24/No5',
        src: '/images/digital-collection/collection04/e_j24_no05.jpg',
        caption: 'KACHI-KACHI MOUNTAIN',
      },
      {
        num: 'E/J24/No6',
        src: '/images/digital-collection/collection04/e_j24_no06.jpg',
        caption: "The MOUSE'S WEDDING",
      },
      {
        num: 'E/J24/No7',
        src: '/images/digital-collection/collection04/e_j24_no07.jpg',
        caption: 'THE OLD MAN & THE DEVILS',
      },
      {
        num: 'E/J24/No8',
        src: '/images/digital-collection/collection04/e_j24_no08.jpg',
        caption: 'THE FISHER BOY URASHIMA',
      },
      {
        num: 'E/J24/No9',
        src: '/images/digital-collection/collection04/e_j24_no09.jpg',
        caption: 'THE SERPENT WITH EIGHT HEADS',
      },
      {
        num: 'E/J24/No10',
        src: '/images/digital-collection/collection04/e_j24_no10.jpg',
        caption: 'THE MATSUYAMA MIRROR',
      },
      {
        num: 'E/J24/No11',
        src: '/images/digital-collection/collection04/e_j24_no11.jpg',
        caption: 'THE HARE OF INABA',
      },
      {
        num: 'E/J24/No12',
        src: '/images/digital-collection/collection04/e_j24_no12.jpg',
        caption: "THE CAB'S TRIUMPH",
      },
      {
        num: 'E/J24/No13',
        src: '/images/digital-collection/collection04/e_j24_no13.jpg',
        caption: 'THE SILLY JELLY-FISH',
      },
      {
        num: 'E/J24/No15',
        src: '/images/digital-collection/collection04/e_j24_no15.jpg',
        caption: "MY LORD BAG-O'RICE",
      },
      {
        num: 'E/J24/No16',
        src: '/images/digital-collection/collection04/e_j24_no16.jpg',
        caption: 'THE WONDERFULL TEA-KETTLE',
      },
      {
        num: 'E/J24/No17',
        src: '/images/digital-collection/collection04/e_j24_no17.jpg',
        caption: 'SCHIPPEITARO',
      },
      {
        num: 'E/J24/No18',
        src: '/images/digital-collection/collection04/e_j24_no18.jpg',
        caption: 'THE OGRES ARM',
      },
      {
        num: 'E/J24/No19',
        src: '/images/digital-collection/collection04/e_j24_no19.jpg',
        caption: 'The OGRES of OYEYAMA',
      },
      {
        num: 'E/J24/No20',
        src: '/images/digital-collection/collection04/e_j24_no20.jpg',
        caption: 'The Enchanted Waterfall',
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
