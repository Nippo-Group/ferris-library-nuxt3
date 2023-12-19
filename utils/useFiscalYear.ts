export const useFiscalYear = () => {
  const dayjs = useDayjs();
  const getfiscalYear = (date: string) => {
    const day = dayjs(date);
    if (Number(day.format("M")) < 4) {
      return day.subtract(1, "y").format("YYYY");
    } else {
      return day.format("YYYY");
    }
  };

  return {
    getfiscalYear,
  };
};
