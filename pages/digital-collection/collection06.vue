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
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" />
          </v-card-title>
          <v-card-text>
            <div v-html="commentary1"></div>
          </v-card-text>
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
          <v-img :src="image.src" class="open-tinybox" contain>
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
  </v-container>
</template>

<script>
export default {
  name: "PageDigitalCollection06",
  data: () => ({
    title: "コルデコットの絵本",
    titleLogo: "/images/digital-collection/collection06/title-logo.jpg",
    index: null,
    commentary1:
      "<h3>コルデコットの木版色刷り絵本シリーズ</h3><p>ランドルフ・コールデコット (Randolph Caldecott 1846-86) は、ウォルター・クレイン、ケイト・グリーナウェーと並ぶ、英国ヴィクトリア朝後期に活躍した挿絵画家、絵本作家。チェスター州に帽子商の子として生れました。20 代後半から本格的に絵の修業を始め、「パンチ」誌などに風刺画やスケッチを次々発表。40 年の短い生涯で、木版工房主のエドモンド・エバンズとの合作によるマザーグース絵本やここに紹介する絵本など、多くの作品を残しました。</p><p>作品内容は当時流行った戯れうたや物語詩など多彩。王侯貴族から庶民までを巧みに描き、また人に擬えた動物は当時の人々の様子を彷彿とさせます。躍動感あふれる軽やかな筆致、ユーモア、庶民的な温かさなど、後のビアトリクス・ポター、エドワード・アーディゾーニ、モーリス・センダックらに大きな影響を与えました。</p>",
    breadcrumbs: [
      {
        text: "電子コレクション",
        disabled: false,
        href: "/digital-collection",
      },
      {
        text: "コルデコットの絵本",
        disabled: true,
        href: "/digital-collection/collection06",
      },
    ],
    images: [
      {
        src: "/images/digital-collection/collection06/01-00.jpg",
        caption: "The Diverting History of John Gilpin.",
      },
      {
        src: "/images/digital-collection/collection06/02-00.jpg",
        caption: "The House that Jack built.",
      },
      {
        src: "/images/digital-collection/collection06/03-00.jpg",
        caption: "The Babes in the Wood.",
      },
      {
        src: "/images/digital-collection/collection06/04-00.jpg",
        caption: "An Elegy on the Death of a Mad Dog.",
      },
      {
        src: "/images/digital-collection/collection06/05-00.jpg",
        caption: "The Three Jovial Huntsmen.",
      },
      {
        src: "/images/digital-collection/collection06/06-00.jpg",
        caption: "Sing a Song for Sixpence.",
      },
      {
        src: "/images/digital-collection/collection06/07-00.jpg",
        caption: "The Queen of Hearts.",
      },
      {
        src: "/images/digital-collection/collection06/08-00.jpg",
        caption: "The Farmer's Boy.",
      },
      {
        src: "/images/digital-collection/collection06/09-00.jpg",
        caption: "The Milkmaid.",
      },
      {
        src: "/images/digital-collection/collection06/10-00.jpg",
        caption: "Hey Diddle Diddle and Baby Bunting.",
      },
      {
        src: "/images/digital-collection/collection06/11-00.jpg",
        caption: "A Frog He Would A-Wooing Go.",
      },
      {
        src: "/images/digital-collection/collection06/12-00.jpg",
        caption: "The Fox Jumps Over the Parson's Gate.",
      },
      {
        src: "/images/digital-collection/collection06/13-00.jpg",
        caption: "Come Lasses and Lads.",
      },
      {
        src: "/images/digital-collection/collection06/14-00.jpg",
        caption:
          "Ride A-Cock Horse to Bunbury Cross & A Farmer Went Trotting Upon His Grey Mare.",
      },
      {
        src: "/images/digital-collection/collection06/15-00.jpg",
        caption: "An Elegy on the Glory of Her Sex, Mrs. Mary Blize.",
      },
      {
        src: "/images/digital-collection/collection06/16-00.jpg",
        caption: "The Great Panjandrum Himself.",
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style scoped>
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
</style>
