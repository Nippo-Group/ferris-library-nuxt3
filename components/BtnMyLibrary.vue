<template>
  <v-btn
    href="https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open"
    target="_blank"
    class="my-library ma-2"
  >
    MyLibrary login
    <v-icon right>mdi-open-in-new</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnMyLibrary',
}
</script>

<style scoped>
.my-library {
  text-transform: none;
}
</style>
