<script setup lang="ts">
import { useLanguage } from '@/composables/common/'
import { globalNavigation, globalNavigationEng } from '@/contents/globalNavigation'

const { langState } = useLanguage()

const copyright = 'Ferris University Library'

const menus = computed(() => {
  switch (langState.value) {
    case 'en':
      return globalNavigationEng
    default:
      return globalNavigation
  }
})
</script>

<template>
  <VApp id="inspire">
    <SectionsNavigationDrawer :menus="menus" />
    <SectionsHeader>
      <img
        v-if="langState === 'en'"
        src="~/assets/images/layouts/site-logo-english.png"
        class="ferris-logo"
        width="120"
        height="34"
        alt="Ferris University Library"
      >
      <img
        v-if="langState === 'ja'"
        src="~/assets/images/layouts/site-logo.png"
        class="ferris-logo"
        width="200"
        height="65"
        alt="フェリス女学院大学附属図書館"
      >
    </SectionsHeader>
    <SectionsMain>
      <slot />
    </SectionsMain>
    <SectionsFooter :copyright="copyright" />
    <SectionsToTop />
    <templates-confirm-download />
  </VApp>
</template>
