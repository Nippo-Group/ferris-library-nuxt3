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
        <template v-for="(content, index) in itemsContents">
          <VCard
            v-if="selected == content.name"
            :key="index"
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
    </VRow>
  </VContainer>
</template>
