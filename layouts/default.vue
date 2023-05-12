<script setup lang="ts">
import { useLanguageStore } from "@/stores/language";
useLanguageStore().setLang("ja");

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
