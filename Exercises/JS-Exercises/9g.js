function costKeyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }

  const formattedCost = cost.toFixed(2);

  document.querySelector(
    ".js-total-cost"
  ).innerHTML = `$${formattedCost}`;
}

function Subscribe() {
  const buttonElement = document.querySelector(".js-subscribe");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
}