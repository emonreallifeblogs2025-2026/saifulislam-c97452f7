import type { Lang } from "@/contexts/LanguageContext";
import { chapters as chaptersBn } from "./chapters/bn";
import { chapters as chaptersEn } from "./chapters/en";
import { chapters as chaptersFr } from "./chapters/fr";
import { chapters as chaptersAr } from "./chapters/ar";
import { chapters as chaptersDe } from "./chapters/de";
import { chapters as chaptersZh } from "./chapters/zh";
import { chapters as chaptersRu } from "./chapters/ru";
import { chapters as chaptersHi } from "./chapters/hi";

export interface Chapter {
  title: string;
  content: string;
}

// Bengali chapters are the original full-length content.
// Other languages contain faithful translations.
// Each language lives in its own file under ./chapters/ for maintainability.

export const getTranslatedChapters = (lang: Lang): Chapter[] => {
  switch (lang) {
    case "en": return chaptersEn;
    case "hi": return chaptersHi;
    case "fr": return chaptersFr;
    case "ar": return chaptersAr;
    case "de": return chaptersDe;
    case "zh": return chaptersZh;
    case "ru": return chaptersRu;
    case "bn":
    default: return chaptersBn;
  }
};

export const getChapterTitles = (lang: Lang): string[] => {
  const chapters = getTranslatedChapters(lang);
  return chapters.map((c) => c.title);
};
