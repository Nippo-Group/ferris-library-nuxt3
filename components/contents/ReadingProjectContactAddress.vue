<script setup lang="ts">
const title = 'お問い合わせ'
</script>

<template>
  <templates-card-reading-project :title="title">
    <VCardText>
      <p>
        読書運動プロジェクトについてのお問い合わせは下記メールアドレスまでお願いいたします。
      </p>
    </VCardText>
    <elements-banner-email
      address="r_library@ferris.ac.jp"
    />
  </templates-card-reading-project>
</template>
