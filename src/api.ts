import ky from "ky";
import { LanguageAbbr, NewsApiResponse, SortCriteria } from "./types";

const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

//- Get Data from News API - Sorted By (Relevancy, Popularity, PublishedAt)
export async function getSearchedNews(
  languageAbbr: LanguageAbbr,
  sortCriteria: SortCriteria,
  searchQuery: string,
) {
  try {
    const searchedNews = await ky
      .get<NewsApiResponse>(
        `https://newsapi.org/v2/everything?q=${searchQuery}&language=${languageAbbr}&sortBy=${sortCriteria}&apiKey=${newsApiKey}`,
      )
      .json();
    return searchedNews.articles;
  } catch (err) {
    console.error(err);
    return [];
  }
}
