<script setup lang="ts">
import type { File } from '@/types/file'
import { useMultiSelected } from '@/composables/common/useMultiSelected'

const title = '障がいのある方への支援'
useSeoMeta({
  title,
  description: '障がいのある方にへの支援内容をご案内いたします。',
})

const files: File[] = [
  {
    name: '国立国会図書館 視覚障害者等用データ送信サービス 利用案内',
    url: '/documents/supports/national-diet-library.docx',
    type: 'Word',
  },
]

const { selectedList } = useMultiSelected<number>([0, 1])
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        >
          <p>図書館では、障がいのある方に以下の支援を行っています。</p>
        </SectionsPageHeader>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VExpansionPanels
          v-model="selectedList"
          multiple
        >
          <VExpansionPanel>
            <VExpansionPanelTitle class="text-h6">
              図書館スタッフによる支援
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <div class="text-h6 pt-3">
                代行検索
              </div>
              <p>
                OPACやデータベースの利用が困難な場合、図書館スタッフが代わりに検索します。
              </p>
              <div class="text-h6 pt-3">
                書架利用援助
              </div>
              <p>
                高い書棚や、書棚と書棚の間の通路が狭いなど、本の取り出しが困難な場合、図書館スタッフが代行します。
              </p>
              <div class="text-h6 pt-3">
                館内移動援助
              </div>
              <p>
                館内はバリアフリー対応ですが、状況に応じ図書館スタッフが介助します。
              </p>
              <div class="text-h6 pt-3">
                入退館援助
              </div>
              <p>出入口の通行が困難な場合、図書館スタッフが介助します。</p>
              <div class="text-h6 pt-3">
                機器利用援助
              </div>
              <p>
                コピー機、プリンター、PC、AV機器など、館内機器の利用が困難な場合は、図書館スタッフが介助します。
              </p>
              <div class="text-h6 pt-3">
                国立国会図書館視覚障害者等データ送信サービス
              </div>
              <p class="mb-2">
                国立国会図書館が製作した視覚障害者等用のDAISYデータ等と、図書館等が製作し国立国会図書館が収集した視覚障害者等用データを、インターネット経由で提供します。このサービスが受けられるのは「図書館の障害者サービスにおける著作権法第37条第3項に基づく著作物の複製等に関するガイドライン」に定められた、視覚障害その他の理由で通常の印刷物の読書が困難な方です。
              </p>
              <templates-list-file :items="files" />
            </VExpansionPanelText>
          </VExpansionPanel>
          <VExpansionPanel>
            <VExpansionPanelTitle class="text-h6">
              施設設備
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <div class="text-h6 pt-3">
                拡大書架ガイド
              </div>
              <p>全ての書棚に拡大文字の書架ガイドを貼付しています。</p>
              <div class="text-h6 pt-3">
                拡大読書器
              </div>
              <p>3階の院生・教員閲覧室に拡大読書器を設置しています。</p>
              <div class="text-h6 pt-3">
                音声読書器
              </div>
              <p>3階の検索コーナーに音声読書器（『よめーる』）を設置しています。</p>
              <div class="text-h6 pt-3">
                多目的トイレ
              </div>
              <p>2階、3階、4階に多目的トイレがあります。</p>
              <div class="text-h6 pt-3">
                プリンター
              </div>
              <p>
                1階のオンデマンドプリンターには、タッチパネルを搭載、低位置に設置しています。
              </p>
              <div class="text-h6 pt-3">
                点字
              </div>
              <p>
                エレベーター内のボタンに、点字を貼付しています。階段の手すりに、フロアを示す点字を貼付しています。
              </p>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VAlert
          density="compact"
          type="success"
        >
          上記以外にもサポートが必要でしたら、図書館スタッフまでお申し出ください。できる限りご要望にお応えします。
        </VAlert>
      </VCol>
    </VRow>
  </VContainer>
</template>
