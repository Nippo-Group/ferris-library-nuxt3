<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" xl="8">
        <v-toolbar dense flat>
          <v-toolbar-title>
            <v-chip v-if="available === 'onCampus'" color="primary">
              学内
            </v-chip>
            <v-chip v-else color="primary"> 学外 </v-chip>
            <span v-if="listfilter.length === 0">
              該当する項目はみつかりませんでした
            </span>
            <span v-else>{{ listfilter.length }}件の項目を表示しています</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-text-field
            v-model="filterKeyword"
            label="キーワード検索"
            hide-details
            clearable
            class="mr-2"
          ></v-text-field> -->
          <v-btn outlined @click="dialog = true">
            <v-icon>mdi-magnify</v-icon>
            検索
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <list-database :items="listfilter"></list-database>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="800"
    >
      <v-card>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-radio-group v-model="available" row>
                <v-radio label="学内からの利用" value="onCampus"></v-radio>
                <v-radio label="学外からの利用" value="offCampus"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                v-model.lazy="filterLanguage"
                :items="languages"
                label="言語"
                solo
                clearable
              ></v-select>
            </v-col>
            <v-col cols="12" sm="9">
              <v-select
                v-model.lazy="filterCategory"
                :items="categories"
                label="カテゴリー"
                chips
                multiple
                solo
                clearable
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text v-if="available === 'onCampus'">
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
          <v-card height="200" class="overflow-auto" outlined>
            <v-card-text>
              <p>2021.8.1追記</p>
              <ul>
                <li>
                  FerrisPassport（【図書館】フェリス生限定「聞蔵Ⅱビジュアル」が学外から利用できます！[期間延長]
                  8/1発信）
                </li>
              </ul>
              <v-divider></v-divider>
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
              <v-divider></v-divider>
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
          <v-btn text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import database from '@/assets/json/database.json'

export default {
  name: 'PageDatabase',
  data: () => ({
    title: 'データベース・電子ブック',
    database,
    items: database,
    dialog: false,
    available: 'onCampus',
    languages: ['日本語', '外国語'],
    categories: [
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
    ],
    filterLanguage: '',
    filterCategory: [],
  }),
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    listfilter() {
      const searchAvailable = this.available
      const searchLanguage = this.filterLanguage
      const searchCategory = this.filterCategory

      return this.items.filter(function (value) {
        let flagAvailable = true
        let flagLanguage = true
        let flagCategory = true
        if (
          (!value.available.includes('学外') &&
            searchAvailable === 'offCampus') ||
          (!value.available.includes('学内') && searchAvailable === 'onCampus')
        ) {
          flagAvailable = false
        }

        if (searchLanguage) {
          flagLanguage = value.languages.includes(searchLanguage)
        }
        if (searchCategory.length !== 0) {
          flagCategory = false
          for (let i = 0; i < searchCategory.length; i++) {
            if (value.categories.includes(searchCategory[i])) {
              flagCategory = true
            }
          }
        }
        const flag = flagAvailable && flagLanguage && flagCategory
        return flag
      })
    },
  },
}
</script>
