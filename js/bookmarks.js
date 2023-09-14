const body = document.querySelector('[data-js="body"]');
const cardContainers = document.querySelectorAll('[data-js="card-container"]');
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answers = document.querySelectorAll('[data-js="answer"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icon"]');

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

bookmarkButtons.forEach((bookmarkButton, index) => {
  bookmarkButton?.addEventListener("click", () => {
    const cardContainer = cardContainers[index];
    if (
      confirm(
        "Wenn du das Bookmark wirklich entfernen möchtest, klicke OK. Diese Quizfrage verschwindet dann von deiner Bookmark-Seite"
      )
    ) {
      cardContainer.remove();
    }
    return;
  });
});
