import { Article } from "./types";

// Get Output Container from DOM
const newsContainer = document.querySelector("#news-container");

export async function renderNewsCards(news: Article[]) {
  if (!newsContainer) return;
  newsContainer.innerHTML = "";
  news.forEach((entry) => {
    // Create News Card Element
    const newsCard = document.createElement("article");
    newsCard.className =
      "shadow-4xl ring-[#ffca7a]-400 flex flex-col overflow-hidden rounded-xl bg-[#f6e6cf] p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]";
    // Create News Card Title
    const newsCardTitle = document.createElement("h2");
    newsCardTitle.textContent = entry.title;
    newsCardTitle.className = "my-6 text-center text-2xl font-bold";
    newsCard.appendChild(newsCardTitle);
    // Create News Card Image
    const newsCardImageBox = document.createElement("div");
    newsCardImageBox.className =
      "image-box mx-auto mb-7 w-3/5 overflow-hidden rounded-2xl";
    const newsCardImage = document.createElement("img");
    newsCardImage.className = "object-cover";
    newsCardImage.src = `${entry.urlToImage}`;
    newsCardImageBox.appendChild(newsCardImage);
    newsCard.appendChild(newsCardImageBox);
    // Create News Card Description
    const newsCardDescription = document.createElement("p");
    newsCardDescription.textContent = entry.description;
    newsCardDescription.className = "text-dark-800 w-full text-center text-lg";
    newsCard.appendChild(newsCardDescription);
    // Create News Card Button including EventListener
    const newsCardButton = document.createElement("button");
    newsCardButton.className =
      "mx-auto my-6 inline-block w-2/5 cursor-pointer rounded-lg border-1 px-5 py-2 transition-colors duration-300 hover:bg-[#ffca7a] focus:bg-[#ffca7a]";
    newsCardButton.textContent = "Zum Artikel";
    newsCardButton.addEventListener("click", () => {
      window.open(entry.url);
    });
    newsCard.appendChild(newsCardButton);
    // Append News Card to News Container
    newsContainer.appendChild(newsCard);
  });
}
