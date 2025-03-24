<script setup lang="ts">
import { useLanguage } from '@/composables/language/useLanguage'
import { useLangSwitch } from '@/composables/language/useLangSwitch'

const { langState } = useLanguage()
const panel = ref([0, 1])

const title = 'サービス一覧'
const items = [
  {
    title: '貸出',
    content:
      'カウンターに借りたい資料と学生証またはライブラリーカードをお持ちください。緑園本館の2階には、自動貸出機が設置されていて、自分で貸出手続きをすることができます。',
  },
  {
    title: '返却',
    content:
      '開館中はカウンターに、閉館中はブックポストに返却してください。返却期限日を過ぎると、経過した日数分(最大2週間)貸出が停止されますのでご注意ください。緑園本館・山手分室どちらでも返却できます。',
  },
  {
    title: '延長',
    content:
      '次の予約が入っていない場合は貸出期間を延長できます。資料をカウンターまでお持ちください。学部生・大学院生・教職員はMyLibraryでも延長できます。',
  },
  {
    title: '予約',
    content:
      '資料が貸出中の場合は、予約をすることができます。カウンターで予約申し込みしてください。資料が返却されたらフェリスメールでお知らせします。取り置き期間は1週間（教員は3週間）です。',
  },
  {
    title: '取り寄せ',
    content:
      '緑園本館と山手分室の資料を相互に取り寄せることができます。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。資料が到着したらフェリスメールでお知らせします。取り置き期間は1週間です。',
  },
  {
    title: 'リクエスト',
    content:
      'ご希望の資料を当図書館で購入します(学部生・大学院生・教職員対象)。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。購入希望の資料は優先的に処理しますが、通常2週間から資料によっては2ヶ月程度かかります。お急ぎの場合は、レファレンス・サービスで学外の資料をご利用ください。図書によっては購入できない場合がありますので、ご了承ください。',
  },
]

const titleEng = 'Service List'
const itemsEng = [
  {
    title: 'Borrowing',
    content:
      'Bring the items you wish to borrow and your student ID or library card to the circulation desk. You can also use the automatic book-circulation machine on the second floor of the Ryokuen Library to borrow items.',
  },
  {
    title: 'Returns',
    content:
      'During library hours, bring the items you wish to return to the circulation desk. After hours, return items through the book drop. Overdue items will result in a suspension of borrowing rights for a period equal to the overdue period, up to a two week maximum. Items may be returned to either the Ryokuen or Yamate Libraries.',
  },
  {
    title: 'Renewals',
    content:
      'Items may be renewed so long as another user has not reserved them. Undergraduate students, graduate students, faculty and staff can also renew items through MyLibrary.',
  },
  {
    title: 'Reserving',
    content:
      'If an item you need has been checked out, you may reserve it. When the item you requested is returned, we will send you an email.',
  },
  {
    title: 'Transfer Service between Ferris Libraries',
    content:
      'You can arrange to have items in the Ryokuen Library transferred to the Yamate Library for pick up, and vice versa. When the item you requested arrives, we will send you an email. Transferred items will be kept for pick-up for one week.',
  },
  {
    title: 'Acquisition Requests',
    content:
      'Requests for the library to acquire items may be made at the circulation desk by undergraduate students, graduate students, faculty and staff. It usually takes between two weeks and two months for requests to be processed.',
  },
]

const { contents } = useLangSwitch(
  { title, items },
  { title: titleEng, items: itemsEng },
)
</script>

<template>
  <PartsHeaderLv2>{{ contents.title }}</PartsHeaderLv2>
  <VExpansionPanels
    v-model="panel"
    variant="accordion"
    multiple
  >
    <VExpansionPanel
      v-for="(item, i) in contents.items"
      :key="i"
    >
      <VExpansionPanelTitle>{{ item.title }}</VExpansionPanelTitle>
      <VExpansionPanelText>{{ item.content }}</VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
  <VAlert
    v-if="langState === 'ja'"
    type="warning"
    class="mt-4"
  >
    教育実習・海外研修等で返却日までに図書館に来館できない場合は、<strong>必ず事前に延長（更新）手続きをしてください</strong>。学部生・大学院生はMyLibraryでも延長できます。更新してもなお期限内に返却できない場合は申し出て下さい（事後は認めません）。なお、返却は郵送や宅配便でも受け付けます。（着払い不可）
  </VAlert>
</template>
