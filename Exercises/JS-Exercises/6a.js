//6a.
const hour = "16";
const name = "Stella";

if (hour >= 6 && hour <= 12) {
  console.log(`Good Morning ${name}!`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon! ${name}!`);
} else {
  console.log(`Good Night ${name}!`);
}

//6d
const age = 5;
const isHoliday = true;

if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log("Discount");
} else {
  console.log("No discount");
}


//6j

const randomNumber = Math.random();
const result = randomNumber < 0.5 ? "heads" : "tails";

const guess = "heads";
console.log(guess === result ? "You win!" : "You lose");