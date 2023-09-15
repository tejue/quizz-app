const body = document.querySelector('[data-js="body"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');
const counterBookmarks = document.querySelector(
  '[data-js="counter-bookmarks"]'
);

buttonDarkmode.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});

// const countBookmarks = localStorage.getItem("quizAppCounterBookmarks");
// counterBookmarks.textContent = countBookmarks;
