<template>
  <v-footer color="primary" padless>
    <v-col class="primary text-center white--text" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Ferris University Library</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
}
</script>
