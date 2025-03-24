<script setup lang="ts">
import titleImage from '~/assets/images/reading-project/reading-project-title.png'

const title = '読書運動プロジェクト'
const description
  = '読書運動プロジェクト（通称：読プロ）は、「本が好き」「図書館が好き」な学生が集まって、教職員と一緒に活動している公認団体です。学生が主体となり、読書の魅力を届ける様々な活動を展開中です。'
useSeoMeta({
  title,
  description,
})

const isWhat
  = '本学の読書運動プロジェクトは、1998年にシアトル市で始まり、シカゴ市で2001年以降大きな成果を収め全米各地に広まった《One Book, One Community.》にヒントを得たものです。この取組みは、選定された図書の読書を通じてコミュニティの意識を育むOneBook, One Chicagoとしてシカゴ公共図書館で現在も続いています。本学では2002年度から始まり、図書館を拠点として「読書」を個人的な経験だけでなく他者と共有・発信する活動を支援しています。'
</script>

<template>
  <v-sheet color="grey-lighten-3">
    <VContainer>
      <VRow>
        <VCol cols="12">
          <elements-header-lv1-bg
            :title="['読書運動', 'プロジェクト']"
            :image="titleImage"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <elements-header-lv2-bg
            title="「読書運動プロジェクト」とは？"
            :lead="isWhat"
          />
        </VCol>
        <VCol cols="12">
          <contents-reading-project-main-activity />
        </VCol>
        <VCol
          cols="12"
          lg="6"
        >
          <contents-reading-project-recruting />
        </VCol>
        <VCol
          cols="12"
          lg="6"
        >
          <contents-reading-project-notice />
        </VCol>
        <VCol cols="12">
          <contents-reading-project-news />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <elements-header-lv2-bg
            title="活動紹介"
            :lead="description"
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <contents-reading-project-team-planning />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <contents-reading-project-team-recitation />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <elements-header-lv2-bg
            title="活動拠点～附属図書館～"
          />
        </VCol>
        <VCol cols="12">
          <contents-reading-project-activity-base />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <elements-header-lv2-bg title="お問い合わせ" />
        </VCol>
        <VCol cols="12">
          <contents-reading-project-contact-address />
        </VCol>
      </VRow>
    </VContainer>
  </v-sheet>
</template>

<style scoped>
.page-title {
  white-space: nowrap;
  line-height: 1.2em;
}
</style>
