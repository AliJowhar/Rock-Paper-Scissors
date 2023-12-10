"use strict";

let usersChoice = prompt("rock, paper or scissors? ");
let computerChoice = getRpsDecision(getRandomNum());

function getRandomNum() {
  return Math.trunc(Math.random() * 3 + 1);
}

function getRpsDecision(num) {
  switch (num) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";

    default:
      return "Not a proper value";
  }
}

// Check who wins
function checkWinner(player, computer) {
  if (player == "rock" && computerChoice == "scissors") {
    return player;
  } else if (player == "paper" && computer == "rock") {
    return player;
  } else if (player == "scissors" && computer == "paper") {
    return player;
  } else if (player === computer) {
    return "It is a draw";
  } else {
    return computer;
  }
}

console.log("the winner is; " + checkWinner(usersChoice, computerChoice));
console.log("Users choice: " + usersChoice);
console.log("Computer choice: " + computerChoice);

// Display Winner
