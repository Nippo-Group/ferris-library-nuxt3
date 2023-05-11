<template>
  <div class="youtube">
    <iframe v-bind="youtubeIframeAttributes" :src="item.src"></iframe>
    <div class="text-subtitle-1 text-center">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayYoutube',
  props: {
    item: { type: Object, default: () => {} },
  },
  data: () => ({
    youtubeIframeAttributes: {
      width: 560,
      height: 315,
      title: 'YouTube video player',
      frameborder: 0,
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: true,
    },
  }),
}
</script>

<style scoped>
.youtube {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.youtube iframe {
  width: 100%;
  height: 100%;
}
</style>
