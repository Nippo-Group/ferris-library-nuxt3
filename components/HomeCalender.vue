<script setup>
import ryokuen from "@/assets/json/calender-ryokuen.json";
import yamate from "@/assets/json/calender-yamate.json";
import common from "@/assets/json/calender-common.json";

const nuxtApp = useNuxtApp();

const todayEvents = (libraryName) => {
  let events = [];
  const todayEvents = [];
  const today = nuxtApp.$dayjs();
  switch (libraryName) {
    case "ryokuen":
      events = ryokuen.concat(common);
      break;
    case "yamate":
      events = yamate.concat(common);
      break;
  }
  events.forEach(function (value) {
    const start = new Date(value.start);
    start.setHours(0, 0, 0);
    const end =
      value.end !== undefined ? new Date(value.end) : new Date(value.start);
    end.setHours(23, 59, 59);
    if (today.isBetween(start, end, null, "[]")) {
      todayEvents.push(value.name);
    }
  });
  return todayEvents;
};
</script>

<template>
  <v-container class="grey lighten-3">
    <v-row justify="center" dense>
      <v-col cols="12" md="4">
        <v-card height="100%" color="rgba(255, 255, 255, 0.8)" outlined tile>
          <v-card-text class="text-center pb-0">
            <div class="text-h6">
              <v-icon left>mdi-calendar-multiselect</v-icon>本日の開館時間
            </div>
            <p class="mb-0">
              {{ nuxtApp.$dayjs().format("YYYY年M月D日（dd）") }}
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <btn-inside link="カレンダーをみる" to="/calender"></btn-inside>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card height="100%" color="rgba(255, 255, 255, 0.8)" outlined tile>
          <v-card-text class="text-center">
            <p class="text-h6 mb-0">緑園本館</p>
            <ul class="events">
              <li
                v-for="(item, i) in todayEvents('ryokuen')"
                :key="'ryokuen' + i"
                class="grey lighten-4"
              >
                {{ item }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card height="100%" color="rgba(255, 255, 255, 0.8)" outlined tile>
          <v-card-text class="text-center">
            <p class="text-h6 mb-0">山手分室</p>
            <ul class="events">
              <li
                v-for="(item, i) in todayEvents('yamate')"
                :key="'yamate' + i"
                class="grey lighten-4"
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
}
.events li {
  border-radius: 4px;
  padding: 4px;
  margin: 4px 0;
}
</style>
