<script setup lang="ts">
import { useLanguage } from "@/composable/language/useLanguage";
useLanguage().setLang("en");

const siteTitle = ref("Ferris University Library");
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - ${siteTitle.value}` : siteTitle.value;
  },
});
</script>

<template>
  <layout-wrapper>
    <slot />
  </layout-wrapper>
</template>
