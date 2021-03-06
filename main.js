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

function checkWinner(computerSelection, playerSelection) {
    let winner = "";

    if (computerSelection === playerSelection) {
        winner = "draw";
    } else {
        switch (computerSelection) {
            case "rock":
                if (playerSelection === "paper") {
                    winner = "player";
                } else if (playerSelection === "scissors") {
                    winner = "computer";
                }
                break;
            case "paper":
                if (playerSelection === "rock") {
                    winner = "computer";
                } else if (playerSelection === "scissors") {
                    winner = "player";
                }
                break;
            case "scissors":
                if (playerSelection === "rock") {
                    winner = "player";
                } else if (playerSelection === "paper") {
                    winner = "computer";
                }
                break;
        }
    }

    printWinner(winner, computerSelection, playerSelection);
    return winner;
}

function printWinner(winner, computerSelection, playerSelection) {
    const winnerNode = document.createElement("p");
    let text;

    if (winner === "player") {
        text = document.createTextNode(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (winner === "computer") {
        text = document.createTextNode(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (winner === "draw") {
        text = document.createTextNode(`It's a draw, you both selected ${computerSelection}`);
    }

    winnerNode.appendChild(text);
    let element = document.getElementById("round-winner");
    element.appendChild(winnerNode);
}

function game(numberOfRounds, pSelection) {
    currentScore.innerHTML = "";
    for (let i = 0; i < numberOfRounds; i++) {
        let player = pSelection;
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

        // Below is messy and will need to be refactored.
        const scoreNode = document.createElement('p');
        let text;
        if (numberOfPlayerWins === 5) {
            text = document.createTextNode(`You WIN!`);
            scoreNode.appendChild(text);
            text = document.createElement("br");
            scoreNode.appendChild(text);
            text = document.createTextNode(`To play a new round, just click on one of the buttons!`);
            scoreNode.appendChild(text);
            gameReset();
        } else if (numberOfComputerWins === 5) {
            text = document.createTextNode(`Computer Wins :(`);
            scoreNode.appendChild(text);
            text = document.createElement("br");
            scoreNode.appendChild(text);
            text = document.createTextNode(`To play a new round, just click on one of the buttons!`);
            scoreNode.appendChild(text);
            gameReset();
        } else {
            text = document.createTextNode(`You: ${numberOfPlayerWins}`);
            scoreNode.appendChild(text);
            text = document.createElement("br");
            scoreNode.appendChild(text);
            text = document.createTextNode(`Computer: ${numberOfComputerWins}`);
            scoreNode.appendChild(text);
            text = document.createElement("br");
            scoreNode.appendChild(text);
            text = document.createTextNode(`Draws: ${numberOfDraws}`);
            scoreNode.appendChild(text);
        }
        currentScore.appendChild(scoreNode);
    }

    console.log(`Computer wins: ${numberOfComputerWins}`);
    console.log(`Player wins: ${numberOfPlayerWins}`);
    console.log(`Draws: ${numberOfDraws}`);
}

function gameReset() {
    numberOfComputerWins = 0;
    numberOfPlayerWins = 0;
    numberOfDraws = 0;
}


const btns = document.getElementsByClassName("btn");

const roundWinner = document.getElementById("round-winner")

const currentScore = document.getElementById('current-score')

let numberOfComputerWins = 0;
let numberOfPlayerWins = 0;
let numberOfDraws = 0;


for (i of btns) {
    let selectedButton;
    i.addEventListener('click', (e) => {
        roundWinner.innerHTML = ""; // To reset text every time a button is clicked
        switch (e.target.id) {
            case "rock-btn":
                selectedButton = "rock"
                console.log("111 rock")
                break;
            case "paper-btn":
                selectedButton = "paper";
                console.log("paper");
                break;
            case "scissors-btn":
                selectedButton = "scissors";
                break;
        }

        game(1, selectedButton);
    })
}