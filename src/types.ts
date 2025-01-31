//- Type Declaration getSearchedNews Parameters

export type LanguageAbbr = {
  languageAbbr: "de" | "en" | "es" | "fr";
};

export type SortCriteria = {
  sortCriteria: "relevancy" | "popularity" | "publishedAt";
};

//- Type Declaration News API Response
export type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
