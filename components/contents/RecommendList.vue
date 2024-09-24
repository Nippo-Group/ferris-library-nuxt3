<script setup lang="ts">
const items = [
  {
    category: '文学部',
    contents: [
      {
        name: '英語英米文学科',
        url: '/documents/recommend/recommend-english-literature.pdf',
        type: 'PDF',
      },
      {
        name: '日本語日本文学科',
        url: '/documents/recommend/recommend-japanese-literature.pdf',
        type: 'PDF',
      },
      {
        name: 'コミュニケーション学科',
        url: '/documents/recommend/recommend-communication.pdf',
        type: 'PDF',
      },
    ],
  },
  {
    category: '音楽学部',
    contents: [
      {
        name: '音楽芸術学科',
        url: '/documents/recommend/recommend-musical-art.pdf',
        type: 'PDF',
      },
    ],
  },
  {
    category: '国際交流学部',
    contents: [
      {
        name: '国際交流学科',
        url: '/documents/recommend/recommend-international-exchange.pdf',
        type: 'PDF',
      },
    ],
  },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        lg="6"
      >
        <v-card>
          <v-card-title>{{ item.category }}</v-card-title>
          <templates-list-file :items="item.contents" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
