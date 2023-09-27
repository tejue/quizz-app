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
if (cardsData !== null) {
  counterQuestions.textContent = cardsData.length;
} else {
  counterQuestions.textContent = "0";
}

const bookmarksData = JSON.parse(localStorage.getItem("bookmarks"));
if (bookmarksData !== null) {
  counterBookmarks.textContent = bookmarksData.length;
} else {
  counterBookmarks.textContent = "0";
}
