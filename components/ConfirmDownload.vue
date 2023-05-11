<template>
  <v-snackbar
    v-model="confirmDownload"
    :multi-line="multiLine"
    :timeout="timeout"
  >
    {{ file.type }}ファイルを開きますか？<br />
    {{ file.name }}
    <template #action="{ attrs }">
      <v-btn class="mx-3" :href="file.url" target="_blank">
        はい
        <v-icon right>mdi-download</v-icon>
      </v-btn>
      <v-btn icon v-bind="attrs" @click="confirmDownload = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'ConfirmDownload',
  props: {
    file: {
      type: Object,
      require: true,
      default: () => ({
        name: '',
        url: '',
        type: '',
      }),
    },
  },
  data: () => ({
    confirmDownload: false,
    multiLine: true,
    timeout: 6000,
  }),
  methods: {
    dialogOpen(file) {
      this.confirmDownload = true
    },
  },
}
</script>
