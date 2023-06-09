export const dateFormat = (date?: string, simple?: boolean) => {
  const dayjs = useDayjs();
  const specifiedDate = dayjs(date);
  const format = specifiedDate.format(
    simple ? "YYYY-MM-DD" : "YYYY年M月D日（dd）"
  );
  const utc = specifiedDate.utc();
  return { format, utc };
};
