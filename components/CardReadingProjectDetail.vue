<template>
  <v-card height="100%">
    <v-card-title v-if="subTitle" class="red--text text--lighten-3">
      {{ subTitle }}
    </v-card-title>
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'CardReadingProjectDetail',
  props: {
    subTitle: { type: String, default: '' },
  },
}
</script>
