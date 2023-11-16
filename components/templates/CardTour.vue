<script setup lang="ts">
import { useLanguage } from "@/composable/language/useLanguage";

type Content = {
  subtitle: String;
  text?: String;
  list?: string[];
};
type Item = {
  title: string;
  text: string;
  contents: Content[];
};
const props = defineProps<Item>();

const { langState } = useLanguage();
const { visible, inversion } = useVisible();
</script>

<template>
  <v-card>
    <v-card-title> {{ title }} </v-card-title>
    <v-card-text>
      <div v-html="props.text"></div>
    </v-card-text>
    <v-card-actions @click="inversion">
      <v-btn color="primary" variant="text">{{
        langState === "en" ? "Show more" : "詳細を見る"
      }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn :icon="useChevronIcon(visible)"> </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="visible">
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
          <elements-btn-my-library></elements-btn-my-library>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>
