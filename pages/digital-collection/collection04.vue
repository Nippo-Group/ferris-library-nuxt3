<script setup lang="ts">
const title = ref('Japanese Fairy Tale')
useSeoMeta({
  title: title.value,
  description:
    '明治時代に作られた縮緬本（ちりめんぼん）とよばれるシリーズ『Japanese Fairy Tale』をデジタル化しました。',
})

const titleLogo = '/images/digital-collection/collection04/title-logo.gif'
const commentary = [
  'はじめに',
  'フェリス女学院大学の図書館にある、この希少本シリーズは小型の和装本で、縮緬本（ちりめんぼん）とよばれるものです。このシリーズは英語で書かれていて、昔話絵本のシリーズになっています。日本の代表的な昔話、「桃太郎」「瘤取り爺」「猿蟹合戦」などが入っています。',
  'このシリーズは、明治十八年（一八八五年）以来、長谷川武次郎が作りました。本大学にあるものは、テクストが英語で書かれていますが、他にもドイツ語で出されたものがあります。これらの本は、箱根のホテル等で売られていたといわれていますので、来日した外国人に向けておみやげとして売られたと考えられます。',
  '再話しているのは、タムスンという宣教師、チェンバレンという学者、作家のラフカディオ・ハーン等です。明治期に、はじめに日本の昔話を外国向けに紹介した人たちが外国人であったということは興味深いことです。',
  'フェリスにあるシリーズは、そのほとんど大半を、小林永濯（えいたく）という画家が描いており、みごとなイラストレーションです。日本の昔話のイメージをよく表現してあり、事物、衣装などの時代考証もきちんとなされています。',
  'これらの本は長谷川弘文社という出版社によって作られ、本の体裁は絵と文章を印刷した後に、その紙を縮めて縮緬としたものです。これがその呼び方である「縮緬本」の由来です。',
  'このシリーズは貴重本ですので、今回、データ・ベース化することになりました。関心のある人は、図書館で電子化されたものを見ることができます。複製本（CD-ROM版）も二部用意されています。実物は図書館貴重資料室に保管されていますが、たいへん貴重なものですから、取り扱いは図書館員の指示のもと、慎重に行って下さい。',
  '藤本朝巳',
]
const commentary2 = [
  '本の写真の著作権は、それぞれの本の著作権保持者に帰属し、保護されています。',
  'また、当webサイト上にある情報や画像などはフェリス女学院大学が所有または管理しております。無断転載や無断使用を禁じます。',
]
const breadcrumbs = [
  {
    title: '電子コレクション',
    disabled: false,
    href: '/digital-collection',
  },
  {
    title: 'Japanese Fairy Tale',
    disabled: true,
    href: '/digital-collection/collection04',
  },
]
</script>

<template>
  <VContainer>
    <VRow dense>
      <VCol cols="12">
        <elements-nav-breadcrumbs
          :items="breadcrumbs"
        />
      </VCol>
      <VCol cols="12">
        <VCard>
          <VCardTitle>
            <img
              :src="titleLogo"
              :alt="title"
              class="titleLogo"
            >
          </VCardTitle>
          <VCardText>
            <p
              v-for="(text, i) in commentary"
              :key="'text1' + i"
              class="mb-4"
            >
              {{ text }}
            </p>
          </VCardText>
          <VCardText>
            <p
              v-for="(caption, j) in commentary2"
              :key="'text2' + j"
              class="text-caption"
            >
              {{ caption }}
            </p>
          </VCardText>
        </VCard>
      </VCol>
      <VCol>
        <contents-collection-japanese-fairy-tale />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
</style>
