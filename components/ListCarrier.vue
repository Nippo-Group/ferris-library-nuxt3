<template>
  <v-row dense>
    <v-col v-for="(item, i) in items" :key="'item' + i" cols="12" xl="8">
      <v-card v-if="item.heading" color="grey lighten-4" flat>
        <v-card-text>
          <span class="font-weight-bold">{{ item.name }}</span
          ><span class="ml-4">{{ item.content }}</span>
        </v-card-text>
      </v-card>
      <v-card v-else>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ item.type }}
        </v-card-subtitle>
        <v-card-text>
          {{ item.content }}
          <p v-if="item.logout" class="mb-0">
            <span class="orange--text ml-2">
              <v-icon small color="orange">mdi-alert-circle-outline</v-icon>
              利用後は必ずログアウトしてください
            </span>
          </p>
        </v-card-text>
        <div class="d-flex">
          <v-card-text>
            <v-chip small class="mr-2">アクセス</v-chip>{{ item.access }}
          </v-card-text>
          <v-card-actions v-if="item.links">
            <btn-open-in-new
              v-for="(link, j) in item.links"
              :key="'link' + j"
              :link="link.name"
              :url="link.url"
            ></btn-open-in-new>
          </v-card-actions>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ListCarrier',
  props: {
    items: { type: Array, required: true },
  },
  data: () => ({}),
}
</script>
