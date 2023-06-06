<script setup lang="ts">
import images from "@/assets/json/digital-collection/collection05.json";
import type { ImgsObj } from "@/components/TheLightbox.vue";

const title = ref("ビアトリクス・ポターの絵本");
useSeoMeta({ title: title.value });

const titleLogo = "/images/digital-collection/collection05/title-logo.gif";
const layoutCover = [12, 6];
const layoutOther = [6, 3];
const commentary1 =
  "<h3>ピーターラビットの絵本シリーズ</h3><p>この小さな絵本シリーズは英国のビアトリクス・ポター（Beatrix Potter, 1866－1943）の作品です。これらの絵本は全部で23冊のシリーズになっています。最初の作品は101年前に出版された、シリーズの第1作、世界中で親しまれているThe Tale of Peter Rabbit (『ピーターラビットのおはなし』)です。</p><p>ポターは生涯、自然とともに生きた女性で、幼いときから自然や生きものを徹底的に観察し、写実的に描きました。また彼女の作品には舞台として、彼女が暮らしていた湖水地方の自然の風景や建物が描いてあり、登場者はこの地方に生きていた動物がモデルとなっています。また作品の中に、彼女が飼っていたペットのウサギやハリネズミなども登場します。</p><p>このたび出版社のご協力を得て、全作品を電子データ化することができました。ネット上で、全作品の表紙を見ることができます。図書館の貴重資料室では、研究用にイラストレーションとテクストを詳しく調査できるようになっています。 本大学図書館にはシリーズ23冊の英語版、日本語版、また初版本を含む貴重な古書などもそろえてありますので、関心のある方は、図書館で実際に作品を手にとって見て下さい。</p>";
const commentary2 =
  "ビアトリクス・ポター（1866～1943）はロンドンの裕福で厳格な家庭に育った。少女時代から田園を愛し、小動物の観察やスケッチに没頭した。彼女の自然に対する情熱は、「ピーターラビットの絵本」シリーズの創作に色濃く反映されている。後半生はイングランド湖水地方に住みつき、羊の飼育と自然保護活動にカを注いだ。";
const breadcrumbs = [
  {
    title: "電子コレクション",
    disabled: false,
    href: "/digital-collection",
  },
  {
    title: "ビアトリクス・ポターの絵本",
    disabled: true,
    href: "/digital-collection/collection05",
  },
];

// Lightbox用
const lightboxComponent = ref();
const imgs = computed(() => {
  return images.map((value): ImgsObj => {
    return {
      src: value.src,
      title: value.caption,
      alt: value.caption,
    };
  });
});
const lightboxShow = (index: number): void => {
  lightboxComponent.value.onShow(index);
};
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <nav-breadcrumbs :items="breadcrumbs"></nav-breadcrumbs>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" />
          </v-card-title>
          <v-card-text>
            <div v-html="commentary1"></div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            {{ commentary2 }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="(image, idx) in images"
        :key="'image' + idx"
        :cols="image.cover ? layoutCover[0] : layoutOther[0]"
        :lg="image.cover ? layoutCover[1] : layoutOther[1]"
      >
        <v-card
          v-if="image.cover"
          elevation="0"
          color="grey-lighten-4"
          height="100%"
          @click="lightboxShow(idx)"
        >
          <v-card-title>
            {{ image.caption }}
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="5">
                <v-img
                  :src="image.src"
                  class="open-tinybox"
                  aspect-ratio="1"
                  cover
                >
                  <template #placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <p>{{ image.text }}</p>
                <v-chip v-if="image.num" small class="mr-2" variant="tonal"
                  >請求記号</v-chip
                >{{ image.num }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card
          v-else
          elevation="0"
          color="grey-lighten-4"
          height="100%"
          @click="lightboxShow(idx)"
        >
          <v-img :src="image.src" class="open-tinybox" aspect-ratio="1" cover>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text>{{ image.caption }}の内容</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <the-lightbox ref="lightboxComponent" :imgs="imgs"></the-lightbox>
  </v-container>
</template>

<style scoped>
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
</style>
