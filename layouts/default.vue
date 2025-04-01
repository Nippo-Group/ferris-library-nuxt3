<script setup lang="ts">
import { useLanguage } from '@/composables/common/useLanguage'

useLanguage().setLang('ja')

const siteTitle = ref('フェリス女学院大学附属図書館')
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - ${siteTitle.value}` : siteTitle.value
  },
  htmlAttrs: {
    lang: 'ja',
  },
})
</script>

<template>
  <SectionsLayoutWrapper>
    <slot />
  </SectionsLayoutWrapper>
</template>
