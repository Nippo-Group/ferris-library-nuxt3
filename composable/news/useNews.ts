import type { News } from "@/types/news";

export const useNews = () => {
  const { isReservation } = useReservation();
  const mode = useRoute().query.mode ?? "public";

  const newsListFilter = (list: News[] | undefined) => {
    if (mode === "private") {
      return list;
    } else if (list) {
      return list.filter((element) => {
        return !isReservation(element.date);
      });
    } else {
      return undefined;
    }
  };

  return {
    newsListFilter,
  };
};
