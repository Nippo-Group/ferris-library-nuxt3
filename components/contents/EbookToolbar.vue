<script setup lang="ts">
import { useEbookList } from '@/composables/ebooks/useEbookList'
import type { Category, Language } from '@/types/ebook'

const { keyword, language, categories, available } = useEbookList()
const { visible, show, dismiss } = useVisible()

const OptionsLanguage = ref<Language[]>(['日本語', '外国語'])
const OptionsCategory = ref<Category[]>([
  '電子ブック',
  '総合',
  '参考・辞書事典類',
  '新聞記事',
  '英米文学',
  '日本文学',
  '言語学',
  '社会科学',
  '音楽',
  '判例・法令・議会資料',
])
</script>

<template>
  <v-toolbar
    dense
    flat
  >
    <v-text-field
      v-model="keyword"
      label="キーワード検索"
      hide-details
      clearable
      class="mr-2"
    />
    <v-spacer />
    <v-btn
      variant="outlined"
      @click="show"
    >
      <icons-search-defult />
      絞り込み検索
    </v-btn>
  </v-toolbar>
  <p>検索条件：{{ [language, keyword].concat(categories).join(" ") }}</p>

  <v-dialog
    v-model="visible"
    transition="dialog-bottom-transition"
    max-width="800"
  >
    <v-card>
      <v-card-text>
        <v-row dense>
          <!--
          <v-col cols="12">
            <v-radio-group v-model="available" inline>
              <v-radio label="学内からの利用" value="学内"></v-radio>
              <v-radio label="学外からの利用" value="学外"></v-radio>
            </v-radio-group>
          </v-col>
          -->
          <v-col
            cols="12"
            sm="3"
          >
            <v-select
              v-model.lazy="language"
              :items="OptionsLanguage"
              label="言語"
              variant="solo"
              clearable
            />
          </v-col>
          <v-col
            cols="12"
            sm="9"
          >
            <v-select
              v-model.lazy="categories"
              :items="OptionsCategory"
              label="カテゴリー"
              chips
              multiple
              variant="solo"
              clearable
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-if="available === '学内'">
        <p>検索やプリントアウトは無料です。</p>
        <p>
          OPAC端末から利用する場合、一部ダウンロードができない場合があります。
        </p>
      </v-card-text>
      <v-card-text v-else>
        <p>
          通常、本学のデータベースは学外からのアクセスはできませんが、オンライン授業に対応するため一部のデータベースはフェリス生限定で学外からもアクセス可能としました。
        </p>
        <p>
          期間限定で学外からアクセスできるデータベースと期間の制限なく、いつでも学外からアクセスできるデータベースがあります。
        </p>
        <p>
          期間限定のデータベースはフェリス生限定のサービスです。ID、パスワードは各サービスごとに確認してください。
        </p>
        <v-card
          height="200"
          class="overflow-auto"
          variant="outlined"
        >
          <v-card-text>
            <p>2021.8.1追記</p>
            <ul>
              <li>
                FerrisPassport（【図書館】フェリス生限定「聞蔵Ⅱビジュアル」が学外から利用できます！[期間延長]
                8/1発信）
              </li>
            </ul>
            <v-divider />
            <p>2021.4.20追記</p>
            <ul>
              <li>
                FerrisPassport（【図書館】フェリス生限定「ナクソス・ミュージック・ライブラリー」が学外から利用できます！4/12発信）
              </li>
              <li>
                FerrisPassport（【図書館】フェリス生限定「聞蔵Ⅱビジュアル」が学外から利用できます！4/16発信）
              </li>
              <li>
                FerrisPassport（【図書館】フェリス生限定「日経テレコン」が学外から利用できます！4/14発信）
              </li>
              <li>
                FerrisPassport（【図書館】フェリス生限定「日本文学Web図書館」が学外から利用できます！4/14発信）
              </li>
            </ul>
            <v-divider />
            <p>2021.4.1</p>
            <ul>
              <li>
                FerrisPassport（【図書館】フェリス生限定「ジャパンナレッジ
                リブ」が学外から利用できます！4/1発信）
              </li>
              <li>
                FerrisPassport（【図書館】フェリス生限定「Web
                OYA-bunko」が学外から利用できます！4/1発信）
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          variant="text"
          @click="dismiss"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
