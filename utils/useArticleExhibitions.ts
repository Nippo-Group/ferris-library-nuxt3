import type { Exhibition } from "@/types/exhibitions";

type Queries = {
  orders?: string;
  limit?: number;
  ids?: string;
};

export const useArticleExhibitions = (queries: Queries) => {
  const { data, error } = useMicroCMSGetList<Exhibition>({
    endpoint: "exhibition",
    queries,
  });

  const contents = computed<Exhibition[] | undefined>(() => {
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
