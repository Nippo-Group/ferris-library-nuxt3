<script setup lang="ts">
import { mdiOpenInNew, mdiMagnify, mdiSend } from '@mdi/js'
import { useLangSwitch } from '@/composable/language/useLangSwitch'

const tab = ref(null)
const qSearchWord = ref('')

const itemsEng = {
  title: 'OPAC Detailed search',
  sp: 'Smart Phone',
  spOPAC: 'Smart Phone OPAC',
  search: 'Search',
  quickSearch: 'Quick search',
  detailedSearch: 'Detailed search',
  placeholder: 'Please enter a keyword',
}
const items = {
  title: 'OPAC 蔵書検索',
  sp: 'スマートフォン',
  spOPAC: 'スマートフォン版OPAC',
  search: '検索',
  quickSearch: 'クイックサーチ',
  detailedSearch: '詳細検索',
  placeholder: 'キーワードを入力してください',
}
const { contents } = useLangSwitch(items, itemsEng)

const rules = ref({
  required: (value: string) => !!value || 'Field is required',
})
</script>

<template>
  <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
    <icons-library-shelves start /> {{ contents.title }}
  </div>
  <v-card>
    <v-tabs
      v-model="tab"
      color="primary"
    >
      <v-tab>
        {{ contents.search }}
      </v-tab>
      <v-tab> {{ contents.sp }}</v-tab>
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
              <input
                type="hidden"
                name="module"
                value="search"
              >
              <input
                type="hidden"
                name="path"
                value="switch"
              >
              <input
                type="hidden"
                name="method"
                value="search"
              >
              <input
                type="hidden"
                name="quick"
                value="true"
              >
              <input
                type="hidden"
                name="prefix"
                value="/search"
              >
              <input
                type="hidden"
                name="page"
                value="/search"
              >
              <v-text-field
                id="QSearch"
                v-model="qSearchWord"
                :rules="[rules.required]"
                name="word"
                :label="contents.quickSearch"
                :placeholder="contents.placeholder"
                type="text"
                variant="outlined"
                density="compact"
                :prepend-inner-icon="mdiMagnify"
                :append-inner-icon="mdiOpenInNew"
                clearable
                maxlength="128"
              >
                <template #append>
                  <v-btn
                    type="submit"
                    :icon="mdiSend"
                    variant="text"
                  />
                </template>
              </v-text-field>
            </v-form>
            <v-btn-toggle
              divided
              density="compact"
            >
              <elements-btn-open-in-new
                :link="contents.detailedSearch"
                url="https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init"
              />
              <elements-btn-my-library />
            </v-btn-toggle>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item>
        <v-card
          flat
          class="d-md-flex justify-start"
        >
          <div>
            <v-card-text>
              <elements-btn-open-in-new
                :link="contents.spOPAC"
                url="http://osirabe.net/opac.ferris/"
              />
            </v-card-text>
          </div>
          <div>
            <img src="@/assets/images/opac/qr.gif">
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
