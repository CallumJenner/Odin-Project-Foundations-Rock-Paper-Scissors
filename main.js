// To generate a random int between 1 and 3

function randomIntBetweenNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function cSelection() {
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

function pSelection() {
    let validTerms = ["rock", "paper", "scissors"];

    let randomInt = randomIntBetweenNumbers(1, 3);

    let playerSelection

    let validInput = false;

    while (validInput != true) {
        playerSelection = prompt("Please type either Rock, Paper or Scissors: ").toLowerCase();
        // To check if the input is valid.
        if (!(validTerms.indexOf(playerSelection) > -1)) {
            alert("Invalid Input, please enter either Rock, Paper or Scissors");
        } else {
            alert("Valid");
            validInput = true;
        }
    }

    console.log(`You selected ${playerSelection}`);
    return playerSelection;
}

function checkWinner(computerSelection, playerSelection) {
    let winner;
    if (computerSelection === playerSelection) {
        console.log(`It's a draw, you both selected ${computerSelection}`);
        return winner = "draw";
    } else {
        switch (computerSelection) {
            case "rock":
                if (playerSelection === "paper") {
                    console.log("You Win! Paper beats Rock!");
                    return winner = "player";
                } else if (playerSelection === "scissors") {
                    console.log("You Lose! Rock beats Scissors");
                    return winner = "computer";
                }
            case "paper":
                if (playerSelection === "rock") {
                    console.log("You Lose! Paper beats Rock!");
                    return winner = "computer";
                } else if (playerSelection === "scissors") {
                    console.log("You Win! Scissors beats Paper");
                    return winner = "player";
                }
            case "scissors":
                if (playerSelection === "rock") {
                    console.log("You Win! Scissors beats Rock!");
                    return winner = "player";
                } else if (playerSelection === "paper") {
                    console.log("You Lose! Scissors beats Paper");
                    return winner = "computer";
                }
        }
    }
}

function game(numberOfRounds) {
    let numberOfComputerWins = 0;
    let numberOfPlayerWins = 0;
    let numberOfDraws = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        let player = pSelection();
        let computer = cSelection();

        let winner = checkWinner(computer, player);

        switch (winner) {
            case "computer":
                numberOfComputerWins++;
                break;
            case "player":
                numberOfPlayerWins++;
                break;
            case "draw":
                numberOfDraws++;
                break;

        }
    }

    if (numberOfComputerWins > numberOfPlayerWins) {
        alert("You Lost!");
    } else if (numberOfComputerWins < numberOfPlayerWins) {
        alert("You Win!");
    } else {
        alert("It's a Draw!");
    }

    console.log(`Computer wins: ${numberOfComputerWins}`);
    console.log(`Player wins: ${numberOfPlayerWins}`);
    console.log(`Draws: ${numberOfDraws}`);
}

game(5);