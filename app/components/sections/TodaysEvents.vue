<script setup lang="ts">
import ryokuen from '@/assets/json/calendar-ryokuen.json'
import yamate from '@/assets/json/calendar-yamate.json'
import common from '@/assets/json/calendar-common.json'
import type { Event, Events } from '~/app/types/events'

const title = '本日の開館時間'

const dayjs = useDayjs()
const today = dayjs()

const eventsRyokuen = ryokuen.concat(common)
const eventsYamate = yamate.concat(common)

const todaysEventsRyokuen = computed<string[]>(() => {
  return findEventsToday(eventsRyokuen)
})
const todaysEventsYamate = computed<string[]>(() => {
  return findEventsToday(eventsYamate)
})

const findEventsToday = (events: Events) => {
  const todayEvents: string[] = []

  events.forEach((value: Event) => {
    const start = dayjs(value.start)
    const end = value.end !== undefined ? dayjs(value.end) : dayjs(value.start)
    if (today > start.startOf('day') && today < end.endOf('day')) {
      todayEvents.push(value.name)
    }
  })
  return todayEvents
}
</script>

<template>
  <templates-list-event
    :title="title"
    :date="today"
    :events-ryokuen="todaysEventsRyokuen"
    :events-yamate="todaysEventsYamate"
  />
</template>
