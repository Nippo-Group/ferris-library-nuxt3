<template>
  <v-banner single-line shaped>
    <v-icon slot="icon" color="primary" size="24"> mdi-email </v-icon>
    {{ emailAddress }}

    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-icon
          right
          size="1.5em"
          v-bind="attrs"
          v-on="on"
          @click="copyToClipboard(emailAddress)"
        >
          mdi-content-copy
        </v-icon>
      </template>
      <span>{{ copyMessage }}</span>
    </v-tooltip>
  </v-banner>
</template>

<script>
export default {
  name: 'BtnEmail',
  data: () => ({
    emailAddress: 'r_library@ferris.ac.jp',
    copyMessage: 'copy',
    repeat: null,
  }),
  methods: {
    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.copyMessage = 'copied!'
          this.repeat = setInterval(this.setCopyMessage, 3000)
        })
        .catch((e) => {
          this.copyMessage = `error:${e}`
        })
    },
    setCopyMessage() {
      this.copyMessage = 'copy'
      clearInterval(this.repeat)
    },
  },
}
</script>
