// Initialize scores and the round counter
let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;

// Function for the computer choice
function getCPUChoice() {
    const Choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * Choices.length);
    return Choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    const cpuSelection = getCPUChoice();

    // Determine the winner
    if (playerSelection === cpuSelection) {
        updateRoundResult(`It's a tie! Both players chose ${playerSelection}`);
    } else if (
        (playerSelection === "rock" && cpuSelection === "scissors") ||
        (playerSelection === "paper" && cpuSelection === "rock") ||
        (playerSelection === "scissors" && cpuSelection === "paper")
    ) {
        playerScore++;
        updateRoundResult(`You win! ${playerSelection} beats ${cpuSelection}`);
    } else {
        cpuScore++;
        updateRoundResult(`You lost! ${cpuSelection} beats ${playerSelection}`);
    }

    // Update rounds played and scoreboard
    roundsPlayed++;
    updateScoreboard();

    // Check if the game is over (first to 3 wins)
    if (playerScore >= 3 || cpuScore >= 3) {
        displayFinalScore();
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

    // Reset scoreboard and round result
    updateScoreboard();
    updateRoundResult("Make your choice to start the game!");

    // Hide the endgame modal
    document.getElementById("endgame-modal").style.display = "none";
}
