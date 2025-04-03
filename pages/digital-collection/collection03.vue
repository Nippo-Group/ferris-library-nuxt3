<script setup lang="ts">
import json from '@/assets/json/digital-collection/collection03.json'

const title = ref('大和物語')
useSeoMeta({
  title: title.value,
  description:
    '『大和物語』は平安前期に成立したとされる歌物語です。本学所蔵の書物は「奈良絵本」といわれる挿絵付きの筆写本で、表紙裏は金泥で塗られ、草花が金で描かれた料紙に、墨の濃淡も鮮やかに、流れるような文字が書き綴られた美麗なものです。',
})

const titleLogo = '/images/digital-collection/collection03/title-logo.gif'
const topImage = '/images/digital-collection/collection03/00.jpg'
const topImageCaptions = [
  '大きさ（表紙）タテ23cm×ヨコ17cm',
  '5帖　秩入り',
  '列帖装',
  '各帖挿絵7枚',
  '製作年代不明',
]
const commentary = [
  '当WEBサイト上にある情報や画像などはフェリス女学院大学が所有または管理しています。',
  '無断転載や無断使用を禁じます。',
]
const breadcrumbs = [
  {
    title: '電子コレクション',
    disabled: false,
    href: '/digital-collection',
  },
  {
    title: '大和物語',
    disabled: true,
    href: '/digital-collection/collection03',
  },
]

const images = computed(() => {
  return json.map((value) => {
    return {
      src: value.src,
      title: value.caption,
      alt: value.caption,
      append: value.caption,
    }
  })
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <PartsNavBreadcrumbs
          :items="breadcrumbs"
        />
      </VCol>
      <VCol cols="12">
        <VCard>
          <VRow>
            <VCol
              cols="12"
              sm="8"
            >
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
                  :key="i"
                  class="mb-4"
                >
                  {{ text }}
                </p>
              </VCardText>
              <VCardText>
                <p
                  v-for="(caption, j) in topImageCaptions"
                  :key="j"
                  class="text-caption"
                >
                  {{ caption }}
                </p>
              </VCardText>
            </VCol>
            <VCol
              cols="12"
              sm="4"
            >
              <VCardText>
                <VImg
                  :src="topImage"
                  cover
                  class="bg-grey-lighten-3"
                />
              </VCardText>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
      <VCol>
        <TemplatesListImage :images="images" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.titleLogo {
  max-width: 100%;
}
</style>
