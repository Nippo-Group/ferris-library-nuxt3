<script setup lang="ts">
import { useLanguage } from '@/composables/common/'
import { globalNavigation } from '@/contents/globalNavigation'

useLanguage().setLang('ja')

const siteTitle = 'フェリス女学院大学附属図書館'
const copyright = 'Ferris University Library'

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
  <VApp id="inspire">
    <SectionsNavigationDrawer :menus="globalNavigation" />
    <SectionsHeader>
      <img
        src="~/assets/images/layouts/site-logo.png"
        class="ferris-logo"
        width="200"
        height="65"
        :alt="siteTitle"
      >
    </SectionsHeader>
    <SectionsMain>
      <slot />
    </SectionsMain>
    <SectionsFooter :copyright="copyright" />
    <SectionsToTop />
    <TemplatesConfirmDownload />
  </VApp>
</template>
