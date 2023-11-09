<script setup lang="ts">
const title = ref("学科推奨図書");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="9" class="recommend-info">
        <p>
          各学科の専任教員が「〇〇学科の学生なら読んでおいてほしい本」として選定された図書です。
        </p>
        <p>
          専門分野、履修科目に関わらず、所属学科における基本知識として読むことが期待されています。
        </p>
        <p>
          <v-chip class="mr-2" variant="tonal">配架場所</v-chip
          >緑園本館2階（図書館エリア／メディアカウンター向かい）
        </p>
        <p><v-chip class="mr-2" variant="tonal">貸出期間</v-chip>2週間</p>
        <p>＊所属学科以外の「学科推奨図書」も借りられます。</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <contents-recommend-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.recommend-info {
  & p {
    margin-bottom: 0.5em;
  }
}
</style>
