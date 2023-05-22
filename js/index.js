const body = document.querySelector('[data-js="body"]');
const buttonDarkmode = document.querySelector('[data-js="button-darkmode"]');

buttonDarkmode.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});
