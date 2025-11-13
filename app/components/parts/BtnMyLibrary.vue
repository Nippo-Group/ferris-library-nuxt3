<script setup lang="ts">
const name = 'MyLibrary login'
const url
  = 'https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open'
</script>

<template>
  <PartsBtnOpenInNew
    :link="name"
    :url="url"
  />
</template>
