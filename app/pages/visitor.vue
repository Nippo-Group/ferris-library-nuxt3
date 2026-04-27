<script setup lang="ts">
import type { Items } from '@/contents/visitor'
import { items, itemsContents, aboutCopy } from '@/contents/visitor'
import { useSelected } from '@/composables/common/'
import { converterMarkdown } from '@/utils'

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
        <!-- 館内複写、マイクロフィルム利用時の注意事項 -->
        <VCard
          :title="aboutCopy.title"
          variant="tonal"
        >
          <section
            v-for="(article, index) in aboutCopy.article"
            :key="index"
          >
            <VCardText>
              <h3>
                {{ article.title }}
              </h3>
              <PartsHtmlTextArea :data="converterMarkdown(article.text)" />
            </VCardText>
          </section>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
