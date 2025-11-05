//9a
//console.log(document.querySelector("button"));

//9b
document.querySelector(".next-button").innerHTML = "9b done!";

//9d

function costKeyDown(event) {
  if (event.key === "Enter") {
    valueText();
  }
}

function valueText() {
  const inputElement = document.querySelector(".js-name");

  document.querySelector(
    ".js-result"
  ).innerHTML = `Your name is: ${inputElement.value}`;
}