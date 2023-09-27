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

  createCard(data);
  countNewCards();

  const cardData = {
    question: data.question,
    answer: data.answer,
    tag: data.tag,
  };

  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push(cardData);
  localStorage.setItem("cards", JSON.stringify(cards));

  formTextInputs.forEach((formTextinput, index) => {
    counterOutputs[index].textContent = formTextinput.maxLength;
  });
  event.target.reset();
  event.target.elements.question.focus();
});

function createCard(cardData) {
  const newQuestioncard = document.createElement("section");
  newQuestioncard.classList.add("questioncard__box");
  newQuestioncard.setAttribute("data-js", "question-card");

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("questioncard__bookmark-icon-button");
  newBookmarkButton.setAttribute("type", "button");
  newBookmarkButton.setAttribute("data-js", "bookmark-button");

  const newBookmarkIcon = document.createElement("img");
  newBookmarkIcon.classList.add("questioncard__bookmark-icon");
  newBookmarkIcon.setAttribute(
    "src",
    "./assets/images/bookmark-dark-filled-excali.svg"
  );
  newBookmarkIcon.setAttribute("data-js", "bookmark-icon");

  const newQuestion = document.createElement("h3");
  newQuestion.classList.add("questioncard__question");
  newQuestion.textContent = cardData.question;

  const newAnswerButton = document.createElement("button");
  newAnswerButton.classList.add("questioncard__button-answer");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.setAttribute("type", "button");
  newAnswerButton.setAttribute("data-js", "answer-button");

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("questioncard__answer");
  newAnswer.textContent = cardData.answer;
  newAnswer.setAttribute("data-js", "answer");

  const newTaglist = document.createElement("ul");
  newTaglist.classList.add("questioncard__tag-list");

  const collectedNewTags = cardData.tag;
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

  newAnswerButton.addEventListener("click", () => {
    const buttonInitalText = "Show Answer";
    if (newAnswerButton.textContent.includes(buttonInitalText)) {
      newAnswerButton.textContent = "Hide Answer";
      newAnswer.style.display = "initial";
    } else {
      newAnswerButton.textContent = buttonInitalText;
      newAnswer.style.display = "none";
    }
  });

  newBookmarkButton.addEventListener("click", () => {
    newBookmarkIcon.classList.toggle("questioncard__bookmark-icon-active");
  });
}

function loadCards() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];

  cards.forEach((cardData) => {
    createCard(cardData);
  });
}

loadCards();

function countNewCards() {
  const cardsData = JSON.parse(localStorage.getItem("cards")) || [];
  const createdCardsCount = cardsData.length + 1;
  console.log(createdCardsCount);
}
