<script setup lang="ts">
const fab = ref(false);

const onScroll = () => {
  if (typeof window === "undefined") return;
  const top = window.scrollY || 0;
  fab.value = top > 500;
};

const toTop = () => {
  window.scroll({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <transition name="fade">
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      class="el_btnToTop"
      color="primary"
      icon
      @click="toTop"
    >
      <icons-align-top size="large"/>
    </v-btn>
  </transition>
</template>

<style scoped>
.el_btnToTop {
  position: fixed;
  bottom: 8px;
  right: 8px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
