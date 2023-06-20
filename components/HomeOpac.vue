<script setup>
import { mdiOpenInNew, mdiMagnify, mdiSend } from "@mdi/js";
import { useLanguageStore } from "@/stores/language";

const tab = ref(null);
const qSearchWord = ref("");

const langStore = useLanguageStore();
const language = ref(langStore.language);

const rules = ref({
  required: (value) => !!value || "Field is required",
});
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" color="primary">
      <v-tab>
        {{ language === "en" ? "Search" : "検索" }}
      </v-tab>
      <v-tab> {{ language === "en" ? "Smartphone" : "スマートフォン" }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item>
        <v-card flat>
          <v-card-text>
            <v-form
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
                :rules="[rules.required]"
                name="word"
                :label="language === 'en' ? 'Quick search' : 'クイックサーチ'"
                :placeholder="
                  language === 'en'
                    ? 'Please enter a keyword'
                    : 'キーワードを入力してください'
                "
                type="text"
                variant="outlined"
                density="compact"
                :prepend-inner-icon="mdiMagnify"
                :append-inner-icon="mdiOpenInNew"
                clearable
                maxlength="128"
              >
                <template #append>
                  <v-btn type="submit" :icon="mdiSend" variant="text"></v-btn>
                </template>
              </v-text-field>
            </v-form>
            <v-btn-toggle divided density="compact">
              <btn-open-in-new
                :link="language === 'en' ? 'Detailed search' : '詳細検索'"
                url="https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init"
              ></btn-open-in-new>
              <btn-my-library></btn-my-library>
            </v-btn-toggle>
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
