let playerPoints = 0;
let computerPoints = 0;

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
        computerPoints++

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Won! Rock beats scissors");
        playerPoints++

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Paper");
        computerPoints++

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Won! Paper beats scissors");
        playerPoints++

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats scissors");
        computerPoints++

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Won! Scissors beat Paper");
        playerPoints++

    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Player Selection").toLowerCase();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    };

    if (playerPoints === computerPoints) {
        console.log("Tie")
    } else if (playerPoints > computerPoints) {
        console.log("You Won!")
    } else {
        console.log("You Lost!")
    }
};

game();