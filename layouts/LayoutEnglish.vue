<template>
  <layout-wrapper>
    <slot />
  </layout-wrapper>
</template>

<script>
export default {
  name: "LayoutEnglish",
  created() {
    this.$store.commit("languageEn");
  },
};
</script>
