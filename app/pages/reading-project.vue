<script setup lang="ts">
import { useNews } from '@/composables/news/useNews'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'
import titleImage from '@/assets/images/reading-project/reading-project-title.png'

const title = '読書運動プロジェクト'
const description
  = '通称：読プロ。「本が好き」「図書館が好き」な学生が集まって、教職員と一緒に活動している団体です。'
useSeoMeta({
  title,
  description,
})

const isWhat
  = '本学の読書運動プロジェクトは、1998年にシアトル市で始まり、シカゴ市で2001年以降大きな成果を収め全米各地に広まった《One Book, One Community.》にヒントを得たものです。この取組みは、選定された図書の読書を通じてコミュニティの意識を育むOneBook, One Chicagoとしてシカゴ公共図書館で現在も続いています。本学では2002年度から始まり、図書館を拠点として「読書」を個人的な経験だけでなく他者と共有・発信する活動を支援しています。'

const mainActivity = [
  '本の展示',
  'POPコンテスト・創作コンクール',
  '選書ツアー',
  '朗読会',
  '各種イベントの実施',
]
const documents = [
  {
    name: 'リーフレット',
    url: '/documents/reading-project/activity-introduction-leaflet.pdf',
    type: 'PDF',
  },
]

const recommendedFor = [
  '本が好き',
  'イラストを描くのが好き',
  'イベントが好き、企画してみたい',
  '大学生だからこそできる活動がしたい',
  '人前で話すのは苦手だが、克服したい',
]

const mediaInformation = {
  title: '掲載されました！',
  actions: [
    {
      url: 'https://magazine.ferris.ac.jp/20230511/18045/',
      title: '読書運動プロジェクト活動報告　～2023春～',
      source: 'フェリスを綴る　2023年5月11日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20230328/17905/',
      title:
          '読書運動プロジェクト：朗読会「しあわせの、かたち。 ―ひとりひとりが願うこと―」を開催しました',
      source: 'フェリスを綴る　2023年3月28日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20221021/17101/',
      title:
          '読書体験の魅力を共有し、新たな本に出会う機会を創出する読書運動プロジェクト',
      source: 'フェリスを綴る　2022年10月11日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20220830/16312/',
      title: '読書運動プロジェクト活動報告　～2022夏～',
      source: 'フェリスを綴る　2022年8月30日掲載',
    },
  ],
}

const movies = [
  {
    src: 'https://www.youtube.com/embed/HRKpRB5fZ-o',
    title: '図書館施設・設備編',
  },
  {
    src: 'https://www.youtube.com/embed/rBAip8vAxKU',
    title: 'ラーニングコモンズ編',
  },
]

const { show } = useConfirmDL()

const newsIds = [
  'f_5l518j2yx',
  '5jh2hdztjnyk',
  'bp922vzsag',
  '3-h0zb9femhn',
  '2nqt2bwmsqd',
  'zt10lnwef',
  'tzndu8jahabw',
  'rne-f461pg',
]
const { newsList } = useNews({
  ids: newsIds.join(','),
})
</script>

<template>
  <VSheet color="grey-lighten-3">
    <VContainer>
      <!-- ヘッダー -->
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv1
            :title="['読書運動', 'プロジェクト']"
            :image="titleImage"
          />
        </VCol>
      </VRow>
      <VRow>
        <!-- リード文 -->
        <VCol cols="12">
          <SectionsRPHeaderLv2
            title="「読書運動プロジェクト」とは？"
            :lead="isWhat"
          />
        </VCol>

        <!-- 主な活動 -->
        <VCol cols="12">
          <templates-card-reading-project title="主な活動">
            <VContainer>
              <VRow dense>
                <VCol
                  cols="12"
                  md="7"
                >
                  <PartsNumberedList :items="mainActivity" />
                </VCol>
                <VCol
                  v-for="(document, index) in documents"
                  :key="`document${index}`"
                  cols="12"
                  md="5"
                >
                  <client-only>
                    <TemplatesPdfPreview
                      :src="document.url"
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

        <!-- メンバー募集 -->
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

        <!-- 掲載されました -->
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

        <!-- ニュース -->
        <VCol cols="12">
          <templates-card-reading-project title="News">
            <templates-list-news :contents-list="newsList" />
          </templates-card-reading-project>
        </VCol>
      </VRow>

      <!-- 学生メンバーの活動について -->
      <VRow>
        <VCol cols="12">
          <SectionsRPHeaderLv2
            title="学生メンバーの活動について"
            :lead="description"
          />
        </VCol>
        <VCol cols="12">
          <TemplatesCardReadingProject>
            <VCardText>
              <p>図書館を拠点に、「読書」を個人的な体験にとどめず、他者と共有し、発信していくことを目的としています。</p>
              <p>テーマに沿った本の展示を定期的に行うほか、大学祭では展示発表や図書館ツアー、朗読会などの企画・運営も行っています。</p>
              <p>本や図書館の魅力を学内外のさまざまな人に伝えるため、アイデアあふれる企画や広報活動を展開します。</p>
            </VCardText>
            <VContainer>
              <VRow density="compact">
                <VCol
                  cols="6"
                  md="3"
                >
                  <VImg
                    aspect-ratio="6/4"
                    cover
                    src="@/assets/images/reading-project/reading-project-01.jpg"
                  />
                </VCol>
                <VCol
                  cols="6"
                  md="3"
                >
                  <VImg
                    aspect-ratio="6/4"
                    cover
                    src="@/assets/images/reading-project/reading-project-02.jpg"
                  />
                </VCol>
                <VCol
                  cols="6"
                  md="3"
                >
                  <VImg
                    aspect-ratio="6/4"
                    cover
                    src="@/assets/images/reading-project/reading-project-03.jpg"
                  />
                </VCol>
                <VCol
                  cols="6"
                  md="3"
                >
                  <VImg
                    aspect-ratio="6/4"
                    cover
                    src="@/assets/images/reading-project/reading-project-04.jpg"
                  />
                </VCol>
              </VRow>
            </VContainer>
          </TemplatesCardReadingProject>
        </VCol>
      </VRow>

      <!-- 活動拠点 -->
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

      <!-- ヘッダー -->
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
