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
}

function loadBookmarks() {
  const bookmarkData = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarkData.forEach((index) => {
    bookmarkIcons[index].classList.add("questioncard__bookmark-icon-active");
  });
}

bookmarkIcons.forEach((bookmarkIcon, index) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcons[index].classList.toggle("questioncard__bookmark-icon-active");
    storeBookmarks();
    clony();
  });
});

loadBookmarks();

const cards = document.querySelector('[data-js="questioncard"]');
const booked = document.querySelectorAll('[data-js="bookmark-icon"]');
const main = document.querySelector('[data-js="main"]');

function clony() {
  const existingClones = main.querySelectorAll('[data-js="clon"]');
  existingClones.forEach((existingClone) => {
    existingClone.remove();
  });
  booked.forEach((book) => {
    if (book.classList.contains("questioncard__bookmark-icon-active")) {
      const clone = cards.cloneNode(true);
      clone.setAttribute("data-js", "clon");
      main.append(clone);
    }
  });
}
