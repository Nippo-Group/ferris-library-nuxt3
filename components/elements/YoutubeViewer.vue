<script setup lang="ts">
type State = {
  title: string;
  src: string;
};
defineProps<State>();

const youtubeIframeAttributes = {
  width: 560,
  height: 315,
  title: "YouTube video player",
  frameborder: 0,
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen: true,
};
</script>

<template>
  <div>
    <iframe
      v-bind="youtubeIframeAttributes"
      class="youtube-frame"
      :src="src"
    ></iframe>
    <div class="text-subtitle-1 text-center">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.youtube-frame {
  aspect-ratio: 16 / 9;
  max-width: 100%;
  height: auto;
}
</style>
