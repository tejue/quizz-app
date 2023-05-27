const form = document.querySelector('[data-js="form"]');
const newQuestionPart = document.querySelector('[data-js="new-questionpart"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const newQuestioncard = document.createElement("section");
  const buttonBookmark = document.createElement("button");
  const bookmarkIcon = document.createElement("img");
  const newQuestion = document.createElement("h3");
  const button = document.createElement("button");
  const newAnswer = document.createElement("p");
  const newTaglist = document.createElement("ul");
  const newTaglistItem = document.createElement("li");

  newQuestioncard.classList.add("questioncard__box");

  buttonBookmark.classList.add("questioncard__bookmark-icon-button");

  bookmarkIcon.classList.add("questioncard__bookmark-icon--dark");
  bookmarkIcon.setAttribute(
    "src",
    "./assets/images/bookmark-dark-filled-excali.svg"
  );
  newQuestion.classList.add("questioncard__question");
  newQuestion.textContent = data.question;

  button.classList.add("questioncard__button-answer");
  button.textContent = "Show Answer";

  newAnswer.classList.add("questioncard__answer");
  newAnswer.textContent = data.answer;

  newTaglist.classList.add("questioncard__tag-list");

  newTaglistItem.classList.add("questioncard__tag-list-item");
  newTaglistItem.textContent = data.tag;

  newQuestionPart.append(newQuestioncard);
  newQuestioncard.append(buttonBookmark);
  buttonBookmark.append(bookmarkIcon);
  newQuestioncard.append(newQuestion);
  newQuestioncard.append(button);
  newQuestioncard.append(newAnswer);
  newQuestioncard.append(newTaglist);
  newTaglist.append(newTaglistItem);

  event.target.reset();
  event.target.elements.question.focus();
});
