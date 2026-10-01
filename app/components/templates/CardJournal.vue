<script setup lang="ts">
import type { JournalItem } from '@/types/journal'
// import { iconMap } from '@/utils'

defineProps<JournalItem>()
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
              <PartsBtnOpenInNew
                v-for="(link, k) in links"
                :key="'link' + k"
                :link="link.name"
                :url="link.path"
                class="ma-0"
              />
              <!-- <template v-if="documents">
                <VBtn
                  v-for="(file, n) in documents"
                  :key="'file' + n"
                  variant="elevated"
                  class="ma-0"
                  @click="show(file.name, file.url, file.type)"
                >
                  {{ file.name }}

                  <VIcon
                    v-if="file.type == 'PDF'"
                    :icon="iconMap['pdf']"
                    dark
                    end
                  />
                  <VIcon
                    v-else-if="file.type == 'Excel'"
                    :icon="iconMap['excel']"
                    dark
                    end
                  />
                  <VIcon
                    v-else
                    :icon="iconMap['doc']"
                    dark
                    end
                  />
                </VBtn>
              </template> -->
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
