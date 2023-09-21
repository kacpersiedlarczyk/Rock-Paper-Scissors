let playerPoints = 0;
let computerPoints = 0;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

const choices = document.querySelectorAll(".choice"); 
const result = document.querySelector(".results");
const reset = document.querySelector(".reset");

choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        const playerSelection = event.target.innerText.toLowerCase();        
        const computerSelection = getComputerChoice();
        
        if (playerPoints < 5 && computerPoints < 5) {
            playRound(playerSelection, computerSelection);
            updateScore();
        };
    });
});

reset.addEventListener("click", (event) => {
    playerPoints = 0;
    computerPoints = 0;

    playerScore.innerText = "Player: 0";
    computerScore.innerText = "Computer: 0";

    result.innerText = "";
});

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

function updateScore() {
    playerScore.innerText = `Player: ${playerPoints}`;
    computerScore.innerText = `Computer: ${computerPoints}`;

    declareWinner(playerPoints, computerPoints);
}

function declareWinner(playerPoints, computerPoints) {
    if (playerPoints === 5) {
        result.innerText = "You Won!"
    } else if (computerPoints === 5) {
        result.innerText = "You Lost!"
    };
};

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        result.innerText = "Tie"

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result.innerHTML = "Paper beats Rock"
        computerPoints++

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.innerHTML = "Rock beats scissors"; 
        playerPoints++

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.innerHTML = "Rock beats Paper";
        computerPoints++

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.innerHTML = "Paper beats scissors";
        playerPoints++

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.innerHTML = "Rock beats scissors";
        computerPoints++

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.innerHTML = "Scissors beat Paper";
        playerPoints++
    }
};