"use strict";
let playerscreen = document.querySelector(".player-screen");
let computerScreen = document.querySelector(".cpu-screens");

let rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const resetBtn = document.querySelector(".reset");

let userScore = 0;
let computerScore = 0;

let usersChoice;
let computerChoice;

rockBtn.addEventListener("click", () => {
  usersChoice = "Rock";
  playround(usersChoice, computerChoice);
  displayPlayer();
  displayComputer();
});
paperBtn.addEventListener("click", () => {
  usersChoice = "Paper";
  playround(usersChoice, computerChoice);
  displayPlayer();
  displayComputer();
});
scissorsBtn.addEventListener("click", () => {
  usersChoice = "Scissors";
  playround(usersChoice, computerChoice);
  displayPlayer();
  displayComputer();
});

function getRandomNum() {
  return Math.trunc(Math.random() * 3 + 1);
}

function getCpuDecision(num) {
  switch (num) {
    case 1:
      return "Rock";

    case 2:
      return "Paper";

    case 3:
      return "Scissors";

    default:
      return "Not a proper value";
  }
}

// Check who wins
function checkWinner(player, computer) {
  if (player == "Rock" && computerChoice == "Scissors") {
    userScore++;
    return "Plauer Wins";
  } else if (player == "Paper" && computer == "Rock") {
    userScore++;
    return "player Wins";
  } else if (player == "Scissors" && computer == "Paper") {
    userScore++;

    return player;
  } else if (player === computer) {
    return "It is a draw";
  } else {
    computerScore++;
    return "computer Wins, you lose";
  }
}

//Play round
function playround(playersChoice, computer) {
  if (userScore < 5 && computerScore < 5) {
    computerChoice = getCpuDecision(getRandomNum());
    checkWinner(usersChoice, computerChoice);
  } else {
    if (userScore > computerScore) {
      alert("YOU wIN !  Press reset to start a new game");
    } else {
      alert("YOU LOSE...  Press reset to try again");
    }
  }
}

// Display Winner
function displayPlayer() {
  playerscreen.textContent = `Player Chose: ${usersChoice} \n player score: ${userScore}`;
  playerscreen.style.whiteSpace = "pre-line";
}
function displayComputer() {
  computerScreen.textContent = `computer Chose: ${computerChoice} \n player score: ${computerScore}`;
  computerScreen.style.whiteSpace = "pre-line";
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;

  playerscreen.textContent = "";
  computerScreen.textContent = "";
});
