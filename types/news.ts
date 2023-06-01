type Actions = {
  fieldId: string;
  link: string;
  to: string;
};
type Openinnew = {
  fieldId: string;
  link: string;
  url: string;
};

export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title?: string;
  date?: string;
  content?: string;
  actions?: Actions;
  actions2?: Actions;
  openinnew?: Openinnew;
  openinnew2?: Openinnew;
};
