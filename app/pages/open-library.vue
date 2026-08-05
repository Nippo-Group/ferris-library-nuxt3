<script setup lang="ts">
import { useNews } from '@/composables/news/useNews'

const title = 'オープンライブラリー（図書館開放）のご案内'
useSeoMeta({
  title,
  description: '緑園キャンパスの図書館を通年で開放しています。',
})

// ニュース取得
const newsIds = [
  '5vpc1gcnu3',
]
const { newsList } = useNews({
  ids: newsIds.join(','),
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        >
          <p>2024年度より、緑園キャンパスの図書館を通年で開放しています。</p>
          <p>静かな環境で受験勉強をしたい方、本をゆっくり読みたい方、大学図書館の雰囲気を体験してみたい方も大歓迎です。</p>
          <p>ぜひ、フェリスの図書館をお気軽にご利用ください。</p>
        </SectionsPageHeader>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <VRow>
          <VCol cols="12">
            <VCard>
              <VCardTitle>期間</VCardTitle>
              <VCardText>
                <p>2026年4月1日(水)～2027年3月31日(水) （閉館日は除く）</p>
                <p>各日の開館時間は、図書館ホームページ内のカレンダーでご確認ください。</p>
              </VCardText>
              <VCardActions>
                <PartsBtnInside
                  to="calendar"
                  link="カレンダーページへ"
                />
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <VCard>
              <VCardTitle>利用できる方</VCardTitle>
              <VCardText>
                <p>高校生・大学受験生の女子</p>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <VCard>
              <VCardTitle>利用方法</VCardTitle>
              <VCardText>
                <PartsDescriptionList
                  :items="[
                    { term: '予約', description: '不要' },
                    { term: '入館料', description: '無料' },
                    { term: '持参するもの', description: '生徒証、学生証など、本人確認ができるもの' },
                  ]"
                />
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <VCard>
              <VCardTitle>利用できるサービス</VCardTitle>

              <VCardText>
                <PartsBulletedList>
                  <li>館内での資料閲覧</li>
                  <li>閲覧席利用（学習・受験勉強）</li>
                </PartsBulletedList>
                <VAlert :border="false">
                  <p>※図書のみ貸出可能です。（5冊・2週間）</p>
                  <p>※DVDのご利用は館内のみで、貸出はできません。</p>
                  <p>※山手キャンパスの附属図書館分室は開放しておりません。</p>
                </VAlert>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
        <VRow />
      </VCol>
      <VCol
        cols="12"
        md="4"
      >
        <client-only>
          <TemplatesPdfPreview
            src="/documents/open-library/open-library-poster.pdf"
          />
        </client-only>
      </VCol>
      <VCol cols="12">
        <VCard>
          <VCardTitle>News</VCardTitle>
          <TemplatesListNews :contents-list="newsList" />
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
