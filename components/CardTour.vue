<script setup>
import { useLanguageStore } from "@/stores/language";

const props = defineProps({
  title: {
    type: String,
    default: "タイトル",
  },
  text: {
    type: String,
    default: "文章",
  },
  contents: {
    type: Array,
    default: () => {},
  },
});

const show = ref(false);
const langStore = useLanguageStore();
const language = ref(langStore.language);
</script>

<template>
  <v-card>
    <v-card-title> {{ props.title }} </v-card-title>
    <v-card-text>
      <div v-html="props.text"></div>
    </v-card-text>
    <v-card-actions @click="show = !show">
      <v-btn color="primary" text>{{
        language === "en" ? "Show more" : "詳細を見る"
      }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <template
            v-for="(content, index) in props.contents"
            :key="'content-' + index"
          >
            <div v-show="content.subtitle" class="text-h6 mt-4">
              {{ content.subtitle }}
            </div>
            <p v-show="content.text">{{ content.text }}</p>
            <ul v-show="content.list">
              <li v-for="(listItem, k) in content.list" :key="'listItem' + k">
                {{ listItem }}
              </li>
            </ul>
          </template>
        </v-card-text>
        <v-card-actions>
          <btn-my-library></btn-my-library>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>
