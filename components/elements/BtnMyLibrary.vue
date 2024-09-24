<script setup lang="ts">
const name = 'MyLibrary login'
const url
  = 'https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open'
</script>

<template>
  <elements-btn-open-in-new
    :link="name"
    :url="url"
  />
</template>
