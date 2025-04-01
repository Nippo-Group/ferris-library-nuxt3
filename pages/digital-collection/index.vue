<script setup lang="ts">
import { items } from '@/contents/digital-collection'

const title = ref('電子コレクション')
useSeoMeta({
  title: title.value,
  description: '図書館が所有または管理している資料を閲覧することができます。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <PartsTitlePage>{{ title }}</PartsTitlePage>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VAlert
          density="compact"
          border="start"
          variant="outlined"
          type="warning"
        >
          当WEBサイト上にある情報や画像などは、フェリス女学院大学附属図書館が所有または管理しています。<br>
          無断転載や無断使用を禁じます。
        </VAlert>
      </VCol>

      <VCol
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="6"
      >
        <VCard
          height="100%"
          class="d-flex flex-column"
        >
          <div class="d-flex justify-space-between ma-2">
            <div>
              <VCardSubtitle class="mb-4 pl-0">
                {{
                  item.kind
                }}
              </VCardSubtitle>
              <VCardTitle class="text-h5 mb-1 wrap-text pl-0">
                {{
                  item.title
                }}
              </VCardTitle>
              <VCardSubtitle
                v-if="item.subtitle"
                class="pl-0 wrap-text"
              >
                {{
                  item.subtitle
                }}
              </VCardSubtitle>
            </div>
            <VAvatar
              :image="item.image"
              rounded="0"
              color="grey-lighten-2"
              size="150"
            />
          </div>
          <VCardText>
            <p
              v-for="(text, j) in item.texts"
              :key="j"
              class="sentence"
            >
              {{ text.p }}
            </p>
          </VCardText>
          <VCardActions>
            <PartsBtnInside
              v-if="item.identification"
              link="資料をみる"
              :to="'/digital-collection/' + item.identification"
              block
            />
            <PartsBtnOpenInNew
              v-if="item.link"
              link="資料をみる"
              :url="item.link"
              block
            />
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.VCard--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.overflow {
  max-height: 120px;
}
.sentence {
  margin-bottom: 1em;
}
</style>
