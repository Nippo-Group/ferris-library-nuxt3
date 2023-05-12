<script setup lang="ts">
import { useLanguageStore } from "@/stores/language";
useLanguageStore().setLang("ja");
</script>

<template>
  <layout-wrapper>
    <slot />
  </layout-wrapper>
</template>
