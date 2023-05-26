<script setup lang="ts">
const name = "MyLibrary login";
const url =
  "https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open";
</script>

<template>
  <btn-open-in-new :link="name" :url="url"></btn-open-in-new>
</template>
