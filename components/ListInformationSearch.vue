<script setup>
import { useLanguageStore } from "@/stores/language";

const props = defineProps({
  items: {
    type: Array,
    default: () => {},
  },
});
const active = ref(1);
const langStore = useLanguageStore();
const language = ref(langStore.language);
</script>

<template>
  <v-stepper v-model="active" vertical non-linear>
    <template v-for="(item, i) in props.items" :key="'item-' + i">
      <v-stepper-step editable :complete="active > item.step" :step="item.step">
        {{ item.subTitle }}
      </v-stepper-step>
      <v-stepper-content :step="item.step">
        <ul class="link-list">
          <li v-for="(listItem, j) in item.list" :key="'listItem' + i + j">
            <v-btn
              v-if="listItem.name"
              class="text-none"
              :to="listItem.push"
              :href="listItem.href"
              :target="listItem.href ? '_blank' : '_self'"
              outlined
            >
              {{ listItem.name }}
              <v-icon v-show="listItem.icon" right> {{ listItem.icon }}</v-icon>
            </v-btn>
            <p class="grey--text">{{ listItem.comment }}</p>
          </li>
        </ul>
        <div class="text-right">
          <v-btn color="primary" @click="active = item.step + 1">
            {{ language === "en" ? "Next" : "つぎへ" }}
          </v-btn>
        </div>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>

<style scoped>
.link-list {
  list-style: none;
  padding-left: 0;
}
</style>
