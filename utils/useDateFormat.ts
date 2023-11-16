import type { Dayjs } from "dayjs";

export const useDateFormat = (date?: Dayjs | Date | string) => {
  const dayjs = useDayjs();
  const now = dayjs();

  const day = computed(() => {
    if (date === undefined || null) {
      return now;
    } else if (date instanceof Date) {
      return dayjs(date);
    } else {
      return dayjs(date);
    }
  });
  const ja = computed<string>(() => day.value.format("YYYY年M月D日（dd）"));
  const camel = computed<string>(() => day.value.format("YYYYMMDD"));
  const simple = computed<string>(() => day.value.format("YYYY-MM-DD"));

  return {
    ja: readonly(ja),
    camel: readonly(camel),
    simple: readonly(simple),
  };
};
