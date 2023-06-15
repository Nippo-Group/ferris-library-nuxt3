export const dateFormatSimple = (date?: string): string => {
  const dayjs = useDayjs();
  return dayjs(date).format("YYYY-MM-DD");
};
