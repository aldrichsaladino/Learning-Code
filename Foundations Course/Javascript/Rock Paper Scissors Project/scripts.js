// Initialize scores and the round counter
let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;
let gameOver = false;

// Function for the computer choice
function getCPUChoice() {
    const Choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * Choices.length);
    return Choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    if (gameOver) {
        return;
    }

    const cpuSelection = getCPUChoice();

    const emojiMap = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };

    document.getElementById('player-choice').textContent = emojiMap[playerSelection];
    document.getElementById('cpu-choice').textContent = emojiMap[cpuSelection];

    // Get the vs-text element
    const vsText = document.getElementById('vs-text');

    if (playerSelection === cpuSelection) {
        updateRoundResult(`It's a tie! Both players chose ${playerSelection}`);
        vsText.style.color = "orange"; // Neutral color for a tie
    } else if (
        (playerSelection === "rock" && cpuSelection === "scissors") ||
        (playerSelection === "paper" && cpuSelection === "rock") ||
        (playerSelection === "scissors" && cpuSelection === "paper")
    ) {
        playerScore++;
        updateRoundResult(`You win! ${playerSelection} beats ${cpuSelection}`);
        vsText.style.color = "green"; // Green for a win
    } else {
        cpuScore++;
        updateRoundResult(`You lost! ${cpuSelection} beats ${playerSelection}`);
        vsText.style.color = "red"; // Red for a loss
    }

    // Add the shake animation class
    vsText.classList.add("shake");

    // Remove the shake class after the animation ends
    setTimeout(() => vsText.classList.remove("shake"), 500);

    updateScoreboard();

    if (playerScore >= 3 || cpuScore >= 3) {
        displayFinalScore();
        gameOver = true;
    }
}

// Function to update the round result in HTML
function updateRoundResult(message) {
    const roundResultDiv = document.getElementById("roundResult");
    roundResultDiv.textContent = message;
}

// Function to update the scoreboard in HTML
function updateScoreboard() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${cpuScore}`;
}

// Function to display the final score after the game ends
function displayFinalScore() {
    const endMessage = document.getElementById("end-message");
    endMessage.textContent = `Final Score - Player: ${playerScore} - Computer: ${cpuScore}`;
    document.getElementById("endgame-modal").style.display = "block";
}

// Function to restart the game
function restartGame() {
    playerScore = 0;
    cpuScore = 0;
    roundsPlayed = 0;
    gameOver = false;

    // Reset scoreboard and round result
    updateScoreboard();
    updateRoundResult("Make your choice to start the game!");

    // Hide the endgame modal
    document.getElementById("endgame-modal").style.display = "none";
}
