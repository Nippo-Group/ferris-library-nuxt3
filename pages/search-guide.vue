<script setup lang="ts">
import { items, contentsMap, type Contents } from '~/contents/search-guide'
import { useSelected } from '~/composables/common/useSelected'
import { iconMap } from '~/utils'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const { selected, setSelected, removeSelected } = useSelected<Contents>()
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <VCard>
          <VToolbar>
            <VToolbarTitle :text="title" />
            <template #append>
              <VFadeTransition>
                <VBtn
                  v-show="selected"
                  :prepend-icon="iconMap['chevronLeft']"
                  @click="removeSelected"
                >
                  目次
                </VBtn>
              </VFadeTransition>
              <VMenu location="bottom">
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    :icon="iconMap['dots']"
                  />
                </template>
                <VCard max-height="80vh">
                  <TemplatesListSearchGuide
                    :items
                    :action="setSelected"
                  />
                </VCard>
              </VMenu>
            </template>
          </VToolbar>
          <VCardText
            v-if="selected"
            class="text-area"
          >
            <PartsHtmlTextArea
              :markdown="
                contentsMap[selected]"
            />
          </VCardText>

          <TemplatesListSearchGuide
            v-else
            :items
            :action="setSelected"
          />
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scope>
.text-area {
  max-height: 75vh;
  overflow-y: auto;
}
</style>
