export const dateFormat = (date?: string) => {
  const dayjs = useDayjs();
  const specifiedDate = dayjs(date);
  const format = specifiedDate.format("YYYY年M月D日（dd）");
  const utc = specifiedDate.utc();
  return { format, utc };
};
