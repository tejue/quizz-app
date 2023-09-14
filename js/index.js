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

bookmarkButtons.forEach((bookmarkButton, index) => {
  bookmarkButton?.addEventListener("click", () => {
    bookmarkIcons[index].classList.toggle("questioncard__bookmark-icon-active");
  });
});
