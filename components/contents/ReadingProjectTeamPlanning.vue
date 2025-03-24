<script setup lang="ts">
import imgPlanning01 from '~/assets/images/reading-project/about-planning-01.png'
import imgPlanning02 from '~/assets/images/reading-project/about-planning-02.png'

const name = '企画チーム'
const content
  = '毎年テーマを決めて読書会や本の展示を行うほか、大学祭では展示発表やワークショップを主催します。<br />本をツールとしたおもしろい企画やアイデアいっぱいの広報を展開します。'
const images = [imgPlanning01, imgPlanning02]
</script>

<template>
  <templates-card-reading-project :title="name">
    <VCardText>
      <elements-html-text-area :data="content" />
    </VCardText>
    <VContainer>
      <VRow dense>
        <VCol
          v-for="(image, imgIndex) in images"
          :key="imgIndex"
          cols="12"
          sm="6"
        >
          <v-img :src="image" />
        </VCol>
      </VRow>
    </VContainer>
  </templates-card-reading-project>
</template>
