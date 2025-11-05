function updateText() {
  const inputElement = document.querySelector(".js-input");
  const outputElement = document.querySelector(".js-output");
  outputElement.innerHTML = inputElement.value;
}