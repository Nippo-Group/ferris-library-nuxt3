<script setup lang="ts">
import { service, numHeaders, numQuantity, periodHeaders, periodItems, notes } from '@/contents/service'
import { useMultiSelected } from '@/composables/common/useMultiSelected'

const title = '貸出サービス'
useSeoMeta({
  title,
  description:
    '図書館のサービス一覧・貸出冊数・貸出期間などについてご案内しています。',
})

const { selectedList } = useMultiSelected<number>([0, 1])
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsTitleLv2>サービス一覧</PartsTitleLv2>
        <VExpansionPanels
          v-model="selectedList"
          variant="accordion"
          multiple
        >
          <VExpansionPanel
            v-for="(item, i) in service"
            :key="i"
          >
            <VExpansionPanelTitle>{{ item.title }}</VExpansionPanelTitle>
            <VExpansionPanelText>{{ item.content }}</VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
        <VAlert
          type="warning"
          class="mt-4"
        >
          教育実習・海外研修等で返却日までに図書館に来館できない場合は、<strong>必ず事前に延長（更新）手続きをしてください</strong>。学部生・大学院生はMyLibraryでも延長できます。更新してもなお期限内に返却できない場合は申し出て下さい（事後は認めません）。なお、返却は郵送や宅配便でも受け付けます。（着払い不可）
        </VAlert>
      </VCol>
      <VCol
        cols="12"
        class="text-center"
      >
        <PartsBtnMyLibrary />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsTitleLv2>貸出冊数</PartsTitleLv2>
        <VCard>
          <VCardText>
            <TemplatesResponsiveTable
              :items-array="numQuantity"
              :headers="numHeaders"
            />
          </VCardText>
        </VCard>
        <VAlert
          type="success"
          class="mt-4"
        >
          参考図書、雑誌の最新号、貴重書、マイクロ資料、ビデオ、LD、DVD、CD-ROMは館内でご利用ください。
        </VAlert>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsTitleLv2>貸出期間</PartsTitleLv2>
        <VCard>
          <VCardText>
            <TemplatesResponsiveTable
              :items-array="periodItems"
              :headers="periodHeaders"
            />
          </VCardText>
        </VCard>
        <VAlert
          type="success"
          class="mt-4"
        >
          春・夏・冬季休暇中には学部生・大学院生を対象に長期貸出を行います。詳細はこのHPや掲示などでお知らせします。
        </VAlert>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <PartsTitleLv2>注意事項</PartsTitleLv2>
        <VAlert
          v-for="(note, j) in notes"
          :key="'note' + j"
          density="compact"
          variant="outlined"
          :type="note.type"
          class="mt-4"
        >
          {{ note.text }}
        </VAlert>
      </VCol>
    </VRow>
  </VContainer>
</template>
