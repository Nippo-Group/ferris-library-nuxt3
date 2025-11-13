<script setup lang="ts">
import { useLanguage } from '@/composables/common/'
import { globalNavigationEng } from '@/contents/globalNavigation'

useLanguage().setLang('en')

const siteTitle = 'Ferris University Library'

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - ${siteTitle}` : siteTitle
  },
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <VApp id="inspire">
    <SectionsNavigationDrawer :menus="globalNavigationEng" />
    <SectionsHeader>
      <img
        src="~/assets/images/layouts/site-logo-english.png"
        class="ferris-logo"
        width="120"
        height="34"
        :alt="siteTitle"
      >
    </SectionsHeader>
    <SectionsMain>
      <slot />
    </SectionsMain>
    <SectionsFooter :copyright="siteTitle" />
    <SectionsToTop />
    <TemplatesConfirmDownload />
  </VApp>
</template>
