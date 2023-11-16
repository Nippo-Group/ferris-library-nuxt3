import type { News } from "@/types/news";

type Queries = {
  orders?: string;
  limit?: number;
  ids?: string;
};

export const useArticleNews = (queries: Queries) => {
  const { data, error } = useMicroCMSGetList<News>({
    endpoint: "news",
    queries,
  });

  const contents = computed<News[] | undefined>(() => {
    if (data) {
      return data.value?.contents;
    } else {
      return undefined;
    }
  });

  return {
    data,
    error,
    contents,
  };
};
