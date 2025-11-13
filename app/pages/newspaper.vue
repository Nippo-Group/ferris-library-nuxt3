<script setup lang="ts">
import { updateDate, items } from '@/contents/newspaper'
import { useSelected } from '@/composables/common/'

const title = '緑園本館所蔵新聞リスト'
useSeoMeta({
  title,
  description: '所蔵されている新聞の情報をご案内しています。',
})

const { selected } = useSelected()
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
        <p class="update-date">
          {{ updateDate }}
        </p>
        <VTabs v-model="selected">
          <VTab
            v-for="(item, index) in items"
            :key="'tab' + index"
          >
            {{ item.category }}
          </VTab>
        </VTabs>
        <VWindow v-model="selected">
          <VWindowItem
            v-for="(item, index2) in items"
            :key="'item' + index2"
          >
            <VCard>
              <VCardTitle>
                {{ item.category }}
              </VCardTitle>
              <VCardText>
                <templates-list-newspaper
                  :items="item.newspapers"
                />
              </VCardText>
            </VCard>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.update-date {
  text-align: right;
  color: grey;
}
</style>
