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
          <v-container>
            <v-row>
              <v-col cols="12" sm="8">
                <v-card-text>
                  <div v-html="commentary1"></div>
                </v-card-text>
                <v-card-text>
                  <v-subheader>参考文献</v-subheader>
                  <div v-html="commentary2"></div>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card-text>
                  <v-img :src="topImage" contain class="grey lighten-3"></v-img>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
          <v-list two-line>
            <v-subheader>横浜絵葉書（手彩色）: 明治～大正</v-subheader>
            <v-list-item-group>
              <template v-for="(item, i) in list" :key="'group-' + i">
                <v-divider v-if="item.divider" :inset="item.inset"></v-divider>

                <v-list-item v-else link @click="gallery(item.group)">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="wrap-text">
                      {{ item.title }}
                      <sup>{{ item.notes }}</sup>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.quantity }}枚
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
          <v-card-text>
            <p class="notes">
              <span>※1</span>
              98枚目にフェリス女学院（当時の名称「フェリス和英女学校」）が写っています。
            </p>
            <p class="notes">
              <span>※2</span>
              撮影地が明記されていない絵葉書については、文献や法人のウェブサイトなどを調査し、判明したものは補記しました。
            </p>
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
          <v-img
            :src="image.src"
            class="open-tinybox"
            aspect-ratio="1.2"
            contain
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text>No.{{ idx + 1 }}&nbsp;{{ image.caption }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <VueTinybox v-model="index" :images="images" loop></VueTinybox>
  </v-container>
</template>

<script>
import imageList from "@/assets/json/digital-collection/collection07.json";

export default {
  name: "PageDigitalCollection07",
  data: () => ({
    title: "横浜絵葉書（手彩色）",
    titleLogo: "/images/digital-collection/collection07/title-logo.png",
    index: null,
    topImage: "/images/digital-collection/collection07/group01/group01_023.jpg",
    commentary1:
      "<p>絵葉書は、明治33（1900）年9月1日に私製葉書の作成と使用が認められ、逓信省が日露戦争記念絵葉書を発行したのを契機にブームとなりました。当初は一色刷り（墨摺り）であった絵葉書に、筆やステンシルを使って着色したものが手彩色です。本学所蔵の『横浜絵葉書（手彩色）』は、明治から大正時代における、横浜市内の名所の数々を描いたもので、国内外から横浜を訪れた多くの人々が買い求めました。現在は、関東大震災や戦災で失われた横浜の景観や市民の暮らしを知る上で、貴重な歴史資料となっています。</p>",
    commentary2:
      "<ul><li>半澤正時編『横浜絵葉書』（有隣堂，1989年）</li><li>ニール・ペドラー編『横浜絵葉書：ペドラー・コレクション』（大津侃也訳，有隣堂，1980年）</li><li>横浜市ふるさと歴史財団編『横浜歴史と文化：開港150周年記念』（有隣堂，2009年）</li><li>横濱商况新報社編『横濱成功名誉鑑』（有隣堂，1980年）</li></ul>",
    breadcrumbs: [
      {
        text: "電子コレクション",
        disabled: false,
        href: "/digital-collection",
      },
      {
        text: "横浜絵葉書（手彩色）",
        disabled: true,
        href: "/digital-collection/collection07",
      },
    ],
    list: [
      {
        title: "横浜本町通り、横浜馬車道通り、横浜居留地",
        quantity: 132,
        notes: "※1 ※2",
        avatar:
          "/images/digital-collection/collection07/group01/group01_023.jpg",
        group: "group01",
      },
      { divider: true, inset: true },
      {
        title: "横浜山手英国病院他",
        quantity: 187,
        notes: "※2",
        avatar:
          "/images/digital-collection/collection07/group02/group02_1004.jpg",
        group: "group02",
      },
      { divider: true, inset: true },
      {
        title: "海岸通り、桟橋、根岸、元町、伊勢佐木町、三渓園他",
        quantity: 106,
        notes: "※2",
        avatar:
          "/images/digital-collection/collection07/group03/group03_2083.jpg",
        group: "group03",
      },
    ],
    images: [],
    imageList,
  }),
  head() {
    return {
      title: this.title,
    };
  },
  methods: {
    gallery(group) {
      let arr;
      switch (group) {
        case "group01":
          arr = this.imageList[0].group01;
          break;
        case "group02":
          arr = this.imageList[0].group02;
          break;
        case "group03":
          arr = this.imageList[0].group03;
          break;
        default:
          break;
      }
      this.images = arr;
    },
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
.notes {
  margin: 0;
}
.notes span {
  margin-right: 1em;
}
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
