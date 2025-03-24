<script setup lang="ts">
import { useLanguage } from '@/composables/language/useLanguage'

type Content = {
  subtitle: string
  text?: string
  list?: string[]
}
type Item = {
  title: string
  text: string
  contents: Content[]
}
const props = defineProps<Item>()

const { langState } = useLanguage()
const { visible, inversion } = useVisible()
</script>

<template>
  <VCard>
    <VCardTitle> {{ title }} </VCardTitle>
    <VCardText>
      <elements-html-text-area :data="text" />
    </VCardText>
    <VCardActions @click="inversion">
      <VBtn
        color="primary"
        variant="text"
      >
        {{
          langState === "en" ? "Show more" : "詳細を見る"
        }}
      </VBtn>
      <VSpacer />
      <VBtn :icon="useChevronIcon(visible)" />
    </VCardActions>
    <v-expand-transition>
      <div v-show="visible">
        <VDivider />
        <VCardText>
          <template
            v-for="(content, index) in props.contents"
            :key="'content-' + index"
          >
            <div
              v-show="content.subtitle"
              class="text-h6 mt-4"
            >
              {{ content.subtitle }}
            </div>
            <p v-show="content.text">
              {{ content.text }}
            </p>
            <ul
              v-show="content.list"
              class="list"
            >
              <li
                v-for="(listItem, k) in content.list"
                :key="'listItem' + k"
              >
                {{ listItem }}
              </li>
            </ul>
          </template>
        </VCardText>
        <VCardActions>
          <elements-btn-my-library />
        </VCardActions>
      </div>
    </v-expand-transition>
  </VCard>
</template>

<style scoped>
.list {
  padding-left: 1.5em;
}
</style>
