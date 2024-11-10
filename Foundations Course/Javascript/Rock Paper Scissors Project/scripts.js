/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 5
*/

// Initialize scores and the round counter
let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;

// Function for the computer choice
function getCPUChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length); // Random index (0, 1, or 2)
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    // Get the computer selection
    const cpuSelection = getCPUChoice();

    // Determine the winner using if-else statements
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

    // Increment rounds played and update the scoreboard
    roundsPlayed++;
    updateScoreboard();

    // Check if the game has reached 5 rounds
    if (roundsPlayed >= 5) {
        displayFinalScore();
    }
}

// Function to update the round result to the HTML
function updateRoundResult(message) {
    const roundResultDiv = document.getElementById("roundResult");
    roundResultDiv.textContent = message;
}

// Function to update the scoreboard display to HTML
function updateScoreboard() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${cpuScore}`;
}

// Function to display the final score after 5 rounds
function displayFinalScore() {
    const endMessage = document.getElementById("end-message");
    endMessage.textContent = `Final Score - Player: ${playerScore}, Computer: ${cpuScore}`;
    document.getElementById("endgame-modal").style.display = "block";
}

// Function to restart the game, linked to the restart button in the modal
function restartGame() {
    // Reset scores and round counter
    playerScore = 0;
    cpuScore = 0;
    roundsPlayed = 0;

    // Reset scoreboard and round message
    updateScoreboard();
    updateRoundResult("Make your choice to start the game!");

    // Hide the endgame modal
    document.getElementById("endgame-modal").style.display = "none";
}
