<script setup>
import ryokuen from "@/assets/json/calender-ryokuen.json";
import yamate from "@/assets/json/calender-yamate.json";
import common from "@/assets/json/calender-common.json";
import { useLanguageStore } from "@/stores/language";

const calendar = ref();
const langStore = useLanguageStore();
const language = ref(langStore.language);
const place = ref("ryokuen");
const placeToLabel = reactive({
  ryokuen: ["緑園本館", "Ryokuen"],
  yamate: ["山手分室", "Yamate"],
});
const timeFocus = ref("");
const type = ref("month");
const colors = ref([
  "indigo lighten-1",
  "grey lighten-1",
  "grey lighten-1",
  "grey lighten-1",
  "blue lighten-1",
  "orange lighten-1",
  "green lighten-1",
  "amber lighten-1",
  "purple lighten-1",
  "deep-orange lighten-1",
  "pink lighten-1",
  "lime lighten-1",
]);
const names = ref([
  "イベント",
  "閉館",
  "閉室",
  "Closed",
  "8:50～21:00",
  "9:00～19:00",
  "9:00～17:00",
  "9:00～18:00",
  "8:50～18:30",
  "10:00～15:00",
  "8:50～18:00",
  "10:00～17:00",
]);

const nuxtApp = useNuxtApp();
const timeOfFocus = computed(() => {
  const locale = language.value;
  const focus = timeFocus.value ? timeFocus.value : undefined;
  const time = nuxtApp.$dayjs(focus).locale(locale);
  const formatJapanese = "YYYY年 M月";
  const formatEnglish = "MMM YYYY";
  const titleFormat = locale === "en" ? formatEnglish : formatJapanese;
  return time.format(titleFormat);
});
const events = computed(() => {
  let setPlace;
  if (place.value === "ryokuen") {
    setPlace = ryokuen.concat(common);
  } else {
    setPlace = yamate.concat(common);
  }
  for (let i = 0; i < setPlace.length; i++) {
    const number = names.value.indexOf(setPlace[i].name);
    if (number >= 0) {
      setPlace[i].color = colors.value[number];
    } else {
      setPlace[i].color = colors.value[0];
    }
    if (
      language.value === "en" &&
      (setPlace[i].name === "閉館" || setPlace[i].name === "閉室")
    ) {
      setPlace[i].name = "Closed";
    }
  }
  return setPlace;
});

onMounted(() => {
  calendar.value.checkChange();
});
const viewDay = ({ date }) => {
  timeFocus.value = date;
};
const setToday = () => {
  timeFocus.value = "";
};
const prev = () => {
  calendar.value.prev();
};
const next = () => {
  calendar.value.next();
};
</script>

<template>
  <div>
    <v-toolbar flat>
      <v-menu bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            outlined
            color="grey darken-2"
            class="text-none"
            v-bind="attrs"
            v-on="on"
          >
            <span>{{
              language === "en"
                ? placeToLabel[place][1]
                : placeToLabel[place][0]
            }}</span>
            <v-icon right> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="place = 'ryokuen'">
            <v-list-item-title>{{
              language === "en" ? "Ryokuen" : "緑園本館"
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="place = 'yamate'">
            <v-list-item-title>{{
              language === "en" ? "Yamate" : "山手分室"
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn fab text small color="grey darken-2" @click="prev()">
        <v-icon small> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn fab text small color="grey darken-2" @click="next()">
        <v-icon small> mdi-chevron-right </v-icon>
      </v-btn>
      <v-toolbar-title class="wrap-text">
        {{ timeOfFocus }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            right
            color="grey darken-2"
            icon
            v-bind="attrs"
            v-on="on"
            @click="setToday()"
          >
            <v-icon>mdi-calendar-today</v-icon>
          </v-btn>
        </template>
        <span>today</span>
      </v-tooltip>
    </v-toolbar>
    <v-sheet height="700">
      <v-calendar
        ref="calendar"
        v-model="timeFocus"
        color="primary"
        :events="events"
        :type="type"
        :locale="language"
        @click:more="viewDay"
        @click:date="viewDay"
      >
        <template #event="props">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <div class="pl-1" v-bind="attrs" v-on="on">
                {{ props.event.name }}
              </div>
            </template>
            <span>{{ props.event.name }}</span>
          </v-tooltip>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>
