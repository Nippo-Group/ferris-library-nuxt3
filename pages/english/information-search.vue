<script setup lang="ts">
import { useStepper } from '@/composables/common/useStepper'
import { itemsEng } from '@/contents/information-search'

const title = 'Information search'
useSeoMeta({
  title,
  description: 'Information Retrieval Flowchart',
})
definePageMeta({ layout: 'english' })

const { active, next, prev } = useStepper(3)
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
        <VExpansionPanels v-model="active">
          <VExpansionPanel
            v-for="(item, index) in itemsEng"
            :key="'item-' + index"
          >
            <VExpansionPanelTitle>
              <div class="d-flex align-center ga-3">
                <VAvatar
                  size="36"
                  :color="active === item.step - 1 ? 'primary' : 'grey'"
                >
                  {{ item.step }}
                </VAvatar>
                <p class="text-h6">
                  {{ item.subTitle }}
                </p>
              </div>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <div class="d-flex flex-column ga-4">
                <templates-list-btn :list="item.list" />
                <VDivider />
                <div class="d-flex justify-space-between">
                  <VBtn
                    variant="text"
                    :disabled="active === 0"
                    @click="prev"
                  >
                    Prev
                  </VBtn>
                  <VBtn
                    variant="text"
                    :disabled="active === 3"
                    @click="next"
                  >
                    Next
                  </VBtn>
                </div>
              </div>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
    </VRow>
  </VContainer>
</template>
