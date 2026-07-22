export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type MediaFile = {
  name: string;
  url: string;
  alternativeText?: string;
  width?: number | null;
  height?: number | null;
};

export type Training = {
  id: number;
  Title: string;
  title?: string;
  slug: string;
  order: number;
  AdditionalText1?: string;
  AdditionalText2?: string;
  AdditionalText3?: string;
  AdditionalText4?: string;
  additionalText1?: string;
  additionalText2?: string;
  additionalText3?: string;
  additionalText4?: string;
  cover?: MediaFile;
  horizintalCover?: MediaFile;
};

export type DocumentResource = {
  id: number;
  name: string;
  slug: string;
  cover?: MediaFile | null;
  locationPath: MediaFile;
};

export type Article = {
  id: number;
  Title: string;
  Content: string;
  slug: string;
  PublishDate: string;
  Author: string;
  Cover?: MediaFile;
};

export type Newsletter = {
  id: number;
  Slug: string;
  DateStart: string;
  DateEnd: string;
  Cover: MediaFile;
  Document: MediaFile;
};
