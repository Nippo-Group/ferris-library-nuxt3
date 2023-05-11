<template>
  <v-row>
    <v-col
      v-for="item in items"
      v-show="item.category === category"
      :key="item.id"
      cols="12"
      lg="6"
    >
      <v-card :href="item.url" target="_blank">
        <v-card-title>
          <v-chip small class="mr-2">
            {{ item.overseas ? '海外' : '国内' }}
          </v-chip>
          {{ item.name }}
          <v-icon right> mdi-open-in-new </v-icon>
        </v-card-title>
        <v-card-subtitle v-show="item.author">
          {{ item.author }}
        </v-card-subtitle>
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListLinksCollection',
  props: {
    items: {
      type: Array,
      default: () => {},
    },
    category: {
      type: String,
      default: null,
    },
  },
  data: () => ({}),
}
</script>
