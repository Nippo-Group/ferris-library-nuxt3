<script setup lang="ts">
import { useLanguage } from "@/composable/language/useLanguage";
useLanguage().setLang("ja");

const siteTitle = ref("フェリス女学院大学附属図書館");
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
