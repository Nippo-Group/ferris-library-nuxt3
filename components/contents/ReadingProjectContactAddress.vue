<script setup lang="ts">
const title = "お問い合わせ";
</script>

<template>
  <templates-card-reading-project :title="title">
    <v-card-text>
      <p>
        読書運動プロジェクトについてのお問い合わせは下記メールアドレスまでお願いいたします。
      </p>
    </v-card-text>
    <elements-banner-email
      address="r_library@ferris.ac.jp"
    ></elements-banner-email>
  </templates-card-reading-project>
</template>
