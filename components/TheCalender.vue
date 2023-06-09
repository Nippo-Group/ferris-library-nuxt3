<script setup lang="ts">
/* type Event = {
  name: string;
  start: string;
  end?: string;
};
type State = {
  events?: Event[];
}; */

// 定数
// const props = defineProps<State>();

const dayjs = useDayjs();
const today = dayjs();
const focusYear = ref<number>(2023);
const focusMonth = ref<number>(1);
const focusDate = ref<number>(1);

watch(focusMonth, () => {
  if (focusMonth.value > 12) {
    focusYear.value++;
    focusMonth.value = 1;
  } else if (focusMonth.value < 1) {
    focusYear.value--;
    focusMonth.value = 12;
  }
});
/* const focusDateFormat = computed<string>(() => {
  return `${focusYear.value}-${focusMonth.value}-${focusDate.value}`;
}); */

const days: string[] = ["日", "月", "火", "水", "木", "金", "土"];

onMounted(() => {
  focusYear.value = today.year();
  focusMonth.value = today.month() + 1;
  focusDate.value = today.date();
});

// イベントを取得する関数
/* const getEvents = (date: string): string[] | undefined => {
  const format = (value: string) => {
    return dayjs(value).format("YYYY-MM-DD");
  };

  if (props.events) {
    const array = [];
    const targetDate = dayjs(date).startOf("date");
    for (const item of props.events) {
      if (item.end) {
        const start = dayjs(item.start).startOf("date");
        const end = dayjs(item.end).endOf("date");
        if (targetDate >= start && targetDate < end) {
          array.push(item.name);
        }
      } else if (format(date) === format(item.start)) {
        array.push(item.name);
      }
    }
    return array;
  }
}; */

// 表示される日付のリスト
const calenders = computed(() => {
  return oneMonthList(focusYear.value, focusMonth.value, true);
});

const nextMonth = (): void => {
  focusMonth.value++;
};
const previousMonth = (): void => {
  focusMonth.value--;
};
</script>

<template>
  <v-btn @click="nextMonth()">つぎへ</v-btn>
  <v-btn @click="previousMonth()">もどる</v-btn>
  <ul class="calender">
    <li v-for="(day, index) in days" :key="index" class="calender_header">
      {{ day }}
    </li>
    <li
      v-for="(item, index) in calenders"
      :key="`${item.month}-${item.date}`"
      class="calender_item"
    >
      <p v-if="item.date === 1 || index === 0">
        {{ item.month }}月{{ item.date }}日
      </p>
      <p v-else>{{ item.date }}日</p>
      <!--       <ul v-if="item.events" class="calender_item_events">
        <li
          v-for="(event, eventIndex) in item.events"
          :key="`${index}-${eventIndex}`"
        >
          {{ event }}
        </li>
      </ul> -->
    </li>
  </ul>
</template>

<style scoped lang="scss">
.calender {
  list-style: none;
  margin-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  &_header {
    border: #ccc solid 1px;
    text-align: center;
  }
  &_item {
    border: #ccc solid 1px;
    padding: 8px;
    text-align: center;
    &_events {
      list-style: none;
      margin-left: 0;
    }
  }
}
</style>
