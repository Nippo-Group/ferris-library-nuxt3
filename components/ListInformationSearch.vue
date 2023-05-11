<template>
  <v-stepper v-model="active" vertical non-linear>
    <template v-for="(item, i) in items">
      <v-stepper-step
        :key="'item' + i"
        editable
        :complete="active > item.step"
        :step="item.step"
      >
        {{ item.subTitle }}
      </v-stepper-step>
      <v-stepper-content :key="'itemContent' + i" :step="item.step">
        <ul class="link-list">
          <li v-for="(listItem, j) in item.list" :key="'listItem' + i + j">
            <v-btn
              v-if="listItem.name"
              class="text-none"
              :to="listItem.push"
              :href="listItem.href"
              :target="listItem.href ? '_blank' : '_self'"
              outlined
            >
              {{ listItem.name }}
              <v-icon v-show="listItem.icon" right> {{ listItem.icon }}</v-icon>
            </v-btn>
            <p class="grey--text">{{ listItem.comment }}</p>
          </li>
        </ul>
        <div class="text-right">
          <v-btn color="primary" @click="active = item.step + 1">
            {{ language === 'en' ? 'Next' : 'つぎへ' }}
          </v-btn>
        </div>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>

<script>
export default {
  name: 'ListInformationSearch',
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
  data: () => ({
    active: 1,
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

<style scoped>
.link-list {
  list-style: none;
  padding-left: 0;
}
</style>
