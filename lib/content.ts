import articlesData from '@/data/source/articles.json';
import guidesData from '@/data/source/guides.json';
import homeData from '@/data/source/home.json';
import newslettersData from '@/data/source/newsletters.json';
import trainingsData from '@/data/source/trainings.json';
import webinarsData from '@/data/source/webinars.json';
import type { Article, DocumentResource, MediaFile, Newsletter, Training } from '@/types';

export const trainings = (trainingsData as Training[]).sort((a, b) => a.order - b.order);
export const guides = guidesData as DocumentResource[];
export const webinars = webinarsData as DocumentResource[];
export const articles = (articlesData as Article[]).sort((a, b) =>
  b.PublishDate.localeCompare(a.PublishDate),
);
export const newsletters = (newslettersData as Newsletter[]).sort((a, b) =>
  b.DateStart.localeCompare(a.DateStart),
);

type HomeDownload = { id: number; Cover: MediaFile; Document: MediaFile };
type HomeContent = {
  MainCover: MediaFile;
  Carousel: MediaFile[];
  DownloadableDocument: HomeDownload[];
};

export const home = homeData as HomeContent;
export const homeDownloads = home.DownloadableDocument;

export function findTraining(slug: string) {
  return trainings.find((training) => training.slug === slug);
}

export function findArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
