const cardContainers = document.querySelectorAll('[data-js="card-container"]');
// const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
// const answers = document.querySelectorAll('[data-js="answer"]');
// const bookmarkButtons = document.querySelectorAll(
//   '[data-js="bookmark-button"]'
// );

// const copy = booking.cloneNode();
// console.log(copy);
// cards.forEach((card) => {
//   const child = card.children;
//   console.log(child);
//   const bookmarking = child.classList.contains(
//     "questioncard__bookmark-icon-active"
//   );
//   console.log(bookmarking);
// });

// answerButtons.forEach((answerButton, index) => {
//   answerButton?.addEventListener("click", () => {
//     const buttonInitalText = "Show Answer";
//     if (answerButton.textContent.includes(buttonInitalText)) {
//       answerButton.textContent = "Hide Answer";
//       answers[index].style.display = "initial";
//     } else {
//       answerButton.textContent = buttonInitalText;
//       answers[index].style.display = "none";
//     }
//   });
// });

// bookmarkButtons.forEach((bookmarkButton, index) => {
//   bookmarkButton?.addEventListener("click", () => {
//     const cardContainer = cardContainers[index];
//     if (
//       confirm(
//         "Wenn du das Bookmark wirklich entfernen möchtest, klicke OK. Diese Quizfrage verschwindet dann von deiner Bookmark-Seite"
//       )
//     ) {
//       cardContainer.remove();
//     }
//     return;
//   });
// });
