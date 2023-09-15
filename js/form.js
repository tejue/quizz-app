const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
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
  const newBookmarkButton = document.createElement("button");
  const newBookmarkIcon = document.createElement("img");
  const newQuestion = document.createElement("h3");
  const newAnswerButton = document.createElement("button");
  const newAnswer = document.createElement("p");
  const newTaglist = document.createElement("ul");

  newQuestioncard.classList.add("questioncard__box");

  newBookmarkButton.classList.add("questioncard__bookmark-icon-button");
  newBookmarkButton.setAttribute("type", "button");
  newBookmarkButton.setAttribute("data-js", "bookmark-button");

  newBookmarkIcon.classList.add("questioncard__bookmark-icon");
  newBookmarkIcon.setAttribute(
    "src",
    "./assets/images/bookmark-dark-filled-excali.svg"
  );
  newBookmarkIcon.setAttribute("data-js", "bookmark-icon");

  newQuestion.classList.add("questioncard__question");
  newQuestion.textContent = data.question;

  newAnswerButton.classList.add("questioncard__button-answer");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.setAttribute("type", "button");
  newAnswerButton.setAttribute("data-js", "answer-button");

  newAnswer.classList.add("questioncard__answer");
  newAnswer.textContent = data.answer;
  newAnswer.setAttribute("data-js", "answer");

  newTaglist.classList.add("questioncard__tag-list");

  const collectedNewTags = data.tag;
  const newTags = collectedNewTags.split(/\s+/);
  newTags.forEach((newTag) => {
    const newTaglistItem = document.createElement("li");
    newTaglistItem.textContent = "#" + newTag;
    newTaglistItem.classList.add("questioncard__tag-list-item");
    newTaglist.append(newTaglistItem);
  });

  main.append(newQuestioncard);
  newBookmarkButton.append(newBookmarkIcon);
  newQuestioncard.append(
    newBookmarkButton,
    newQuestion,
    newAnswerButton,
    newAnswer,
    newTaglist
  );

  event.target.reset();
  event.target.elements.question.focus();

  formTextInputs.forEach((formTextinput, index) => {
    counterOutputs[index].textContent = formTextinput.maxLength;
  });

  const createdAnswers = document.querySelectorAll('[data-js="answer"]');
  const createdAnswerButtons = document.querySelectorAll(
    '[data-js="answer-button"]'
  );
  const createdBookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );
  const createdBookmarkIcons = document.querySelectorAll(
    '[data-js="bookmark-icon"]'
  );

  const createdAnswer = createdAnswers[createdAnswers.length - 1];
  const createdAnswerButton =
    createdAnswerButtons[createdAnswerButtons.length - 1];
  const createdBookmarkButton =
    createdBookmarkButtons[createdBookmarkButtons.length - 1];
  const createdBookmarkIcon =
    createdBookmarkIcons[createdBookmarkIcons.length - 1];

  createdAnswerButton.addEventListener("click", () => {
    const buttonInitalText = "Show Answer";
    if (createdAnswerButton.textContent.includes(buttonInitalText)) {
      createdAnswerButton.textContent = "Hide Answer";
      createdAnswer.style.display = "initial";
    } else {
      createdAnswerButton.textContent = buttonInitalText;
      createdAnswer.style.display = "none";
    }
  });

  createdBookmarkButton.addEventListener("click", () => {
    createdBookmarkIcon.classList.toggle("questioncard__bookmark-icon-active");
  });
});
