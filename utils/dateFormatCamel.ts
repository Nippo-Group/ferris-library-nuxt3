export const dateFormatCamel = (date?: string): string => {
  const dayjs = useDayjs();
  return dayjs(date).format("YYYYMMDD");
};
