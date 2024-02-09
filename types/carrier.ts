export type Link = {
  name: string;
  url: string;
};
export type Item = {
  name: string;
  type: "データベース" | "雑誌" | "図書";
  logout: boolean;
  content: string;
  access: string;
  links?: Link[];
  heading?: boolean;
};
export type ItemHeading = {
  name: string;
  heading: true;
  content: string;
};
