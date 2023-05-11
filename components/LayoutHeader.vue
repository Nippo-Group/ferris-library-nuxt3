<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <layout-navigation-drawer></layout-navigation-drawer>
    </v-navigation-drawer>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2">
        <transition name="fade-image">
          <img
            v-if="language === 'en'"
            :src="require('@/assets/images/layouts/site-logo-english.png')"
            class="ferris-logo"
            width="120"
            height="34"
            alt="Ferris University Library"
          />
        </transition>
        <transition name="fade-image">
          <img
            v-if="language === 'ja'"
            :src="require('@/assets/images/layouts/site-logo.png')"
            class="ferris-logo"
            width="200"
            height="65"
            alt="フェリス女学院大学附属図書館"
          />
        </transition>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data: () => ({
    drawer: null,
  }),
  computed: {
    language: {
      get() {
        return this.$store.state.language
      },
    },
    siteTitle() {
      const siteTitle =
        this.language === 'en'
          ? {
              name: 'Ferris University Library',
              img: require('@/assets/images/layouts/site-logo-english.png'),
              width: '120',
              height: '34',
            }
          : {
              name: 'フェリス女学院大学附属図書館',
              img: require('@/assets/images/layouts/site-logo.png'),
              width: '200',
              height: '65',
            }
      return siteTitle
    },
  },
}
</script>

<style scoped>
.ferris-logo {
  vertical-align: middle;
  max-width: 100%;
}
.site-title {
  font-feature-settings: 'palt';
  font-weight: bold;
}
.fade-image-enter-active {
  transition: all 0.5s ease-out;
}
.fade-image-enter {
  transform: translateX(200px);
  opacity: 0;
}
</style>
