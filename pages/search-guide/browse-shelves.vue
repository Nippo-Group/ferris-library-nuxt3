<script setup lang="ts">
import { contentsMap, browseInternational, type Shelves } from '~/contents/search-guide'
import { departments, type Department } from '~/types'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const id = 'browse-shelves'

const tab = ref<Department>(departments.international.id)

const shelves: Record<Department, Shelves> = {
  international: browseInternational,
  cultural: [],
  psychology: [],
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
                  :key="shelf.shelf"
                  :value="shelf.shelf"
                >
                  <template #activator="{ props }">
                    <VListItem
                      v-bind="props"
                      :title="shelf.shelf"
                      :prepend-icon="iconMap['shelves']"
                    />
                  </template>
                  <VListGroup
                    v-for="category in shelf.categories"
                    :key="category.category"
                    :value="`${shelf.shelf}-${category.category}`"
                  >
                    <template #activator="{ props }">
                      <VListItem
                        v-bind="props"
                        :title="category.category"
                        :prepend-icon="iconMap['shelf']"
                      />
                    </template>
                    <VListItem
                      v-for="item in category.items"
                      :key="item.id"
                      :title="`${item.id} ${item.title}`"
                    />
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
