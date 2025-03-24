<script setup lang="ts">
const panel = ref([])
const faqList = ref([
  {
    question: '学生証を忘れてしまった場合、入館できませんか',
    answer:
      '<p>入館できます。</p><p>入退館ゲート付近にある「図書館入館届」に記入して、スタッフへ声をかけてください。</p><p>ただし、資料の貸出やＰＣロッカーでのパソコン貸出はできません。</p>',
  },
  {
    question: 'AVブースは利用の申し込みが必要ですか',
    answer:
      '<p>個人ブースは申し込み不要です。</p><p>AVグループ室はカウンターで利用申し込みをしてください。</p>',
  },
  {
    question: '借りている資料を引き続き借りたいのですが',
    answer:
      '<p>貸出延長ができます。延長方法は以下の2つです。</p><ol><li>カウンターに資料と学生証を持参して延長してもらう。</li><li>OPACのMyLibraryにログインし、自分で延長する。</li></ol><p>ログインはFerrisPassportと同じID、Passwordです。</p>',
  },
  {
    question: '雑誌は借りられますか',
    answer:
      '<p>バックナンバーを1週間借りることができます。</p><p>最新号または発行から3か月経過していない号は、借りられません。</p><p>詳しくは「利用案内 ＞ <a href="../service">貸出サービス</a>」をご確認ください。</p>',
  },
  {
    question:
      '他キャンパスから資料を取り寄せできますか。またどこへ返却すればよいですか',
    answer:
      '<p>緑園・山手の資料はどちらの図書館でも取り寄せ、貸出、返却ができます。</p>',
  },
  {
    question: 'コピーはできますか',
    answer:
      '<ul><li>図書館のコピー機でコピーできるのは、図書館の所蔵資料のみです。<br />ノートのコピーはFカフェなどをご利用ください。</li><li>緑園本館は1～2階と4階にコピー機があります。</li><li>現金で利用できるのは4階、それ以外はコピーカード対応です。<br />（コピーカードは丸善キャンパスショップで購入可能）</li><li>山手分室は現金で利用できます。</li></ul><p>※著作権の範囲内でコピーしてください。</p><p>※コピーをとったら「館内文献複写（コピー）申込書」に記入してください。</p><p>※教員・院生は身分証でコピーを取ることができます。</p>',
  },
  {
    question: '貴重資料、マイクロ資料は利用できますか',
    answer:
      '<p>申し込み制で利用ができます。</p><p>ご利用の際は、カウンターで「貴重資料閲覧申込書」に記入し、申し込みをしてください。</p><p>資料はスタッフがお持ちします。</p><p>※複写の可否は、資料によって異なりますのでスタッフにご相談ください。</p><p>※資料の状態によっては、利用をご遠慮いただくこともありますので予めご了承ください。</p>',
  },
  {
    question: '図書を紛失してしまいました',
    answer:
      '<p>至急、カウンターにご連絡ください。</p><p>同じ資料を購入していただくか、現金での弁償となります。</p><p>スタッフが資料の特定をいたしますので、まずはカウンターまでご連絡ください。</p>',
  },
  {
    question: 'MyLibraryにログインするIDとパスワードがわからないのですが',
    answer:
      '<p>FerrisPassportにログインするID・パスワードと同じです。</p><p>わからない場合は、情報システム課へご連絡ください。</p>',
  },
  {
    question: '卒業後も図書館を利用できますか',
    answer:
      '<p>利用できます。</p><p>「ライブラリーカード利用申込書」を記入いただくと、無料で利用者カードを発行します。</p><p>ご住所の明記されている身分証をお持ちください。</p>',
  },
])
</script>

<template>
  <VExpansionPanels
    v-model="panel"
    multiple
  >
    <VExpansionPanel
      v-for="(faq, index) in faqList"
      :key="index"
    >
      <VExpansionPanelTitle>
        <div class="d-flex align-center gap-4">
          <div class="pr-4">
            <icons-faq-question
              size="large"
              color="primary"
            />
          </div>
          <div>
            {{ faq.question }}
          </div>
        </div>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        <PartsHtmlTextArea :data="faq.answer" />
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
