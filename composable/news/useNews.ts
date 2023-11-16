import type { News } from "@/types/news";

export const useNews = () => {
  const { isReservation } = useReservation();
  const mode = useRoute().query.mode ?? "public";

  const newsListFilter = (list: News[]) => {
    if (mode === "private") {
      return list;
    } else {
      return list.filter((element) => {
        return !isReservation(element.date);
      });
    }
  };

  return {
    newsListFilter,
  };
};
