<script setup lang="ts">
import { mdiOpenInNew, mdiMagnify, mdiSend } from '@mdi/js'
import { useLangSwitch } from '@/composables/language/useLangSwitch'

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
  <VCard>
    <VTabs
      v-model="tab"
      color="primary"
    >
      <VTab>
        {{ contents.search }}
      </VTab>
      <VTab> {{ contents.sp }}</VTab>
    </VTabs>
    <VWindow v-model="tab">
      <VWindowItem>
        <VCard flat>
          <VCardText>
            <VForm
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
              <VTextField
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
                  <VBtn
                    type="submit"
                    :icon="mdiSend"
                    variant="text"
                  />
                </template>
              </VTextField>
            </VForm>
            <VBtnToggle
              divided
              density="compact"
            >
              <PartsBtnOpenInNew
                :link="contents.detailedSearch"
                url="https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init"
              />
              <PartsBtnMyLibrary />
            </VBtnToggle>
          </VCardText>
        </VCard>
      </VWindowItem>
      <VWindowItem>
        <VCard
          flat
          class="d-md-flex justify-start"
        >
          <div>
            <VCardText>
              <PartsBtnOpenInNew
                :link="contents.spOPAC"
                url="http://osirabe.net/opac.ferris/"
              />
            </VCardText>
          </div>
          <div>
            <img src="@/assets/images/opac/qr.gif">
          </div>
        </VCard>
      </VWindowItem>
    </VWindow>
  </VCard>
</template>
