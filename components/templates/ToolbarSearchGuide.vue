<script setup lang="ts">
import { items, type Contents } from '~/contents/search-guide'
import { iconMap } from '~/utils'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const router = useRouter()
const back = () => {
  router.push(`/search-guide`)
}

const action = (id: Contents) => {
  router.push(`/search-guide/${id}`)
}
</script>

<template>
  <VToolbar>
    <VToolbarTitle :text="title" />
    <template #append>
      <VFadeTransition>
        <VBtn
          :prepend-icon="iconMap['chevronLeft']"
          @click="back()"
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
            :action="action"
          />
        </VCard>
      </VMenu>
    </template>
  </VToolbar>
</template>
