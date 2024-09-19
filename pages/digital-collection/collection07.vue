<script setup lang="ts">
const title = ref("横浜絵葉書（手彩色）");
useSeoMeta({
  title: title.value,
  description:
    "本学所蔵の『横浜絵葉書（手彩色）』は、明治から大正時代における、横浜市内の名所の数々を描いたもので、国内外から横浜を訪れた多くの人々が買い求めました。現在は関東大震災や戦災で失われた横浜の景観や市民の暮らしを知る上で、貴重な歴史資料となっています。",
});

const titleLogo = "/images/digital-collection/collection07/title-logo.png";
const topImage =
  "/images/digital-collection/collection07/group01/group01_023.jpg";
const commentary1 =
  "<p>絵葉書は、明治33（1900）年9月1日に私製葉書の作成と使用が認められ、逓信省が日露戦争記念絵葉書を発行したのを契機にブームとなりました。当初は一色刷り（墨摺り）であった絵葉書に、筆やステンシルを使って着色したものが手彩色です。本学所蔵の『横浜絵葉書（手彩色）』は、明治から大正時代における、横浜市内の名所の数々を描いたもので、国内外から横浜を訪れた多くの人々が買い求めました。現在は、関東大震災や戦災で失われた横浜の景観や市民の暮らしを知る上で、貴重な歴史資料となっています。</p>";
const commentary2 =
  "<ul><li>半澤正時編『横浜絵葉書』（有隣堂，1989年）</li><li>ニール・ペドラー編『横浜絵葉書：ペドラー・コレクション』（大津侃也訳，有隣堂，1980年）</li><li>横浜市ふるさと歴史財団編『横浜歴史と文化：開港150周年記念』（有隣堂，2009年）</li><li>横濱商况新報社編『横濱成功名誉鑑』（有隣堂，1980年）</li></ul>";
const breadcrumbs = [
  {
    title: "電子コレクション",
    disabled: false,
    href: "/digital-collection",
  },
  {
    title: "横浜絵葉書（手彩色）",
    disabled: true,
    href: "/digital-collection/collection07",
  },
];
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
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" >
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8">
                <v-card-text>
                  <elements-html-text-area :data="commentary1" />
                </v-card-text>
                <v-card-text>
                  <p>参考文献</p>
                  <elements-html-text-area :data="commentary2" />
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="4">
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
    </v-row>
    <v-row if="images">
      <v-col>
        <contents-collection-ehagaki />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.titleLogo {
  max-width: 100%;
}
</style>
