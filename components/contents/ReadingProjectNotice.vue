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
    <VList
      v-if="mediaInformation.actions"
      lines="two"
    >
      <template
        v-for="(media, index) in mediaInformation.actions"
        :key="index"
      >
        <VDivider v-show="index > 0" />
        <VListItem
          :href="media.url"
          target="_blank"
        >
          <VListItemTitle class="wrap-text">
            {{
              media.title
            }}
          </VListItemTitle>
          <VListItemSubtitle>{{ media.source }}</VListItemSubtitle>
          <template #append>
            <icons-open-in-new />
          </template>
        </VListItem>
      </template>
    </VList>
  </templates-card-reading-project>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
