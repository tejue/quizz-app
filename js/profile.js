const body = document.querySelector('[data-js="body"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');
const counterBookmarks = document.querySelector(
  '[data-js="counter-bookmarks"]'
);
const counterQuestions = document.querySelector(
  '[data-js="counter-questions"]'
);

buttonDarkmode.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});

const cardsData = JSON.parse(localStorage.getItem("cards")) || [];
const createdCardsCount = cardsData.length + 1;
counterQuestions.textContent = createdCardsCount;
console.log(createdCardsCount);

const bookmarksData = JSON.parse(localStorage.getItem("bookmarks"));
const bookmarksCount = bookmarksData.length;
counterBookmarks.textContent = bookmarksCount;
console.log(bookmarksCount);
