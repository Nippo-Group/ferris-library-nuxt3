<script setup lang="ts">
import imgTadokuEBSCO from '~/assets/images/english-tadoku/tadoku-EBSCO.jpg'
import imgTadokuGVRL from '~/assets/images/english-tadoku/tadoku-GVRL.jpg'
import imgTadokuMaruzen01 from '~/assets/images/english-tadoku/tadoku-maruzen-01.png'
import imgTadokuMaruzen02 from '~/assets/images/english-tadoku/tadoku-maruzen-02.png'
import imgTadokuMaruzen03 from '~/assets/images/english-tadoku/tadoku-maruzen-03.png'
import imgTadokuMaruzen04 from '~/assets/images/english-tadoku/tadoku-maruzen-04.png'
import imgTadokuCorner from '~/assets/images/english-tadoku/tadoku-corner.jpg'

const { show } = useConfirmDL()
</script>

<template>
  <VContainer>
    <VRow>
      <VCol
        cols="12"
        lg="6"
      >
        <VCard>
          <VCardSubtitle class="pt-4 pb-0">
            電子ブック
          </VCardSubtitle>
          <VCardTitle class="pt-0">
            EBSCO eBooks
          </VCardTitle>
          <VImg
            max-height="164"
            :src="imgTadokuEBSCO"
          />
          <VCardText>
            Macmillan Readers や Magic Tree
            Houseといった、英語多読用の電子ブック398冊が利用できます。
          </VCardText>
          <VCardActions>
            <PartsBtnOpenInNew
              link="学内からはこちら"
              url="http://search.ebscohost.com/login.aspx?profile=ehost&defaultdb=nlebk"
            />
          </VCardActions>
          <VDivider />
          <VCardText>
            <VAlert
              density="compact"
              type="success"
              class="mb-0"
            >
              学部生・大学院生・教職員は学外からも利用が可能です。<br>
              ※大学のアカウントでログインできます。
            </VAlert>
          </VCardText>
          <VCardActions>
            <PartsBtnOpenInNew
              link="学外からはこちら"
              url="https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top.do&method=open"
            />
            <VBtn
              variant="elevated"
              color="grey-lighten-4"
              @click="
                show(
                  'アクセスガイド',
                  '/documents/english-tadoku/EBSCOeBooks-access-guide.pdf',
                  'PDF',
                )
              "
            >
              アクセスガイド
              <icons-file-pdf end />
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <VCard>
          <VCardSubtitle class="pt-4 pb-0">
            電子ブック
          </VCardSubtitle>
          <VCardTitle class="pt-0">
            Gale Virtual Reference Library
          </VCardTitle>
          <VImg
            max-height="164"
            :src="imgTadokuGVRL"
          />
          <VCardText>
            <p>
              俳優、ミュージシャン、アスリート、実業家、政治家などの各界の有名人についての伝記シリーズ「People
              in the News Series」61冊を利用できます。
            </p>
            <p>学内からのみ利用できます。</p>
          </VCardText>
          <VCardActions>
            <PartsBtnOpenInNew
              link="学内からはこちら"
              url="https://go.galegroup.com/ps/i.do?p=GVRL&sw=w&u=ferris&v=2.1&subject=%E5%A4%9A%E8%AA%AD%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%EF%BC%9A%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%92%E3%81%AB%E3%81%8E%E3%82%8F%E3%81%99%E6%9C%89%E5%90%8D%E4%BA%BA%E4%BC%9D%E8%A8%98&pg=BooksForSubject&it=static"
            />
          </VCardActions>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <VCard>
          <VCardSubtitle class="pt-4 pb-0">
            電子ブック
          </VCardSubtitle>
          <VCardTitle class="pt-0">
            Maruzen eBook Library
          </VCardTitle>
          <div class="d-flex ga-4 px-4">
            <VImg
              :src="imgTadokuMaruzen01"
              alt=""
            />
            <VImg
              :src="imgTadokuMaruzen02"
              alt=""
            />
            <VImg
              :src="imgTadokuMaruzen03"
              alt=""
            />
            <VImg
              :src="imgTadokuMaruzen04"
              alt=""
            />
          </div>
          <VCardText>
            3シリーズ146冊が利用できます。書籍はレベル別に分類されています。
          </VCardText>
          <VList density="compact">
            <VListItem>
              <icons-circle-small />
              Page Turners 50巻
            </VListItem>
            <VListItem>
              <icons-circle-small />
              Foundations Reading Library 42巻
            </VListItem>
            <VListItem>
              <icons-circle-small />
              e-future graded comic readers 54冊
            </VListItem>
          </VList>
          <VCardActions>
            <PartsBtnOpenInNew
              link="学内からはこちら"
              url="https://elib.maruzen.co.jp/elib/html/BookList/"
            />
          </VCardActions>
          <VCardText>
            <VAlert
              density="compact"
              type="success"
              class="mb-0"
            >
              学部生・大学院生・教職員は学内から利用が可能です。<br>※大学のアカウントでログインできます。
            </VAlert>
          </VCardText>
          <VDivider />
          <VCardActions>
            <PartsBtnOpenInNew
              link="学外からはこちら"
              url="https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open"
            />
          </VCardActions>
          <VCardActions>
            <VBtn
              variant="elevated"
              color="grey-lighten-4"
              @click="
                show(
                  '「レベル別」アクセスガイド',
                  '/documents/english-tadoku/maruzeu-ebook-library.pdf',
                  'PDF',
                )
              "
            >
              「レベル別」アクセスガイド
              <icons-file-pdf end />
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <VCard>
          <VCardSubtitle class="pt-4 pb-0">
            書籍
          </VCardSubtitle>
          <VCardTitle class="pt-0">
            英語多読図書コーナー
          </VCardTitle>
          <VCardText>
            <p>
              緑園本館4階に、英語多読図書を集めたコーナーがあります。貸出条件は一般図書と同じです。
            </p>
            <VImg
              :src="imgTadokuCorner"
              class="mt-4"
            />
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <VCard>
          <VCardTitle>読書記録シート</VCardTitle>
          <VCardText>
            英語多読図書用の「読書記録シート」です。読んだ多読図書のタイトル、出版社、レベル、単語数、評価、感想を記録できます。
          </VCardText>
          <VCardActions>
            <VBtn
              variant="elevated"
              color="grey-lighten-4"
              @click="
                show(
                  '読書記録シート',
                  '/documents/english-tadoku/reading-record-sheet.pdf',
                  'PDF',
                )
              "
            >
              読書記録シート
              <icons-file-pdf end />
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
