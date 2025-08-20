<script setup lang="ts">
import { contentsMap, type Contents } from '~/contents/search-guide'
import { departments, type Department } from '~/types'
import { parseMarkdownSections } from '~/utils'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const id = 'collect-web-info'

const tab = ref<Department>(departments.international.id)

const mdIds: Record<Department, Contents> = {
  international: 'web-international',
  cultural: 'web-cultural',
  psychology: 'web-psychology',
}
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <TemplatesToolbarSearchGuide />
      </VCol>
      <VCol cols="12">
        <VCard>
          <VCardText class="text-area">
            <PartsHtmlTextArea :markdown="contentsMap[id]" />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <VCard>
          <VTabs
            v-model="tab"
            align-tabs="center"
            color="primary"
          >
            <VTab :value="departments.international.id">
              {{ departments.international.name }}向け
            </VTab>
            <VTab :value="departments.cultural.id">
              {{ departments.cultural.name }}向け
            </VTab>
            <VTab :value="departments.psychology.id">
              {{ departments.psychology.name }}向け
            </VTab>
          </VTabs>

          <VTabsWindow v-model="tab">
            <VTabsWindowItem
              v-for="department in departments"
              :key="department.id"
              :value="department.id"
            >
              <template
                v-for="(section, index) in parseMarkdownSections(
                  contentsMap[mdIds[department.id]],
                )"
                :key="index"
              >
                <VCardText>
                  <span class="text-h6">{{ section.title }}</span>
                </VCardText>
                <VExpansionPanels>
                  <VExpansionPanel
                    v-for="(childSection, childSectionIndex) in parseMarkdownSections(section.content, '###')"
                    :key="`${index}-${childSectionIndex}`"
                    variant="accordion"
                    elevation="0"
                    :title="childSection.title"
                  >
                    <VExpansionPanelText>
                      <PartsHtmlTextArea :markdown="childSection.content" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                </VExpansionPanels>
              </template>
            </VTabsWindowItem>
          </VTabsWindow>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
