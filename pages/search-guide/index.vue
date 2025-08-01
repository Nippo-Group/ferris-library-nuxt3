<script setup lang="ts">
import { items, type Contents } from '~/contents/search-guide'

const title = '文献探索ガイド・リンク集'
useSeoMeta({
  title,
})

const router = useRouter()
const action = (id: Contents) => {
  router.push(`/search-guide/${id}`)
}
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <VCard>
          <TemplatesListSearchGuide
            :items
            :action="action"
          />
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
