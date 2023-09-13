const body = document.querySelector('[data-js="body"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');

buttonDarkmode?.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="hidden-answer"]');

answerButton?.addEventListener("click", () => {
  answer.classList.toggle("questioncard__answer");

  const buttonInitalText = "Show Answer";
  if (answerButton.textContent.includes(buttonInitalText)) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = buttonInitalText;
  }
});

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

bookmarkButton?.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("questioncard__bookmark-icon-active");
});
