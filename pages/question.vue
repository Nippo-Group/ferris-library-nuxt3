<script setup lang="ts">
import { faqList } from '@/contents/question'
import { useMultiSelected } from '@/composables/common/'

const title = 'よくある質問 Q&A'
useSeoMeta({
  title,
  description: 'ご利用にあたりよくあるご質問をまとめました。',
})

const { selectedList } = useMultiSelected()
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
        <VExpansionPanels
          v-model="selectedList"
          multiple
        >
          <VExpansionPanel
            v-for="(faq, index) in faqList"
            :key="index"
          >
            <VExpansionPanelTitle>
              <div class="d-flex align-center gap-4">
                <div class="pr-4">
                  <icons-faq-question
                    size="large"
                    color="primary"
                  />
                </div>
                <div>
                  {{ faq.question }}
                </div>
              </div>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <PartsHtmlTextArea :data="faq.answer" />
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
    </VRow>
  </VContainer>
</template>
