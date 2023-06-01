// テスト中・未実装
export const getCMSArticles = async (endpoint: string, orders: string) => {
  const { data } = await useMicroCMSGetList({
    endpoint,
    queries: { orders },
  });

  return data;
};
