<script setup lang="ts">
import type { Items } from '@/contents/visitor'
import { newsList, items, itemsContents } from '@/contents/visitor'
import { useSelected } from '@/composables/common/useSelected'

const title = '学外の方へ'
useSeoMeta({
  title: title,
  description: '学外の方のご利用についてケースごとにご案内いたします。',
})

const { selected } = useSelected<Items>()
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <div class="text-h6 mb-2">
          <IconsNewspaperVariant start />
          関連ニュース
          <templates-list-news :contents-list="newsList" />
        </div>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VSelect
          v-model="selected"
          :items="items"
          variant="filled"
          label="選択してください"
          menu
        />
        <template
          v-for="(content, index) in itemsContents"
          :key="index"
        >
          <VCard
            v-if="selected == content.name"
            transition="scroll-x-transition"
          >
            <VCardTitle>{{ content.name }}</VCardTitle>
            <VCardText>
              <ContainersStack direction="col">
                <VAlert
                  v-for="(service, index2) in content.service"
                  :key="index + '-' + index2"
                  variant="outlined"
                  :type="service.type"
                  prominent
                  :border="false"
                >
                  <div
                    v-if="service.title"
                    class="text-h6"
                  >
                    {{ service.title }}
                  </div>
                  <PartsHtmlTextArea
                    v-if="service.notes"
                    :data="service.notes"
                  />
                </VAlert>
              </ContainersStack>
            </VCardText>
            <templates-list-file
              v-if="content.pdfs"
              :items="content.pdfs"
            />
          </VCard>
        </template>
      </VCol>
      <VCol
        v-if="selected"
        transition="scroll-x-transition"
        cols="12"
      >
        <VCard
          title="館内複写、マイクロフィルム利用時の注意事項"
          variant="tonal"
        >
          <VCardSubtitle>図書館資料のコピーについて</VCardSubtitle>
          <VCardText>
            緑園本館は4階の現金式コピー機を利用してください。<br>複写申込書に記載、提出してください。<br>領収書は発行できませんのでご了承ください。<br>あらかじめ小銭をご用意ください。<br>コピー単価は（モノクロ＠￥10・カラー＠￥50）です。
          </VCardText>
          <VCardSubtitle class="mt-4">
            図書館資料のコピーについて
          </VCardSubtitle>
          <VCardText>
            カウンターで手続が必要です（保存状態により利用できない場合があります）。<br>プリント料金は大学証紙購入による支払となります。<br>あらかじめ小銭をご用意ください。<br>プリント単価は（モノクロ＠￥10・カラー＠￥50）です。
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
