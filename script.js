// TODO: input validation
// TODO: log/count entries
// TODO: Play again?

// html
const btn = document.querySelector("#submit");
const placeholder = document.querySelector("#placeholder");
let input = document.querySelector("#inputNumber");
// variables
let answer = Math.ceil(Math.random() * 1000);
let range = [...Array(1000).keys()];

console.log(answer);

updateUI();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = Number(input.value);

  if (guess === answer) {
    updateUI(true);
  } else if (guess > answer) {
    range = range.splice(0, range.indexOf(guess));
    updateUI();
  } else if (guess < answer) {
    range = range.splice(range.indexOf(guess), range.length);
    updateUI();
  }

  console.log(range);
});

function updateUI(winState = false) {
  let rangeText = "";
  if (winState) {
    rangeText = "WIN!";
  } else {
    rangeText = `${range[0]} to ${range[range.length - 1]}`;
  }
  placeholder.textContent = rangeText;
  input.value = "";
}
