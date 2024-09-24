<script setup lang="ts">
type Props = {
  link: string
  to: string
}
defineProps<Props>()
</script>

<template>
  <v-btn
    color="primary"
    variant="outlined"
    :to="to"
  >
    {{ link }}
  </v-btn>
</template>
