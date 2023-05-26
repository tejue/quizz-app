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
    answerButton.textContent = "HIde Answer";
  } else {
    answerButton.textContent = buttonInitalText;
  }
});
