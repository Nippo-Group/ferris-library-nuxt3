<script setup lang="ts">
import ryokuen from "@/assets/json/calendar-ryokuen.json";
import yamate from "@/assets/json/calendar-yamate.json";
import common from "@/assets/json/calendar-common.json";

type Event = {
  name: string;
  start: string;
  end?: string;
};

const title = "本日の開館時間";

const dayjs = useDayjs();
const today = dayjs();

const eventsRyokuen = ryokuen.concat(common);
const eventsYamate = yamate.concat(common);

const todaysEventsRyokuen = computed(() => {
  return FindEventsToday(eventsRyokuen);
});
const todaysEventsYamate = computed(() => {
  return FindEventsToday(eventsYamate);
});

const FindEventsToday = (events: Event[]) => {
  const todayEvents: string[] = [];

  events.forEach((value: Event) => {
    const start = new Date(value.start);
    start.setHours(0, 0, 0);
    const end =
      value.end !== undefined ? new Date(value.end) : new Date(value.start);
    end.setHours(23, 59, 59);
    if (today > start && today < end) {
      todayEvents.push(value.name);
    }
  });
  return todayEvents;
};
</script>

<template>
  <templates-list-event
    :title="title"
    :date="dateFormat(today)"
    :events-ryokuen="todaysEventsRyokuen"
    :events-yamate="todaysEventsYamate"
  ></templates-list-event>
</template>
