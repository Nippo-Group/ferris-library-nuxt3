<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>現在、準備中となります。</p>
  </v-container>
</template>

<script>
export default {
  name: 'PageQuestion',
  data: () => ({
    title: 'Q&A',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
