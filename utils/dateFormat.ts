export const dateFormat = (date?: string): string => {
  const dayjs = useDayjs();
  return dayjs(date).format("YYYY年M月D日（dd）");
};
