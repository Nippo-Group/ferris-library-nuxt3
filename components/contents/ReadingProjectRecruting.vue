<script setup lang="ts">
const title = '《学内のみなさまへ》学生メンバー募集中！'
const items = [
  '本が好き',
  'イラストを描くのが好き',
  'イベントが好き、企画してみたい',
  '大学生だからこそできる活動がしたい',
  '人前で話すのは苦手だが、克服したい',
]
</script>

<template>
  <templates-card-reading-project :title="title">
    <VCardText>
      図書館や本の魅力を学内外の様々な人に伝える活動を、一緒にしてみませんか？<br>学年不問で、いつからでも参加できます。
    </VCardText>
    <VList>
      <VListSubheader>【こんな人におすすめ！】</VListSubheader>
      <VListItem
        v-for="(item, index) in items"
        :key="index"
        rounded="xl"
        density="compact"
      >
        <VListItemTitle class="wrap-text">
          {{ item }}
        </VListItemTitle>
        <template #prepend>
          <icons-check-marked />
        </template>
      </VListItem>
    </VList>
    <VCardText>
      参加希望の方、もっと詳しく活動について知りたい方は、図書館カウンターもしくは下記メールアドレスまでお問い合わせください。
    </VCardText>
    <elements-banner-email
      address="r_library@ferris.ac.jp"
    />
  </templates-card-reading-project>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
