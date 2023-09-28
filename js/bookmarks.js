const cardContainers = document.querySelectorAll('[data-js="card-container"]');
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

bookmarkIcons.forEach((bookmarkIcon, index) => {
  bookmarkIcon?.addEventListener("click", () => {
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
