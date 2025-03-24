<script setup lang="ts">
import type { Item, ItemHeading } from '@/types/carrier'

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
      xl="8"
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
              <icons-alert-circle />
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
            <elements-btn-open-in-new
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
