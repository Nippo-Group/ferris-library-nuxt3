<script setup lang="ts">
import type { Link, Document } from '@/types/ebook'

const { show } = useConfirmDL()

defineProps<{
  name: string
  languages: string[]
  categories: string[]
  available: string[]
  body: string
  access?: string
  logout?: boolean
  attention?: string
  links?: Link[]
  documents?: Document[]
}>()
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
            {{ name }}
          </VCardTitle>
          <VCardText>
            <VChip
              v-for="(language, m) in languages"
              :key="'lang' + m"
              color="secondary"
              class="mb-1 mr-1"
            >
              {{ language }}
            </VChip>
            <VChip
              v-for="(cat, j) in categories"
              :key="'cat' + j"
              color="blue-lighten-1"
              class="mb-1 mr-1"
            >
              {{ cat }}
            </VChip>
          </VCardText>
        </VCol>
        <VCol
          cols="12"
          sm="8"
        >
          <VCardText>
            <elements-html-text-area :data="body" />
          </VCardText>
          <VDivider />
          <VCardText v-if="access || attention">
            <p
              v-if="access"
              class="my-0"
            >
              同時アクセス数：{{ access }}
              <span
                v-if="logout"
                class="text-orange ml-2"
              >
                <icons-alert-circle siza="small" />
                利用後は必ずログアウトしてください
              </span>
            </p>
            <span v-if="attention">※{{ attention }}</span>
          </VCardText>
          <VCardActions
            v-if="links || documents"
            class="overflow-y-auto"
          >
            <ContainersStack>
              <elements-btn-open-in-new
                v-for="(link, k) in links"
                :key="'link' + k"
                :link="link.name"
                :url="link.url"
                class="ma-0"
              />
              <template v-if="documents">
                <VBtn
                  v-for="(file, n) in documents"
                  :key="'file' + n"
                  variant="elevated"
                  class="ma-0"
                  @click="show(file.name, file.url, file.type)"
                >
                  {{ file.name }}
                  <icons-file-pdf
                    v-if="file.type == 'PDF'"
                    dark
                    end
                  />
                  <icons-file-excel
                    v-else-if="file.type == 'Excel'"
                    dark
                    end
                  />
                  <icons-file-document
                    v-else
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
