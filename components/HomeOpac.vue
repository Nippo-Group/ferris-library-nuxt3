<script setup>
import { useLanguageStore } from "@/stores/language";

const tab = ref(null);
const qSearchWord = ref("");

const langStore = useLanguageStore();
const language = ref(langStore.language);
const submitBtn = computed(() => {
  const inputLength = qSearchWord.value !== null ? qSearchWord.value.length : 0;
  return inputLength <= 0 || inputLength > 20;
});
</script>

<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab>
        {{ language === "en" ? "Search" : "検索" }}
      </v-tab>
      <v-tab> {{ language === "en" ? "Smartphone" : "スマートフォン" }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item>
        <v-card flat>
          <v-card-text>
            <form
              name="QSearch"
              action="https://www2.library.ferris.ac.jp/gate"
              method="POST"
              target="_blank"
            >
              <input type="hidden" name="module" value="search" />
              <input type="hidden" name="path" value="switch" />
              <input type="hidden" name="method" value="search" />
              <input type="hidden" name="quick" value="true" />
              <input type="hidden" name="prefix" value="/search" />
              <input type="hidden" name="page" value="/search" />
              <v-text-field
                id="QSearch"
                v-model="qSearchWord"
                name="word"
                :label="language === 'en' ? 'Quick search' : 'クイックサーチ'"
                :placeholder="
                  language === 'en'
                    ? 'Please enter a keyword'
                    : 'キーワードを入力してください'
                "
                outlined
                dense
                append-icon="mdi-open-in-new"
                prepend-inner-icon="mdi-magnify"
                clearable
              >
                <template #append-outer>
                  <v-btn
                    type="submit"
                    class="submit-btn"
                    small
                    fab
                    icon
                    color="primary"
                    :disabled="submitBtn"
                    ><v-icon>mdi-send</v-icon></v-btn
                  >
                </template>
              </v-text-field>
            </form>
            <btn-open-in-new
              :link="language === 'en' ? 'Detailed search' : '詳細検索'"
              url="https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init"
            ></btn-open-in-new>
            <btn-my-library></btn-my-library>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card flat class="d-md-flex justify-start">
          <div>
            <v-card-text>
              <btn-open-in-new
                :link="
                  language === 'en' ? 'Smartphone OPAC' : 'スマートフォン版OPAC'
                "
                url="http://osirabe.net/opac.ferris/"
              ></btn-open-in-new>
            </v-card-text>
          </div>
          <div>
            <img src="@/assets/images/opac/qr.gif" />
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>
.submit-btn {
  margin-top: -8px;
}
</style>
