import type { Exhibitions } from "@/types/exhibitions";

type Queries = {
  orders?: string;
  limit?: number;
  ids?: string;
};

export const useArticleExhibition = (queries: Queries) => {
  const { data, error } = useMicroCMSGetList<Exhibitions>({
    endpoint: "exhibition",
    queries,
  });

  const contents = computed<Exhibitions[] | undefined>(() => {
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
