// TODO: input validation, number in range -fixed
// TODO: make displayed range inclusive - fixed
// TODO: log/count entries - fixed
// TODO: Play again?

// html
const btn = document.querySelector("#submit");
const placeholder = document.querySelector("#placeholder");
const guessLog = document.querySelector("#guessLog");
let input = document.querySelector("#inputNumber");
// variables
let answer = Math.ceil(Math.random() * 1000);
console.log(answer);
// let range = Array.from({ length: 1000 }, (v, k) => k + 1);
let guesses = [];

let lowEnd = 1;
let highEnd = 1000;

updateUI();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkGuess(Number(input.value));
  console.log(guesses);
});

function updateUI(winState = false) {
  let rangeText = winState
    ? "GG! Play Again?"
    : `Between ${lowEnd} and ${highEnd}`;
  placeholder.textContent = rangeText;

  if (guesses.length > 0) {
    let listItem = document.createElement("li");
    listItem.innerText = input.value;
    guessLog.appendChild(listItem);
  }
  input.value = "";
}

function checkGuess(num) {
  if (lowEnd > num || num > highEnd) {
    alert("Number is outside of range!");
    input.value = "";
  } else if (num === answer) {
    updateUI(true);
  } else if (num > answer) {
    highEnd = num - 1;
    guesses.push(num);
    updateUI();
  } else if (num < answer) {
    lowEnd = num + 1;
    guesses.push(num);

    updateUI();
  }
}
