import { getSearchedNews } from "./api";
import { renderNewsCards } from "./newsCards";
import { LanguageAbbr, SortCriteria } from "./types";

// Get Inputs from DOM
const languageSelect =
  document.querySelector<HTMLSelectElement>("#select-language");
const sortCriteriaSelect =
  document.querySelector<HTMLSelectElement>("#sort-paramenters");
const searchQuery =
  document.querySelector<HTMLInputElement>("#search-text")?.value;

document
  .querySelector<HTMLButtonElement>("#btnSearch")
  ?.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!languageSelect || !sortCriteriaSelect || !searchQuery) return;
    const language = languageSelect.value as unknown as LanguageAbbr;
    const sortCriteria = sortCriteriaSelect.value as unknown as SortCriteria;
    const news = await getSearchedNews(language, sortCriteria, searchQuery);
    renderNewsCards(news);
  });
