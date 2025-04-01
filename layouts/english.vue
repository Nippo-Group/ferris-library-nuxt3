<script setup lang="ts">
import { useLanguage } from '@/composables/language/useLanguage'

useLanguage().setLang('en')

const siteTitle = ref('Ferris University Library')
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - ${siteTitle.value}` : siteTitle.value
  },
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <SectionsLayoutWrapper>
    <slot />
  </SectionsLayoutWrapper>
</template>
