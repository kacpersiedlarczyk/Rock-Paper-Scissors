const playerSelection = prompt("Player Selection").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    };
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`You Lose! Paper beats Rock`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Won! Rock beats scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Won! Paper beats scissors");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Won! Scissors beat Paper");
    }
};

playRound(playerSelection, computerSelection);