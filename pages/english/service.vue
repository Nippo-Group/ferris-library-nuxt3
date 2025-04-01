<script setup lang="ts">
import { serviceEng, periodHeadersEng, periodItemsEng, notesEng } from '@/contents/service'
import { useMultiSelected } from '@/composables/common/useMultiSelected'

const title = 'Lending Service'
useSeoMeta({
  title,
  description:
    'Information about the library\'s service list, number of books checked out, and loan periods.',
})
definePageMeta({ layout: 'english' })

const { selectedList } = useMultiSelected<number>([0, 1])
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
        <PartsTitleLv2>Service List</PartsTitleLv2>
        <VExpansionPanels
          v-model="selectedList"
          variant="accordion"
          multiple
        >
          <VExpansionPanel
            v-for="(item, i) in serviceEng"
            :key="i"
          >
            <VExpansionPanelTitle>{{ item.title }}</VExpansionPanelTitle>
            <VExpansionPanelText>{{ item.content }}</VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
      <VCol
        cols="12"
        class="text-center"
      >
        <PartsBtnMyLibrary />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsTitleLv2>Please Note</PartsTitleLv2>
        <VAlert
          v-for="(note, j) in notesEng"
          :key="'note' + j"
          density="compact"
          variant="outlined"
          :type="note.type"
          class="mt-4"
        >
          {{ note.text }}
        </VAlert>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsTitleLv2>Loan periods and checkouts limits</PartsTitleLv2>
        <VCard>
          <VCardText>
            <TemplatesResponsiveTable
              :items-array="periodItemsEng"
              :headers="periodHeadersEng"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
