type OneMonthList = {
  year: number;
  month: number;
  date: number;
  day: number;
};

export const oneMonthList = (
  year: number,
  month: number,
  calender?: boolean
): OneMonthList[] => {
  const array: OneMonthList[] = [];

  const dayjs = useDayjs();
  const beginningOfMonth = dayjs(`${year}-${month}-01`).startOf("month");
  const dayCorrection = beginningOfMonth.day();
  const beginningOfCalender = beginningOfMonth.subtract(dayCorrection, "d");

  // ループ終了のフラグ
  const endFlag = (stateMonth: number): boolean => {
    return stateMonth !== month;
  };
  const endFlagCalender = (stateMonth: number, stateDay: number): boolean => {
    if (month < 12) {
      return stateMonth === month + 1 && stateDay === 0;
    } else {
      return stateMonth === 1 && stateDay === 0;
    }
  };

  // ループ処理（配列へ格納）
  const startDate = calender ? beginningOfCalender : beginningOfMonth;
  const endFunc = calender ? endFlagCalender : endFlag;
  let i = 0;
  while (true) {
    const value = startDate.add(i, "d");
    if (endFunc(value.month() + 1, value.day())) {
      break;
    }

    array.push({
      year: value.year(),
      month: value.month() + 1,
      date: value.date(),
      day: value.day(),
    });
    i++;
  }

  return array;
};
