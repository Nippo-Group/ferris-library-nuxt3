<script setup lang="ts">
type State = {
  title: string;
  leadSentence?: string;
};
defineProps<State>();
</script>

<template>
  <v-col cols="12" xl="8">
    <v-card rounded="0" color="red-lighten-3 text-white">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text v-if="leadSentence" class="text-justify text-grey-darken-3">
        <div class="lead-sentence" v-html="leadSentence"></div>
      </v-card-text>
    </v-card>
    <slot />
  </v-col>
</template>

<style scoped>
.lead-sentence {
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1em;
  border-radius: 8px;
}
.lead-sentence::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 24px;
  margin-left: -8px;
  border: 8px solid transparent;
  border-bottom: 8px solid rgba(255, 255, 255, 0.6);
}
</style>
