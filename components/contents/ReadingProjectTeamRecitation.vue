<script setup lang="ts">
import imgRecitation01 from '~/assets/images/reading-project/about-recitation-01.png'
import imgRecitation02 from '~/assets/images/reading-project/about-recitation-02.png'

const name = '朗読チーム'
const content
  = '朗読の専門家から直々に指導を受けられるので、 マイクなしで相手に伝わりやすい声、 表現方法が身につきます。<br />大学祭や文学館など、学内外で発表の機会があります。'
const images = [imgRecitation01, imgRecitation02]
const movie = {
  src: 'https://www.youtube.com/embed/WcCruNTE__M',
  title: '朗読動画（演目「やまなし」）',
}
</script>

<template>
  <templates-card-reading-project :title="name">
    <VCardText>
      <PartsHtmlTextArea :data="content" />
    </VCardText>
    <VContainer>
      <VRow dense>
        <VCol
          v-for="(image, imgIndex) in images"
          :key="imgIndex"
          cols="12"
          sm="6"
        >
          <VImg :src="image" />
        </VCol>
      </VRow>
    </VContainer>
    <VCardText v-if="movie">
      <TemplatesYoutubeViewer
        :title="movie.title"
        :src="movie.src"
      />
    </VCardText>
  </templates-card-reading-project>
</template>
