<script setup lang="ts">
import { items } from '@/contents/information-search'

const title = '情報検索'
useSeoMeta({
  title,
  description: '情報検索のためのフローチャートをご紹介しています。',
})

const { active, next, prev } = useVisibleSevral()
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
            v-for="(item, index) in items"
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
