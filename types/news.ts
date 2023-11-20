import type { MicroCMSListContent } from "microcms-js-sdk";

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
  title: string;
  date: string;
  contents: MicroCMSListContent;
  actions?: Actions;
  actions2?: Actions;
  openinnew?: Openinnew;
  openinnew2?: Openinnew;
};
