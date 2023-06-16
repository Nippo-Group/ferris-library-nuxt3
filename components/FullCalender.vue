<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import dayListPlugin from "@fullcalendar/list";

import ryokuen from "@/assets/json/calender-ryokuen.json";
import yamate from "@/assets/json/calender-yamate.json";
import common from "@/assets/json/calender-common.json";

import { useLanguageStore } from "@/stores/language";

type BeforeFormatEvent = {
  name: string;
  start: string;
  end?: string;
};
type Event = {
  title: string;
  color: string;
  start: string;
  end?: string;
  allday?: boolean;
};

// 言語の状態
const langStore = useLanguageStore();
const language = ref(langStore.language);

// 緑園本館・山手分室の状態
const selectLocation = ref<"ryokuen" | "yamate">("ryokuen");
const locationLabel = computed(() => {
  if (language.value === "en") {
    return {
      ryokuen: "Ryokuen",
      yamate: "Yamate",
    };
  } else {
    return {
      ryokuen: "緑園本館",
      yamate: "山手分室",
    };
  }
});

// イベントをフォーマットする
const eventFormat = (events: BeforeFormatEvent[]): Event[] => {
  const arr = [];
  for (const event of events) {
    const color = eventColors[eventNames.indexOf(event.name)];

    let nameSubstitution = false;
    if (
      language.value === "en" &&
      (event.name === "閉館" || event.name === "閉室")
    ) {
      nameSubstitution = true;
    }
    arr.push({
      title: nameSubstitution ? "Closed" : event.name,
      color,
      start: event.start,
      end: event.end ? `${event.end} 24:00:00` : undefined,
      allDay: true,
    });
  }
  return arr;
};
const eventColors = [
  "#5C6BC0",
  "#BDBDBD",
  "#BDBDBD",
  "#BDBDBD",
  "#42A5F5",
  "#FFA726",
  "#66BB6A",
  "#FFCA28",
  "#AB47BC",
  "#FF7043",
  "#D81B60",
  "#C0CA33",
];
const eventNames = [
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
];

// イベントを取得する
const eventsRyokuen = eventFormat(ryokuen.concat(common));
const eventsYamate = eventFormat(yamate.concat(common));
const events = computed(() => {
  if (selectLocation.value === "ryokuen") {
    return eventsRyokuen;
  } else {
    return eventsYamate;
  }
});

// FullCalendarのオプション設定
const calendarOptions = reactive({
  plugins: [dayGridPlugin, dayListPlugin],
  initialView: "dayGridMonth",
  nowIndicator: true,
  editable: false,
  events,
  locale: language.value,
  timeZone: "Asia/Tokyo",
  height: "auto",
  headerToolbar: {
    start: "dayGridMonth listMonth",
    center: "title",
    end: "today prev,next",
  },
  displayEventTime: false,
});
</script>

<template>
  <v-tabs fixed-tabs color="primary">
    <v-tab @click="selectLocation = 'ryokuen'">
      {{ locationLabel.ryokuen }}
    </v-tab>
    <v-tab @click="selectLocation = 'yamate'">
      {{ locationLabel.yamate }}
    </v-tab>
  </v-tabs>
  <v-sheet class="mt-4">
    <FullCalendar :options="calendarOptions">
      <template #eventContent="arg">
        <b class="pa-1">
          {{ arg.event.title }}
          <v-tooltip activator="parent" location="top">
            {{ arg.event.title }}
          </v-tooltip>
        </b>
      </template>
    </FullCalendar>
  </v-sheet>
</template>
