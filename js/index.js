const main = document.querySelector('[data-js="main"]');
const questioncards = document.querySelectorAll('[data-js="questioncard"]');
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answers = document.querySelectorAll('[data-js="answer"]');
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
  cloneCards();
}

function loadBookmarks() {
  const bookmarkData = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarkData.forEach((index) => {
    bookmarkIcons[index].classList.add("questioncard__bookmark-icon-active");
  });
  cloneCards();
}

bookmarkIcons.forEach((bookmarkIcon, index) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcons[index].classList.toggle("questioncard__bookmark-icon-active");
    storeBookmarks();
  });
});

loadBookmarks();

function cloneCards() {
  const clonedCards = main.querySelectorAll('[data-js="clone"]');
  clonedCards.forEach((clonedCard) => {
    clonedCard.remove();
  });
  questioncards.forEach((questioncard, index) => {
    if (
      bookmarkIcons[index].classList.contains(
        "questioncard__bookmark-icon-active"
      )
    ) {
      const clone = questioncard.cloneNode(true);
      clone.setAttribute("data-js", "clone");
      main.append(clone);
    }
  });
}
