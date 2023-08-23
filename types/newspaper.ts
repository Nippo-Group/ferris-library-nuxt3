export type Newspaper = {
  title: string;
  subTitle: string;
  country: string;
  publisher: string;
  cycle: string;
  retentionPeriod: string;
  location: string;
  note: string;
};

export type Newspapers = Newspaper[];

export type NewspapersItem = {
  category: string;
  newspapers: Newspapers;
};

export type NewspapersItems = NewspapersItem[];
