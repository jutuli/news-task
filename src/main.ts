import { getSearchedNews } from "./api";
import { renderNewsCards } from "./newsCards";
import { LanguageAbbr, SortCriteria } from "./types";

// Get Inputs from DOM
const languageSelect =
  document.querySelector<HTMLSelectElement>("#select-language");
const sortCriteriaSelect =
  document.querySelector<HTMLSelectElement>("#sort-parameters");
const searchQueryInput =
  document.querySelector<HTMLInputElement>("#search-text");

document
  .querySelector<HTMLButtonElement>("#btnSearch")
  ?.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!languageSelect || !sortCriteriaSelect || !searchQueryInput) return;
    const language = languageSelect.value as unknown as LanguageAbbr;
    const sortCriteria = sortCriteriaSelect.value as unknown as SortCriteria;
    const searchQuery = searchQueryInput.value;
    const news = await getSearchedNews(language, sortCriteria, searchQuery);
    console.log(news);
    renderNewsCards(news);
  });
