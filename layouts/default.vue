<template>
  <layout-wrapper>
    <slot />
  </layout-wrapper>
</template>

<script>
export default {
  name: "LayoutDefault",
  created() {
    this.$store.commit("languageJa");
  },
};
</script>
