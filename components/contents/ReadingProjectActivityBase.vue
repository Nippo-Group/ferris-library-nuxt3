<script setup lang="ts">
const title = '図書館紹介動画'
const movie = [
  {
    src: 'https://www.youtube.com/embed/HRKpRB5fZ-o',
    title: '図書館施設・設備編',
  },
  {
    src: 'https://www.youtube.com/embed/rBAip8vAxKU',
    title: 'ラーニングコモンズ編',
  },
]
</script>

<template>
  <templates-card-reading-project :title="title">
    <VContainer>
      <VRow dense>
        <VCol
          v-for="(item, index) in movie"
          :key="`video-${index}`"
          cols="12"
          md="6"
        >
          <elements-youtube-viewer
            :title="item.title"
            :src="item.src"
          />
        </VCol>
      </VRow>
    </VContainer>
  </templates-card-reading-project>
</template>
