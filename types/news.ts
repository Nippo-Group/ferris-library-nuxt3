import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Category } from "@/types/category";

export type News = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
};
