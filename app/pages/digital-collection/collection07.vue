<script setup lang="ts">
import json from '@/assets/json/digital-collection/collection07.json'

const title = ref('横浜絵葉書（手彩色）')
useSeoMeta({
  title: title.value,
  description:
    '本学所蔵の『横浜絵葉書（手彩色）』は、明治から大正時代における、横浜市内の名所の数々を描いたもので、国内外から横浜を訪れた多くの人々が買い求めました。現在は関東大震災や戦災で失われた横浜の景観や市民の暮らしを知る上で、貴重な歴史資料となっています。',
})

const titleLogo = '/images/digital-collection/collection07/title-logo.png'
const topImage
  = '/images/digital-collection/collection07/group01/group01_023.jpg'
const commentary1
  = '<p>絵葉書は、明治33（1900）年9月1日に私製葉書の作成と使用が認められ、逓信省が日露戦争記念絵葉書を発行したのを契機にブームとなりました。当初は一色刷り（墨摺り）であった絵葉書に、筆やステンシルを使って着色したものが手彩色です。本学所蔵の『横浜絵葉書（手彩色）』は、明治から大正時代における、横浜市内の名所の数々を描いたもので、国内外から横浜を訪れた多くの人々が買い求めました。現在は、関東大震災や戦災で失われた横浜の景観や市民の暮らしを知る上で、貴重な歴史資料となっています。</p>'
const commentary2
  = '<ul><li>半澤正時編『横浜絵葉書』（有隣堂，1989年）</li><li>ニール・ペドラー編『横浜絵葉書：ペドラー・コレクション』（大津侃也訳，有隣堂，1980年）</li><li>横浜市ふるさと歴史財団編『横浜歴史と文化：開港150周年記念』（有隣堂，2009年）</li><li>横濱商况新報社編『横濱成功名誉鑑』（有隣堂，1980年）</li></ul>'
const breadcrumbs = [
  {
    title: '電子コレクション',
    disabled: false,
    href: '/digital-collection',
  },
  {
    title: '横浜絵葉書（手彩色）',
    disabled: true,
    href: '/digital-collection/collection07',
  },
]

const list = [
  {
    type: 'subheader',
    title: '横浜絵葉書（手彩色）: 明治～大正',
  },
  {
    title: '横浜本町通り、横浜馬車道通り、横浜居留地',
    quantity: 132,
    notes: '※1 ※2',
    avatar: '/images/digital-collection/collection07/group01/group01_023.jpg',
    group: 'group01',
  },
  { type: 'divider', inset: true },
  {
    title: '横浜山手英国病院他',
    quantity: 187,
    notes: '※2',
    avatar: '/images/digital-collection/collection07/group02/group02_1004.jpg',
    group: 'group02',
  },
  { type: 'divider', inset: true },
  {
    title: '海岸通り、桟橋、根岸、元町、伊勢佐木町、三渓園他',
    quantity: 106,
    notes: '※2',
    avatar: '/images/digital-collection/collection07/group03/group03_2083.jpg',
    group: 'group03',
  },
]

type Images = {
  src: string
  caption: string
}
const display = ref<Images[]>()
const gallery = (group: string | undefined) => {
  switch (group) {
    case 'group01':
      display.value = json.group01
      break
    case 'group02':
      display.value = json.group02
      break
    case 'group03':
      display.value = json.group03
      break
    default:
      break
  }
}

const images = computed(() => {
  return display.value?.map((value) => {
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
    <VRow dense>
      <VCol cols="12">
        <PartsNavBreadcrumbs
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
          <VContainer>
            <VRow>
              <VCol
                cols="12"
                sm="8"
              >
                <VCardText>
                  <PartsHtmlTextArea :data="commentary1" />
                </VCardText>
                <VCardText>
                  <p>参考文献</p>
                  <PartsHtmlTextArea :data="commentary2" />
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
          </VContainer>
        </VCard>
      </VCol>
    </VRow>
    <VRow if="images">
      <VCol>
        <VCard>
          <VList line="two">
            <template
              v-for="(item, i) in list"
              :key="`group-${i}`"
            >
              <VListSubheader v-if="item.type === 'subheader'">
                {{
                  item.title
                }}
              </VListSubheader>
              <VDivider v-else-if="item.type === 'divider'" />
              <VListItem
                v-else
                link
                :prepend-avatar="item.avatar"
                @click="gallery(item.group)"
              >
                <VListItemTitle class="wrap-text">
                  {{ item.title }}
                  <sup>{{ item.notes }}</sup>
                </VListItemTitle>
                <VListItemSubtitle> {{ item.quantity }}枚 </VListItemSubtitle>
              </VListItem>
            </template>
          </VList>
          <VCardText>
            <p class="notes">
              <span>※1</span>
              98枚目にフェリス女学院（当時の名称「フェリス和英女学校」）が写っています。
            </p>
            <p class="notes">
              <span>※2</span>
              撮影地が明記されていない絵葉書については、文献や法人のウェブサイトなどを調査し、判明したものは補記しました。
            </p>
          </VCardText>
        </VCard>
        <templates-list-image
          v-if="images"
          :images="images"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.titleLogo {
  max-width: 100%;
}
.caption {
  margin: 0;
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
