export const useReservation = () => {
  const dayjs = useDayjs()

  const today = dayjs()
  const isReservation = (date: string) => {
    return dayjs(date) > today
  }

  return {
    isReservation,
  }
}
