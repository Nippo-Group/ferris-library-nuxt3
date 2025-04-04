<script setup lang="ts">
import { useNews } from '@/composables/news/useNews'
import { pickOut } from '@/contents/index'
import { iconMap } from '@/utils'

const { newsList } = useNews({ limit: 6, orders: '-date' })
</script>

<template>
  <VContainer>
    <VRow>
      <VCol
        cols="12"
        tag="section"
      >
        <SectionsSlideShow />
      </VCol>
      <VCol
        cols="12"
        tag="section"
      >
        <SectionsTodaysEvents />
      </VCol>
      <VCol
        cols="12"
        tag="section"
      >
        <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
          <VIcon
            :icon="iconMap['tap']"
            start
          />
          Pick Out
        </div>
        <VSlideGroup
          multiple
          show-arrows
        >
          <VSlideGroupItem
            v-for="(item, index) in pickOut"
            :key="'pickout-' + index"
          >
            <VCard
              variant="outlined"
              color="rgba(0, 0, 0, 0.1)"
              :to="item.to"
              hover
              class="ma-1"
              width="240"
            >
              <VImg
                :src="item.image"
                height="160px"
                cover
                class="align-end"
                gradient="to bottom, rgba(255,255,255,.2), rgba(255,255,255,1)"
              >
                <VCardTitle class="text-black wrap-text">
                  <PartsNewlineText :item="item.name" />
                </VCardTitle>
              </VImg>
              <VCardText class="text-black">
                {{ item.text }}
              </VCardText>
            </VCard>
          </VSlideGroupItem>
        </VSlideGroup>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        cols="12"
        lg="6"
        tag="section"
      >
        <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
          <VIcon
            :icon="iconMap['newspaper']"
            start
          />
          News
        </div>
        <templates-list-news :contents-list="newsList" />
        <div class="text-center mt-5">
          <PartsBtnInside
            link="ニュース一覧へ"
            to="news"
          />
        </div>
      </VCol>
      <VCol
        cols="12"
        lg="6"
        tag="section"
      >
        <SectionsSearchOpac />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
