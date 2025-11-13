<script setup lang="ts">
import type { Img } from '@/components/templates/DialogImg.vue'
import { iconMap } from '@/utils'

export type Link = {
  name: string
  url: string
}

export type Item = {
  name: string
  type: 'データベース' | '雑誌' | '図書' | '電子ブック'
  logout: boolean
  content: string
  access: string
  links?: Link[]
  heading?: boolean
  imgs?: Img[]
}
export type ItemHeading = {
  name: string
  heading: true
  content: string
}

const props = defineProps<{
  items: (Item | ItemHeading)[]
}>()
</script>

<template>
  <VRow dense>
    <VCol
      v-for="(item, i) in props.items"
      :key="'item' + i"
      cols="12"
    >
      <VCard
        v-if="item.heading"
        color="grey-lighten-4"
        flat
      >
        <VCardText>
          <span class="font-weight-bold">{{ item.name }}</span><span class="ml-4">{{ item.content }}</span>
        </VCardText>
      </VCard>
      <VCard v-else>
        <VCardTitle>
          {{ item.name }}
        </VCardTitle>
        <VCardSubtitle>
          {{ item.type }}
        </VCardSubtitle>
        <VCardText>
          {{ item.content }}
          <TemplatesDialogImgGroup
            v-if="item.imgs"
            :imgs="item.imgs"
          />
          <p
            v-if="item.logout"
            class="mb-0"
          >
            <span class="text-orange ml-2">
              <VIcon :icon="iconMap['alert']" />
              利用後は必ずログアウトしてください
            </span>
          </p>
        </VCardText>
        <div class="d-flex">
          <VCardText>
            <VChip
              variant="tonal"
              class="mr-2"
            >
              アクセス
            </VChip>{{ item.access }}
          </VCardText>
          <VCardActions v-if="item.links">
            <PartsBtnOpenInNew
              v-for="(link, j) in item.links"
              :key="'link' + j"
              :link="link.name"
              :url="link.url"
            />
          </VCardActions>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
