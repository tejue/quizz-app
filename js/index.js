const body = document.querySelector('[data-js="body"]');
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answers = document.querySelectorAll('[data-js="answer"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icon"]');

// const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');

answerButtons.forEach((answerButton, answer) => {
  answerButton?.addEventListener("click", () => {
    const buttonInitalText = "Show Answer";
    if (answerButton.textContent.includes(buttonInitalText)) {
      answerButton.textContent = "Hide Answer";
      answers[answer].style.display = "initial";
    } else {
      answerButton.textContent = buttonInitalText;
      answers[answer].style.display = "none";
    }
  });
});

bookmarkButtons.forEach((bookmarkButton, bookmarkIcon) => {
  bookmarkButton?.addEventListener("click", () => {
    bookmarkIcons[bookmarkIcon].classList.toggle(
      "questioncard__bookmark-icon-active"
    );
  });
});

// buttonDarkmode?.addEventListener("click", () => {
//   body.classList.toggle("darkmode");
// });
