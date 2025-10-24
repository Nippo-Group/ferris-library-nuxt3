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
          <VCardSubtitle>{{ aboutCopy.article[0].title }}</VCardSubtitle>
          <VCardText>
            <PartsHtmlTextArea :data="converterMarkdown(aboutCopy.article[0].text)" />
          </VCardText>
          <VCardSubtitle class="mt-4">
            {{ aboutCopy.article[1].title }}
          </VCardSubtitle>
          <VCardText>
            <PartsHtmlTextArea :markdown="aboutCopy.article[1].text" />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
