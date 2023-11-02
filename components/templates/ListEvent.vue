<script setup lang="ts">
type Event = {
  name: string;
  start: string;
  end?: string;
};
defineProps<{
  title: string;
  date: string;
  eventsRyokuen: Event[];
  eventsYamate: Event[];
}>();
</script>

<template>
  <v-container class="bg-grey-lighten-3">
    <v-row justify="center" dense>
      <v-col cols="12" md="4">
        <v-card
          height="100%"
          color="rgba(255, 255, 255, 0.8)"
          rounded="0"
          variant="flat"
        >
          <v-card-text class="text-center pb-0">
            <div class="text-h6">
              <icons-calendar-multiselect start size="small" />
              {{ title }}
            </div>
            <time :datetime="dateFormatSimple(date)">
              {{ dateFormat(date) }}
            </time>
          </v-card-text>
          <v-card-actions class="justify-center">
            <btn-inside link="カレンダーをみる" to="/calendar"></btn-inside>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card
          height="100%"
          color="rgba(255, 255, 255, 0.8)"
          rounded="0"
          variant="flat"
        >
          <v-card-text class="text-center">
            <p class="text-h6 mb-0">緑園本館</p>
            <ul class="events">
              <li
                v-for="(item, i) in eventsRyokuen"
                :key="'ryokuen' + i"
                class="bg-grey-lighten-4"
              >
                {{ item }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card
          height="100%"
          color="rgba(255, 255, 255, 0.8)"
          rounded="0"
          variant="flat"
        >
          <v-card-text class="text-center">
            <p class="text-h6 mb-0">山手分室</p>
            <ul class="events">
              <li
                v-for="(item, i) in eventsYamate"
                :key="'yamate' + i"
                class="bg-grey-lighten-4"
              >
                {{ item }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.events {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.events li {
  border-radius: 4px;
  padding: 4px;
  margin: 4px 0;
}
</style>
