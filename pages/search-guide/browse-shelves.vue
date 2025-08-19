<script setup lang="ts">
import { contentsMap, browseInternational, browseCultural, browsePsychology } from '~/contents/search-guide'
import { departments, type Department, type Shelves } from '~/types'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const id = 'browse-shelves'

const tab = ref<Department>(departments.international.id)

const shelves: Record<Department, Shelves> = {
  international: browseInternational,
  cultural: browseCultural,
  psychology: browsePsychology,
}
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <TemplatesToolbarSearchGuide />
      </VCol>
      <VCol cols="12">
        <VCard>
          <VCardText
            class="text-area"
          >
            <PartsHtmlTextArea
              :markdown="
                contentsMap[id]"
            />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <VCard>
          <VTabs
            v-model="tab"
            align-tabs="center"
            color="primary"
          >
            <VTab :value="departments.international.id">
              {{ departments.international.name }}向け
            </VTab>
            <VTab :value="departments.cultural.id">
              {{ departments.cultural.name }}向け
            </VTab>
            <VTab :value="departments.psychology.id">
              {{ departments.psychology.name }}向け
            </VTab>
          </VTabs>

          <VTabsWindow v-model="tab">
            <VTabsWindowItem
              v-for="department in departments"
              :key="department.id"
              :value="department.id"
            >
              <VList>
                <VListGroup
                  v-for="shelf in shelves[department.id]"
                  :key="shelf.name"
                  :value="shelf.name"
                >
                  <template #activator="{ props }">
                    <VListItem
                      v-bind="props"
                      :title="shelf.name"
                      :prepend-icon="iconMap['shelves']"
                    />
                  </template>
                  <VListGroup
                    v-for="category in shelf.categories"
                    :key="category.name"
                    :value="`${shelf.name}-${category.name}`"
                  >
                    <template #activator="{ props }">
                      <VListItem
                        v-bind="props"
                        :title="category.name"
                        :prepend-icon="iconMap['shelf']"
                      />
                    </template>
                    <VListItem
                      v-for="genre in category.genres"
                      :key="genre.sign"
                    >
                      <ContainersStack
                        items="center"
                        :gap="2"
                      >
                        <VChip
                          variant="tonal"
                        >
                          {{ genre.sign }}
                        </VChip>
                        {{ genre.name }}
                      </ContainersStack>
                    </VListItem>
                  </VListGroup>
                </VListGroup>
              </VList>
            </VTabsWindowItem>
          </VTabsWindow>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
