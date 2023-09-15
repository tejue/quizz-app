const form = document.querySelector('[data-js="form"]');
const newQuestionPart = document.querySelector('[data-js="new-questionpart"]');
const formTextInputs = document.querySelectorAll('[data-js*="textinput-"]');
const counterOutputs = document.querySelectorAll(
  '[data-js*="characters-left"]'
);

formTextInputs.forEach((formTextinput, index) => {
  counterOutputs.forEach((counterOutput) => {
    counterOutput.textContent = formTextinput.maxLength;
  });
  formTextinput.addEventListener("input", () => {
    const charactersLeft = formTextinput.maxLength - formTextinput.value.length;
    counterOutputs[index].textContent = charactersLeft;
  });
});

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
  buttonBookmark.setAttribute("data-js", "bookmark-button");

  bookmarkIcon.classList.add("questioncard__bookmark-icon");
  bookmarkIcon.setAttribute(
    "src",
    "./assets/images/bookmark-dark-filled-excali.svg"
  );
  bookmarkIcon.setAttribute("data-js", "bookmark-icon");

  newQuestion.classList.add("questioncard__question");
  newQuestion.textContent = data.question;

  button.classList.add("questioncard__button-answer");
  button.textContent = "Show Answer";
  button.setAttribute("type", "button");
  button.setAttribute("data-js", "answer-button");

  newAnswer.classList.add("questioncard__answer");
  newAnswer.textContent = data.answer;
  newAnswer.setAttribute("data-js", "answer");

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

  formTextInputs.forEach((formTextinput, index) => {
    counterOutputs[index].textContent = formTextinput.maxLength;
  });
  // });

  const answers = document.querySelectorAll('[data-js="answer"]');
  const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );
  const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icon"]');

  const newnewAnswer = answers[answers.length - 1];
  const newAnswerButton = answerButtons[answerButtons.length - 1];
  const newBookmarkButton = bookmarkButtons[bookmarkButtons.length - 1];
  const newBookmarkIcon = bookmarkIcons[bookmarkIcons.length - 1];

  newAnswerButton.addEventListener("click", () => {
    const buttonInitalText = "Show Answer";
    if (newAnswerButton.textContent.includes(buttonInitalText)) {
      newAnswerButton.textContent = "Hide Answer";
      newnewAnswer.style.display = "initial";
    } else {
      newAnswerButton.textContent = buttonInitalText;
      newnewAnswer.style.display = "none";
    }
  });

  newBookmarkButton.addEventListener("click", () => {
    newBookmarkIcon.classList.toggle("questioncard__bookmark-icon-active");
  });
});
