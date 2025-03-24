<script setup lang="ts">
import type { AlertType } from '@/types/alert'

const selected = ref()
const items = [
  '卒業生（大学・中高）・修了生',
  '定年退職教職員',
  '他大学所属の教員、学生の方',
  '神奈川県内大学図書館共通閲覧証をお持ちの方',
  '横浜市内大学図書館コンソーシアム参加大学所属の方',
  '一般の方',
]
type Service = {
  title?: string
  type: AlertType
  notes: string
}
type Pdf = {
  url: string
  name: string
  type: 'PDF'
}
type ItemsContents = {
  name: string
  service: Service[]
  pdfs?: Pdf[]
}
const itemsContents: ItemsContents[] = [
  {
    name: '卒業生（大学・中高）・修了生',
    service: [
      {
        title: '来館 館内複写',
        type: 'success',
        notes: '身分証明書をお持ちください。',
      },
      {
        title: '貸出',
        type: 'success',
        notes:
          'カウンターでライブラリーカードの発行手続きをしてください。貸出冊数・期間については貸出サービスをご覧ください。',
      },
      {
        title: 'ライブラリーカード発行',
        type: 'warning',
        notes: '<p>確認のため「卒業証明書」※を1部ご提出ください。</p><p>※大学卒業生は大学緑園キャンパス総務課又は山手8号館事務室へ、中高卒業生は中高事務室へお申込みください。<br />取得方法はこちら <a href="https://www.ferris.ac.jp/students-visitor/procedure/graduate/#students-procedure" target="_blank">大学</a> <a href="https://www.ferris.ed.jp/news/index.php?c=topics_view&pk=1618383802" target="_blank">中高</a></p>',
      },
      {
        title: '複写取り寄せ',
        type: 'warning',
        notes: '直接ご来館の上、複写してください。',
      },
    ],
  },
  {
    name: '定年退職教職員',
    service: [
      {
        title: '来館 館内複写',
        type: 'success',
        notes: '身分証明書をお持ちください。',
      },
      {
        title: '貸出',
        type: 'success',
        notes:
          'カウンターでライブラリーカードの発行手続きをしてください。貸出冊数・期間については貸出サービスをご覧ください。',
      },
      {
        title: '複写取り寄せ',
        type: 'warning',
        notes: '直接ご来館の上、複写してください。',
      },
    ],
  },
  {
    name: '他大学所属の教員、学生の方',
    service: [
      {
        type: 'warning',
        notes: 'ご所属の大学図書館を通じてお申し込みの上、ご利用ください。',
      },
      {
        title: '来館 館内複写',
        type: 'success',
        notes:
          '<p><strong>所属の大学図書館発行の紹介状</strong>と学生証・身分証明書をお持ちください。また、事前に所属の図書館を通じて来館日と利用資料をお知らせください。</p>',
      },
      {
        title: '貸出',
        type: 'warning',
        notes: '館外貸出はできません。図書館間貸出をご利用ください。',
      },
      {
        title: '複写取り寄せ',
        type: 'success',
        notes:
          '所属の大学図書館を通じて、著作権の範囲で資料のコピーを取り寄せることが出来ます。',
      },
      {
        title: '図書館間貸出',
        type: 'success',
        notes:
          '所属の大学図書館に資料をお送りします。楽譜・AV資料・雑誌・貴重書は対象外です。お送りした資料は館内利用（閲覧）のみ可能です。持ち出し、複写はできません。',
      },
    ],
  },
  {
    name: '神奈川県内大学図書館共通閲覧証をお持ちの方',
    service: [
      {
        title: '来館 館内複写',
        type: 'success',
        notes:
          '<p>学生は<strong>大学院女子学生</strong>、<strong>学部女子学生</strong>に限ります。共通閲覧証と学生証・身分証明書をお持ちの上、直接ご来館ください。定期試験期間のため、1月、7月を除きます。</p>',
      },
      {
        title: '貸出',
        type: 'warning',
        notes: '館外貸出はできません。図書館間貸出をご利用ください。',
      },
    ],
  },
  {
    name: '横浜市内大学図書館コンソーシアム参加大学所属の方',
    service: [
      {
        title: '来館 館内複写',
        type: 'success',
        notes:
          '<p>学生は<strong>大学院女子学生</strong>、<strong>学部女子学生</strong>に限ります。学生証・身分証明書をお持ちの上、直接ご来館ください。定期試験期間のため1月、7月を除きます。</p>',
      },
      {
        title: '貸出',
        type: 'warning',
        notes: '館外貸出はできません。図書館間貸出をご利用ください。',
      },
    ],
    pdfs: [
      {
        url: '/documents/consortium/ferris.pdf',
        name: 'フェリス女学院大学附属図書館コンソーシアム利用案内',
        type: 'PDF',
      },
    ],
  },
  {
    name: '一般の方',
    service: [
      {
        title: '来館 館内複写',
        type: 'success',
        notes:
          '「利用希望資料」「利用希望日時」を明記した公共図書館など公的機関発行の紹介状と、身分証明書をお持ちください。',
      },
      {
        title: '貸出',
        type: 'warning',
        notes: '館外貸出はできません。',
      },
    ],
  },
]
</script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    variant="filled"
    label="選択してください"
  />
  <template v-for="(content, index) in itemsContents">
    <VCard
      v-if="selected == content.name"
      :key="index"
      transition="scroll-x-transition"
    >
      <VCardTitle>{{ content.name }}</VCardTitle>
      <VCardText>
        <div class="alerts-wrapper">
          <VAlert
            v-for="(service, index2) in content.service"
            :key="index + '-' + index2"
            variant="outlined"
            :type="service.type"
            prominent
            :border="false"
          >
            <div
              v-if="service.title"
              class="text-h6"
            >
              {{ service.title }}
            </div>
            <elements-html-text-area
              v-if="service.notes"
              :data="service.notes"
            />
          </VAlert>
        </div>
      </VCardText>
      <templates-list-file
        v-if="content.pdfs"
        :items="content.pdfs"
      />
    </VCard>
  </template>
</template>

<style scoped>
.alerts-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
