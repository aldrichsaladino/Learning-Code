let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let resultMessage = '';

    if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! Both chose ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultMessage = `You lost! ${computerSelection} beats ${playerSelection}`;
    }

    document.getElementById("roundResult").textContent = resultMessage;
    updateScoreboard();

    if (playerScore === 3 || computerScore === 3) {
        displayFinalScore();
    }
}

function updateScoreboard() {
    document.getElementById("score").textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function displayFinalScore() {
    const endMessage = document.getElementById("end-message");
    endMessage.textContent = playerScore === 3 ? 
        `You win the game! Final Score - Player: ${playerScore}, Computer: ${computerScore}` :
        `Computer wins the game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`;

    document.getElementById("endgame-modal").style.display = "block";
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
    document.getElementById("roundResult").textContent = "Make your choice to start the game!";
    document.getElementById("endgame-modal").style.display = "none";
}
