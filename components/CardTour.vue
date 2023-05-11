<template>
  <v-card>
    <v-card-title> {{ item.title }} </v-card-title>
    <v-card-text v-html="item.text"> </v-card-text>
    <v-card-actions @click="show = !show">
      <v-btn color="primary" text>{{
        language === 'en' ? 'Show more' : '詳細を見る'
      }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <template v-for="(content, j) in item.contents">
            <div
              v-show="content.subtitle"
              :key="'subtitle' + j"
              class="text-h6 mt-4"
            >
              {{ content.subtitle }}
            </div>
            <p v-show="content.text" :key="'text' + j">{{ content.text }}</p>
            <ul v-show="content.list" :key="'list' + j">
              <li v-for="(listItem, k) in content.list" :key="'listItem' + k">
                {{ listItem }}
              </li>
            </ul>
          </template>
        </v-card-text>
        <v-card-actions>
          <btn-my-library></btn-my-library>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'CardTour',
  props: {
    item: {
      type: Object,
      default: () => ({
        title: 'タイトル',
        text: '文章',
        contents: [
          {
            subtitle: 'サブタイトル',
            text: '文章',
            list: ['リスト', 'リスト', 'リスト'],
          },
        ],
      }),
    },
  },
  data: () => ({
    show: false,
  }),
  computed: {
    language: {
      get() {
        return this.$store.state.language
      },
    },
  },
}
</script>
