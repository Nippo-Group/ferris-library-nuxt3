<script setup lang="ts">
import { itemsEng } from '@/contents/reference'
import { iconMap } from '@/utils'

const title = 'Reference Service'
useSeoMeta({
  title,
  description: 'Information about services to support your research.',
})
definePageMeta({ layout: 'english' })
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
        <template
          v-for="(item, i) in itemsEng"
          :key="'item-' + i"
        >
          <PartsTitleLv2 v-if="item.title">
            {{
              item.title
            }}
          </PartsTitleLv2>
          <VRow>
            <VCol
              v-for="(content, j) in item.contents"
              :key="'content' + j"
              cols="12"
              lg="6"
            >
              <VCard
                height="100%"
                :href="content.link ? content.link : undefined"
                :target="content.link ? '_blank' : '_self'"
                :link="content.link ? true : false"
              >
                <VCardTitle>
                  {{ content.subtitle }}
                  <VIcon
                    v-if="content.link"
                    :icon="iconMap['openInNew']"
                  />
                </VCardTitle>
                <VCardText>
                  {{ content.text }}
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </template>
      </VCol>
    </VRow>
  </VContainer>
</template>
