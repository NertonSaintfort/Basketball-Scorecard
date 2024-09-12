let homeDisplay = document.getElementById("points-display-home");
let homeGuess = document.getElementById("points-display-guest");

let homeScore = 0;
let guestScore = 0;

function homeIncrement1() {
  homeScore += 1;
  homeDisplay.textContent = homeScore;
}

function homeIncrement2() {
  homeScore += 2;
  homeDisplay.textContent = homeScore;
}
function homeIncrement3() {
  homeScore += 3;
  homeDisplay.textContent = homeScore;
}

function guestIncrement1() {
  guestScore += 1;
  homeGuess.textContent = guestScore;
}
function guestIncrement2() {
  guestScore += 2;
  homeGuess.textContent = guestScore;
}
function guestIncrement3() {
  guestScore += 3;
  homeGuess.textContent = guestScore;
}
