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
  buttonBookmark.setAttribute("type", "button");

  bookmarkIcon.classList.add("questioncard__bookmark-icon");
  bookmarkIcon.setAttribute(
    "src",
    "./assets/images/bookmark-dark-filled-excali.svg"
  );

  newQuestion.classList.add("questioncard__question");
  newQuestion.textContent = data.question;

  button.classList.add("questioncard__button-answer");
  button.textContent = "Show Answer";
  button.setAttribute("type", "button");

  newAnswer.classList.add("questioncard__answer");
  newAnswer.textContent = data.answer;

  newTaglist.classList.add("questioncard__tag-list");

  newTaglistItem.classList.add("questioncard__tag-list-item");
  newTaglistItem.textContent = data.tag;

  newQuestionPart.append(newQuestioncard);
  buttonBookmark.append(bookmarkIcon);
  newQuestioncard.append(
    buttonBookmark,
    newQuestion,
    button,
    newAnswer,
    newTaglist
  );
  newTaglist.append(newTaglistItem);

  event.target.reset();
  event.target.elements.question.focus();
});

const allFormTextinputs = document.querySelectorAll('[data-js*="textinput-"]');
const allCounterOutputs = document.querySelectorAll(
  '[data-js*="characters-left"]'
);

allFormTextinputs.forEach((formTextinput, index) => {
  allCounterOutputs.forEach((counterOutput) => {
    counterOutput.innerText = formTextinput.maxLength;
  });
  formTextinput.addEventListener("input", () => {
    const charactersLeft = formTextinput.maxLength - formTextinput.value.length;
    allCounterOutputs[index].innerText = charactersLeft;
  });
});
