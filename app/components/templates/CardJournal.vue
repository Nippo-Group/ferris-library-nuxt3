<script setup lang="ts">
import type { JournalItem } from '@/types/journal'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

defineProps<JournalItem>()

const { show } = useConfirmDL()
</script>

<template>
  <VCard>
    <VContainer>
      <VRow dense>
        <VCol
          cols="12"
          sm="4"
        >
          <VCardTitle class="wrap-text">
            {{ title }}
          </VCardTitle>
        </VCol>
        <VCol
          cols="12"
          sm="8"
        >
          <VCardText>
            <PartsHtmlTextArea :markdown="body" />
          </VCardText>

          <VDivider />

          <VCardActions
            v-if="links"
            class="overflow-y-auto"
          >
            <ContainersStack>
              <template
                v-for="link in links"
                :key="link.path"
              >
                <PartsBtnOpenInNew
                  v-if="link.type === 'external'"
                  :link="link.name"
                  :url="link.path"
                  class="ma-0"
                />

                <PartsBtnInside
                  v-else-if="link.type === 'internal'"
                  :link="link.name"
                  :to="link.path"
                  class="ma-0"
                />

                <VBtn
                  v-else
                  variant="elevated"
                  class="ma-0"
                  @click="show(link.name, link.path, link.type)"
                >
                  {{ link.name }}

                  <VIcon
                    :icon="iconMap[link.type]"
                    dark
                    end
                  />
                </VBtn>
              </template>
            </ContainersStack>
          </VCardActions>
        </VCol>
      </VRow>
    </VContainer>
  </VCard>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
