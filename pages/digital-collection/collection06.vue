<script setup lang="ts">
const title = ref("コルデコットの絵本");
useSeoMeta({
  title: title.value,
  description:
    "英国ヴィクトリア朝後期に活躍した絵本作家、ランドルフ・コールデコットの絵本16点の表紙の画像を掲載しています。",
});

const titleLogo = "/images/digital-collection/collection06/title-logo.jpg";
const commentary1 =
  "<h3>コルデコットの木版色刷り絵本シリーズ</h3><p>ランドルフ・コールデコット (Randolph Caldecott 1846-86) は、ウォルター・クレイン、ケイト・グリーナウェーと並ぶ、英国ヴィクトリア朝後期に活躍した挿絵画家、絵本作家。チェスター州に帽子商の子として生れました。20 代後半から本格的に絵の修業を始め、「パンチ」誌などに風刺画やスケッチを次々発表。40 年の短い生涯で、木版工房主のエドモンド・エバンズとの合作によるマザーグース絵本やここに紹介する絵本など、多くの作品を残しました。</p><p>作品内容は当時流行った戯れうたや物語詩など多彩。王侯貴族から庶民までを巧みに描き、また人に擬えた動物は当時の人々の様子を彷彿とさせます。躍動感あふれる軽やかな筆致、ユーモア、庶民的な温かさなど、後のビアトリクス・ポター、エドワード・アーディゾーニ、モーリス・センダックらに大きな影響を与えました。</p>";
const breadcrumbs = [
  {
    title: "電子コレクション",
    disabled: false,
    href: "/digital-collection",
  },
  {
    title: "コルデコットの絵本",
    disabled: true,
    href: "/digital-collection/collection06",
  },
];
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <elements-nav-breadcrumbs
          :items="breadcrumbs"
        ></elements-nav-breadcrumbs>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" />
          </v-card-title>
          <v-card-text>
            <elements-html-text-area :data="commentary1" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <contents-collection-caldecotts />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.titleLogo {
  max-width: 100%;
}
</style>
