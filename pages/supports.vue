<script setup>
const title = ref("障がいのある方への支援");
useSeoMeta({ title: title.value });

const panelOpen = ref([0, 1]);
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>図書館では、障がいのある方に以下の支援を行っています。</p>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-expansion-panels v-model="panelOpen" multiple>
          <v-expansion-panel title="図書館スタッフによる支援">
            <v-expansion-panel-text>
              <div class="text-h6 pt-3">代行検索</div>
              <p>
                OPACやデータベースの利用が困難な場合、図書館スタッフが代わりに検索します。
              </p>
              <div class="text-h6 pt-3">書架利用援助</div>
              <p>
                高い書棚や、書棚と書棚の間の通路が狭いなど、本の取り出しが困難な場合、図書館スタッフが代行します。
              </p>
              <div class="text-h6 pt-3">館内移動援助</div>
              <p>
                館内はバリアフリー対応ですが、状況に応じ図書館スタッフが介助します。
              </p>
              <div class="text-h6 pt-3">入退館援助</div>
              <p>出入口の通行が困難な場合、図書館スタッフが介助します。</p>
              <div class="text-h6 pt-3">機器利用援助</div>
              <p>
                コピー機、プリンター、PC、AV機器など、館内機器の利用が困難な場合は、図書館スタッフが介助します。
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title="施設設備">
            <v-expansion-panel-text>
              <div class="text-h6 pt-3">拡大書架ガイド</div>
              <p>全ての書棚に拡大文字の書架ガイドを貼付しています。</p>
              <div class="text-h6 pt-3">拡大読書器</div>
              <p>3階の院生・教員閲覧室に拡大読書器を設置しています。</p>
              <div class="text-h6 pt-3">音声読書器</div>
              <p>
                3階の検索コーナーに音声読書器（『よめーる』）を設置しています。
              </p>
              <div class="text-h6 pt-3">多目的トイレ</div>
              <p>2階、3階、4階に多目的トイレがあります。</p>
              <div class="text-h6 pt-3">プリンター</div>
              <p>
                1階のオンデマンドプリンターには、タッチパネルを搭載、低位置に設置しています。
              </p>
              <div class="text-h6 pt-3">点字</div>
              <p>
                エレベーター内のボタンに、点字を貼付しています。階段の手すりに、フロアを示す点字を貼付しています。
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-alert density="compact" type="info">
          上記以外にもサポートが必要でしたら、図書館スタッフまでお申し出ください。できる限りご要望にお応えします。
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
