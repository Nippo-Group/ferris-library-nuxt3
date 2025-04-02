<script setup lang="ts">
import { useVisible } from '@/composables/common'
import { useEbookList } from '@/composables/ebooks/useEbookList'
import { optionsCategory, optionsLanguage, toolbarText } from '@/contents/database'

const title = 'データベース・電子ブック'
useSeoMeta({
  title,
  description:
    '図書館で契約しているデータベースや電子ブックと利用方法を紹介しています。',
})

const { keyword, language, categories, ebooks, length, lengthAll } = useEbookList()
const { visible, show, dismiss } = useVisible()
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
        <VToolbar
          dense
          flat
        >
          <VTextField
            v-model="keyword"
            label="キーワード検索"
            hide-details
            clearable
            class="mr-2"
          />
          <VSpacer />
          <VBtn
            variant="outlined"
            @click="show"
          >
            <IconsSearchDefult />
            絞り込み検索
          </VBtn>
        </VToolbar>
        <p>検索条件：{{ [language, keyword].concat(categories).join(" ") }}</p>

        <VDialog
          v-model="visible"
          transition="dialog-bottom-transition"
          max-width="800"
        >
          <VCard>
            <VCardText>
              <VRow dense>
                <VCol
                  cols="12"
                  sm="3"
                >
                  <VSelect
                    v-model.lazy="language"
                    :items="optionsLanguage"
                    label="言語"
                    variant="solo"
                    clearable
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="9"
                >
                  <VSelect
                    v-model.lazy="categories"
                    :items="optionsCategory"
                    label="カテゴリー"
                    chips
                    multiple
                    variant="solo"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
            <VCardText>
              <PartsHtmlTextArea :markdown="toolbarText" />
            </VCardText>
            <VCardActions class="justify-end">
              <VBtn
                variant="text"
                @click="dismiss"
              >
                Close
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>
      </VCol>
    </VRow>
    <VRow dense>
      <VCol
        cols="12"
      >
        <p>
          <span v-if="!length"> 該当する項目はみつかりませんでした </span>
          <span v-else>{{ length }}/{{ lengthAll }}件の項目を表示しています</span>
        </p>
      </VCol>
    </VRow>
    <VRow>
      <VSlideXTransition group>
        <VCol
          v-for="(item, i) in ebooks"
          :key="i"
          cols="12"
        >
          <TemplatesCardEbook
            :name="item.name"
            :languages="item.languages"
            :categories="item.categories"
            :available="item.available"
            :body="item.body"
            :access="item.access"
            :logout="item.logout"
            :attention="item.attention"
            :links="item.links"
            :documents="item.documents"
          />
        </VCol>
      </VSlideXTransition>
    </VRow>
  </VContainer>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
