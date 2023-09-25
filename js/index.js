const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answers = document.querySelectorAll('[data-js="answer"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icon"]');

answerButtons.forEach((answerButton, index) => {
  answerButton?.addEventListener("click", () => {
    const buttonInitalText = "Show Answer";
    if (answerButton.textContent.includes(buttonInitalText)) {
      answerButton.textContent = "Hide Answer";
      answers[index].style.display = "initial";
    } else {
      answerButton.textContent = buttonInitalText;
      answers[index].style.display = "none";
    }
  });
});

function storeBookmarks() {
  const bookmarkData = [];
  bookmarkIcons.forEach((bookmarIcon, index) => {
    if (bookmarIcon.classList.contains("questioncard__bookmark-icon-active")) {
      bookmarkData.push(index);
    }
  });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkData));
  const countBookmarks = bookmarkData.length;
  localStorage.setItem("counterBookmarks", countBookmarks);
}

function loadBookmarks() {
  const bookmarkData = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarkData.forEach((index) => {
    bookmarkIcons[index].classList.add("questioncard__bookmark-icon-active");
  });
}

bookmarkButtons.forEach((bookmarkButton, index) => {
  bookmarkButton.addEventListener("click", () => {
    bookmarkIcons[index].classList.toggle("questioncard__bookmark-icon-active");
    storeBookmarks();
  });
});

loadBookmarks();
