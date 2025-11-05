//8a.
const product = {
  name: "basketball",
  price: 2095,
};

console.log(product);

//8b.
product.price += 500;
console.log(product);

//8c.
product["delivery-time"] = "3 days";
console.log(product);

//8d.

function comparePrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
}
const product1 = {
  name: "socks",
  price: 2030,
};
const product2 = {
  name: "ball",
  price: 2000,
};

console.log(comparePrice(product1, product2));

//8e.
/*
function isSameProduct(product1, product2) {
  return JSON.stringify(product1) === JSON.stringify(product2);
}

const product1 = {
  name: "socks",
  price: 2000,
};

const product2 = {
  name: "socks",
  price: 2000,
};

console.log(isSameProduct(product1, product2));

// 8f.

console.log("Good Morning".toLowerCase());

//8g.

console.log("test".repeat(2));

//8i.
*/
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
};

function playGame(guess) {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? "heads" : "tails";
  console.log(guess === result ? "You win!" : "You lose");

  if (guess === result) {
    score.wins++;
  } else {
    score.losses++;
  }
  console.log(score);

  localStorage.setItem("score", JSON.stringify(score));
}