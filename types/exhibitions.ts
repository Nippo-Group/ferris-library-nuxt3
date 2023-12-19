import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Category } from "@/types/category";

type PlaceToExhibit = {
  fieldId: string;
  placeToExhibit: string;
};

export type Exhibition = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  date: string;
  eyecatch?: MicroCMSImage;
  placeToExhibit?: PlaceToExhibit;
  content?: string;
  category: (MicroCMSListContent & Category) | null;
};
