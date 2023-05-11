<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12" xl="6">
        <v-card>
          <v-row>
            <v-col cols="12" sm="8">
              <v-card-title>
                <img :src="titleLogo" :alt="title" class="titleLogo" />
              </v-card-title>
              <v-card-text>
                <p v-for="(text, i) in commentary" :key="i">{{ text }}</p>
              </v-card-text>
              <v-card-text>
                <p
                  v-for="(caption, j) in topImageCaptions"
                  :key="j"
                  class="caption"
                >
                  {{ caption }}
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card-text>
                <v-img :src="topImage" contain class="grey lighten-3"></v-img>
              </v-card-text>
            </v-col>
          </v-row>
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
          <v-card-text>{{ image.caption }}</v-card-text>
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
        </v-card>
      </v-col>
    </v-row>
    <VueTinybox v-model="index" :images="images" loop></VueTinybox>
  </v-container>
</template>

<script>
export default {
  name: 'PageDigitalCollection03',
  data: () => ({
    title: '大和物語',
    titleLogo: '/images/digital-collection/collection03/title-logo.gif',
    topImage: '/images/digital-collection/collection03/00.jpg',
    index: null,
    topImageCaptions: [
      '大きさ（表紙）タテ23cm×ヨコ17cm',
      '5帖　秩入り',
      '列帖装',
      '各帖挿絵7枚',
      '製作年代不明',
    ],
    commentary: [
      '当WEBサイト上にある情報や画像などはフェリス女学院大学が所有または管理しています。',
      '無断転載や無断使用を禁じます。',
    ],
    breadcrumbs: [
      {
        text: '電子コレクション',
        disabled: false,
        href: '/digital-collection',
      },
      {
        text: '大和物語',
        disabled: true,
        href: '/digital-collection/collection03',
      },
    ],
    images: [
      {
        src: '/images/digital-collection/collection03/11.jpg',
        caption: '第1帖－1',
      },
      {
        src: '/images/digital-collection/collection03/12.jpg',
        caption: '第1帖－2',
      },
      {
        src: '/images/digital-collection/collection03/13.jpg',
        caption: '第1帖－3',
      },
      {
        src: '/images/digital-collection/collection03/14.jpg',
        caption: '第1帖－4',
      },
      {
        src: '/images/digital-collection/collection03/15.jpg',
        caption: '第1帖－5',
      },
      {
        src: '/images/digital-collection/collection03/16.jpg',
        caption: '第1帖－6',
      },
      {
        src: '/images/digital-collection/collection03/17.jpg',
        caption: '第1帖－7',
      },
      {
        src: '/images/digital-collection/collection03/21.jpg',
        caption: '第2帖－1',
      },
      {
        src: '/images/digital-collection/collection03/22.jpg',
        caption: '第2帖－2',
      },
      {
        src: '/images/digital-collection/collection03/23.jpg',
        caption: '第2帖－3',
      },
      {
        src: '/images/digital-collection/collection03/24.jpg',
        caption: '第2帖－4',
      },
      {
        src: '/images/digital-collection/collection03/25.jpg',
        caption: '第2帖－5',
      },
      {
        src: '/images/digital-collection/collection03/26.jpg',
        caption: '第2帖－6',
      },
      {
        src: '/images/digital-collection/collection03/27.jpg',
        caption: '第2帖－7',
      },
      {
        src: '/images/digital-collection/collection03/31.jpg',
        caption: '第3帖－1',
      },
      {
        src: '/images/digital-collection/collection03/32.jpg',
        caption: '第3帖－2',
      },
      {
        src: '/images/digital-collection/collection03/33.jpg',
        caption: '第3帖－3',
      },
      {
        src: '/images/digital-collection/collection03/34.jpg',
        caption: '第3帖－4',
      },
      {
        src: '/images/digital-collection/collection03/35.jpg',
        caption: '第3帖－5',
      },
      {
        src: '/images/digital-collection/collection03/36.jpg',
        caption: '第3帖－6',
      },
      {
        src: '/images/digital-collection/collection03/37.jpg',
        caption: '第3帖－7',
      },
      {
        src: '/images/digital-collection/collection03/41.jpg',
        caption: '第4帖－1',
      },
      {
        src: '/images/digital-collection/collection03/42.jpg',
        caption: '第4帖－2',
      },
      {
        src: '/images/digital-collection/collection03/43.jpg',
        caption: '第4帖－3',
      },
      {
        src: '/images/digital-collection/collection03/44.jpg',
        caption: '第4帖－4',
      },
      {
        src: '/images/digital-collection/collection03/45.jpg',
        caption: '第4帖－5',
      },
      {
        src: '/images/digital-collection/collection03/46.jpg',
        caption: '第4帖－6',
      },
      {
        src: '/images/digital-collection/collection03/47.jpg',
        caption: '第4帖－7',
      },
      {
        src: '/images/digital-collection/collection03/51.jpg',
        caption: '第5帖－1',
      },
      {
        src: '/images/digital-collection/collection03/52.jpg',
        caption: '第5帖－2',
      },
      {
        src: '/images/digital-collection/collection03/53.jpg',
        caption: '第5帖－3',
      },
      {
        src: '/images/digital-collection/collection03/54.jpg',
        caption: '第5帖－4',
      },
      {
        src: '/images/digital-collection/collection03/55.jpg',
        caption: '第5帖－5',
      },
      {
        src: '/images/digital-collection/collection03/56.jpg',
        caption: '第5帖－6',
      },
      {
        src: '/images/digital-collection/collection03/57.jpg',
        caption: '第5帖－7',
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
