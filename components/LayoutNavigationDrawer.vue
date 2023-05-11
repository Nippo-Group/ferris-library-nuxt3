<template>
  <v-list>
    <template v-for="menu in menus">
      <v-list-item v-if="menu.push" :key="menu.id" :to="menu.push">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menu.category }}</v-list-item-title>
      </v-list-item>
      <v-list-group v-else :key="menu.id" :prepend-icon="menu.icon">
        <template #activator>
          <v-list-item-title>{{ menu.category }}</v-list-item-title>
        </template>

        <template v-for="content in menu.contents">
          <v-list-item
            :key="content.id"
            :to="content.push ? content.push : null"
            :href="content.href ? content.href : null"
            :target="content.href ? '_blank' : '_self'"
            link
          >
            <v-list-item-title
              class="wrap-text"
              v-text="content.title"
            ></v-list-item-title>
            <v-list-item-icon v-if="content.icon">
              <v-icon v-text="content.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>

<script>
import menusJapanese from '@/assets/json/menu.json'
import menusEnglish from '@/assets/json/menu-english.json'

export default {
  name: 'LayoutNavigationDrawer',
  data: () => ({
    menusJapanese,
    menusEnglish,
  }),
  computed: {
    language: {
      get() {
        return this.$store.state.language
      },
    },
    menus() {
      switch (this.language) {
        case 'en':
          return menusEnglish
        default:
          return menusJapanese
      }
    },
  },
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
