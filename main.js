// To generate a random int between 1 and 3

function randomIntBetweenNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerSelection() {
    let randomInt = randomIntBetweenNumbers(1, 3);
    let computerSelection = checkSelection(randomInt);
    console.log(`Computer selected ${computerSelection}`);
    return computerSelection;
}

function checkSelection(number) {
    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playerSelection() {
    let randomInt = randomIntBetweenNumbers(1, 3);
    let playerSelection = prompt("Please type either Rock, Paper or Scissors: ");
    console.log(`You selected ${playerSelection}`);
    return playerSelection;
}

function checkWinner(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`It's a draw, you both selected ${computerSelection}`);
    } else {
        switch (computerSelection) {
            case "rock":
                if (playerSelection === "paper") {
                    console.log("You Win! Paper beats Rock!");
                    break;
                } else if (playerSelection === "scissors") {
                    console.log("You Lose! Rock beats Scissors");
                    break;
                }
            case "paper":
                if (playerSelection === "rock") {
                    console.log("You Lose! Paper beats Rock!");
                    break;
                } else if (playerSelection === "scissors") {
                    console.log("You Win! Scissors beats Paper");
                    break;
                }
            case "scissors":
                if (playerSelection === "rock") {
                    console.log("You Win! Scissors beats Rock!");
                    break;
                } else if (playerSelection === "paper") {
                    console.log("You Lose! Scissors beats Paper");
                    break;
                }
        }
    }
}

let player = playerSelection();
let computer = computerSelection();

checkWinner(computer, player);