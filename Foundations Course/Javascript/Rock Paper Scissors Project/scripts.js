// Initialize scores and round counter
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function for the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index (0, 1, or 2)
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    // Get the computer's choice
    const computerSelection = getComputerChoice();

    // Determine the winner
    if (playerSelection === computerSelection) {
        updateRoundResult(`It's a tie! Both players chose ${playerSelection}`);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;  // Increment player score for a win
        updateRoundResult(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;  // Increment computer score for a win
        updateRoundResult(`You lost! ${computerSelection} beats ${playerSelection}`);
    }

    // Update rounds played and scoreboard
    roundsPlayed++;
    updateScoreboard();

    // Check if either the player or computer has reached 3 wins
    if (playerScore === 3 || computerScore === 3) {
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
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// Function to display the final score when one player reaches 3 wins
function displayFinalScore() {
    const endMessage = document.getElementById("end-message");

    // Display the winner based on who reached 3 points first
    if (playerScore === 3) {
        endMessage.textContent = `You win the game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`;
    } else {
        endMessage.textContent = `Computer wins the game! Final Score - Player: ${playerScore}, Computer: ${computerScore}`;
    }

    document.getElementById("endgame-modal").style.display = "block";  // Show the endgame modal
}

// Function to restart the game, linked to the restart button in the modal
function restartGame() {
    // Reset scores and round counter
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    // Reset scoreboard and round message
    updateScoreboard();
    updateRoundResult("Make your choice to start the game!");

    // Hide the endgame modal
    document.getElementById("endgame-modal").style.display = "none";
}
