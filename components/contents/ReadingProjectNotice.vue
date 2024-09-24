<script setup lang="ts">
const mediaInformation = {
  title: '掲載されました！',
  actions: [
    {
      url: 'https://magazine.ferris.ac.jp/20230511/18045/',
      title: '読書運動プロジェクト活動報告　～2023春～',
      source: 'フェリスを綴る　2023年5月11日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20230328/17905/',
      title:
        '読書運動プロジェクト：朗読会「しあわせの、かたち。 ―ひとりひとりが願うこと―」を開催しました',
      source: 'フェリスを綴る　2023年3月28日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20221021/17101/',
      title:
        '読書体験の魅力を共有し、新たな本に出会う機会を創出する読書運動プロジェクト',
      source: 'フェリスを綴る　2022年10月11日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20220830/16312/',
      title: '読書運動プロジェクト活動報告　～2022夏～',
      source: 'フェリスを綴る　2022年8月30日掲載',
    },
  ],
}
</script>

<template>
  <templates-card-reading-project :title="mediaInformation.title">
    <v-list
      v-if="mediaInformation.actions"
      lines="two"
    >
      <template
        v-for="(media, index) in mediaInformation.actions"
        :key="index"
      >
        <v-divider v-show="index > 0" />
        <v-list-item
          :href="media.url"
          target="_blank"
        >
          <v-list-item-title class="wrap-text">
            {{
              media.title
            }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ media.source }}</v-list-item-subtitle>
          <template #append>
            <icons-open-in-new />
          </template>
        </v-list-item>
      </template>
    </v-list>
  </templates-card-reading-project>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
