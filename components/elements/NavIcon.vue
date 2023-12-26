<script setup lang="ts">
import IconsNavHome from "@/components/icons/NavHome.vue";
import IconsNavLibrary from "@/components/icons/NavLibrary.vue";
import IconsNavInformation from "@/components/icons/NavInformation.vue";
import IconsNavSearch from "@/components/icons/NavSearch.vue";
import IconsNewspaperVariant from "@/components/icons/NewspaperVariant.vue";
import IconsBookOpen from "@/components/icons/BookOpen.vue";
import IconsNavConnection from "@/components/icons/NavConnection.vue";
import IconsNavTranslate from "@/components/icons/NavTranslate.vue";

const props = defineProps<{
  name: string;
}>();

const menusIcons = computed(() => {
  switch (props.name) {
    case "home":
      return IconsNavHome;
    case "facility":
      return IconsNavLibrary;
    case "service":
      return IconsNavInformation;
    case "retrieval":
      return IconsNavSearch;
    case "news":
      return IconsNewspaperVariant;
    case "topics":
      return IconsBookOpen;
    case "links":
      return IconsNavConnection;
    case "englishPage":
      return IconsNavTranslate;
    case "japanesePage":
      return IconsNavTranslate;
    default:
      return null;
  }
});
</script>

<template>
  <component :is="menusIcons"></component>
</template>
