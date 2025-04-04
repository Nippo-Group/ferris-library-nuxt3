<script setup lang="ts">
import { useNews } from '@/composables/news/useNews'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'
import titleImage from '@/assets/images/reading-project/reading-project-title.png'
import {
  isWhat,
  mainActivity,
  documents,
  recommendedFor,
  mediaInformation,
  teamPlanning,
  teamRecitation,
  movies,
  newsIds,
} from '@/contents/reading-project'

const title = '読書運動プロジェクト'
const description
  = '読書運動プロジェクト（通称：読プロ）は、「本が好き」「図書館が好き」な学生が集まって、教職員と一緒に活動している公認団体です。学生が主体となり、読書の魅力を届ける様々な活動を展開中です。'
useSeoMeta({
  title,
  description,
})

const { show } = useConfirmDL()

const { newsList } = useNews({
  ids: newsIds.join(','),
})
</script>

<template>
  <VSheet color="grey-lighten-3">
    <VContainer>
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv1
            :title="['読書運動', 'プロジェクト']"
            :image="titleImage"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv2
            title="「読書運動プロジェクト」とは？"
            :lead="isWhat"
          />
        </VCol>
        <VCol cols="12">
          <templates-card-reading-project title="主な活動">
            <VContainer>
              <VRow dense>
                <VCol
                  cols="12"
                  md="6"
                >
                  <PartsNumberedList :items="mainActivity" />
                </VCol>
                <VCol
                  v-for="(document, index) in documents"
                  :key="`document${index}`"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <client-only>
                    <templates-pdf-viewer
                      :src="document.url"
                      button-hidden
                      pagination-hidden
                    />
                  </client-only>
                  <VBtn
                    block
                    variant="text"
                    @click="show(document.name, document.url, document.type)"
                  >
                    {{ document.name }}
                    <VIcon
                      :icon="iconMap['pdf']"
                      end
                    />
                  </VBtn>
                </VCol>
              </VRow>
            </VContainer>
          </templates-card-reading-project>
        </VCol>
        <VCol
          cols="12"
          lg="6"
        >
          <templates-card-reading-project title="《学内のみなさまへ》学生メンバー募集中！">
            <VCardText>
              図書館や本の魅力を学内外の様々な人に伝える活動を、一緒にしてみませんか？<br>学年不問で、いつからでも参加できます。
            </VCardText>
            <VList>
              <VListSubheader>【こんな人におすすめ！】</VListSubheader>
              <VListItem
                v-for="(item, index) in recommendedFor"
                :key="index"
                rounded="xl"
                density="compact"
                :prepend-icon="iconMap['checkboxMarked']"
              >
                <VListItemTitle class="wrap-text">
                  {{ item }}
                </VListItemTitle>
              </VListItem>
            </VList>
            <VCardText>
              参加希望の方、もっと詳しく活動について知りたい方は、図書館カウンターもしくは下記メールアドレスまでお問い合わせください。
            </VCardText>
            <TemplatesBannerEmail
              address="r_library@ferris.ac.jp"
            />
          </templates-card-reading-project>
        </VCol>
        <VCol
          cols="12"
          lg="6"
        >
          <templates-card-reading-project :title="mediaInformation.title">
            <VList
              v-if="mediaInformation.actions"
              lines="two"
            >
              <template
                v-for="(media, index) in mediaInformation.actions"
                :key="index"
              >
                <VDivider v-show="index > 0" />
                <VListItem
                  :href="media.url"
                  target="_blank"
                >
                  <VListItemTitle class="wrap-text">
                    {{
                      media.title
                    }}
                  </VListItemTitle>
                  <VListItemSubtitle>{{ media.source }}</VListItemSubtitle>
                  <template #append>
                    <VIcon :icon="iconMap['openInNew']" />
                  </template>
                </VListItem>
              </template>
            </VList>
          </templates-card-reading-project>
        </VCol>
        <VCol cols="12">
          <templates-card-reading-project title="News">
            <templates-list-news :contents-list="newsList" />
          </templates-card-reading-project>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv2
            title="活動紹介"
            :lead="description"
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <templates-card-reading-project :title="teamPlanning.name">
            <VCardText>
              <PartsHtmlTextArea :data="teamPlanning.content" />
            </VCardText>
            <VContainer>
              <VRow dense>
                <VCol
                  v-for="(image, imgIndex) in teamPlanning.images"
                  :key="imgIndex"
                  cols="12"
                  sm="6"
                >
                  <VImg :src="image" />
                </VCol>
              </VRow>
            </VContainer>
          </templates-card-reading-project>
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <templates-card-reading-project :title="teamRecitation.name">
            <VCardText>
              <PartsHtmlTextArea :data="teamRecitation.content" />
            </VCardText>
            <VContainer>
              <VRow dense>
                <VCol
                  v-for="(image, imgIndex) in teamRecitation.images"
                  :key="imgIndex"
                  cols="12"
                  sm="6"
                >
                  <VImg :src="image" />
                </VCol>
              </VRow>
            </VContainer>
            <VCardText v-if="teamRecitation.movie">
              <TemplatesYoutubeViewer
                :title="teamRecitation.movie.title"
                :src="teamRecitation.movie.src"
              />
            </VCardText>
          </templates-card-reading-project>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv2
            title="活動拠点～附属図書館～"
          />
        </VCol>
        <VCol cols="12">
          <templates-card-reading-project title="図書館紹介動画">
            <VContainer>
              <VRow dense>
                <VCol
                  v-for="(item, index) in movies"
                  :key="`video-${index}`"
                  cols="12"
                  md="6"
                >
                  <TemplatesYoutubeViewer
                    :title="item.title"
                    :src="item.src"
                  />
                </VCol>
              </VRow>
            </VContainer>
          </templates-card-reading-project>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv2 title="お問い合わせ" />
        </VCol>
        <VCol cols="12">
          <templates-card-reading-project title="お問い合わせ">
            <VCardText>
              <p>
                読書運動プロジェクトについてのお問い合わせは下記メールアドレスまでお願いいたします。
              </p>
            </VCardText>
            <TemplatesBannerEmail
              address="r_library@ferris.ac.jp"
            />
          </templates-card-reading-project>
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>
</template>

<style scoped>
.page-title {
  white-space: nowrap;
  line-height: 1.2em;
}

.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
