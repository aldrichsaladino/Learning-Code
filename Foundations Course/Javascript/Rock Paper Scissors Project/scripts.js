/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 3
*/


// Initialize scores and the round counter
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


// create a function for the computer choice
function getComputerChoice() {
    const Choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * Choices.length) // this pulls random number by length which is 3
    return Choices[randomIndex];
}


// function to play a single round
function playRound (playerSelection) {
    //get the player selection
    const ComputerSelection = getComputerChoice();
}

    // if switch statements to determine the winner vs loser
    if (playerSelection === cpuSelection) {
        updateRoundResult(`It's a tie! Both players chose ${playerSelection}`)
    } else if (
        (playerSelection === "rock" && ComputerSelection === "scissors") ||
        (playerSelection === "paper" && ComputerSelection === "rock") ||
        (playerSelection === "rock" && ComputerSelection === "scissors")
    ) {
        humanScore++;
        updateRoundResult (`You win! ${playerSelection} beats ${ComputerSelection}`)
    } else {
        computerScore++;
        updateRoundResult(`You Lost! ${playerSelection} loses to ${ComputerSelection}`)
    }

    // 6. LATER - update the rounds tht are played and then the score
    roundsPlayed++;
    updateScoreboard();
    // LATER - confirm the # of rounds played
    if(humanScore = 3 || computerScore = 3) {
        displayFinalScore();
    }


//5.  function to update the round to the HTML
function updateRoundResult (message) {
    const roundResultDiv = document.getElementById("roundResult");
    roundResultDiv.textContent = message;
}


// 5. function to update the scoreboard result to HTML
function updateScoreboard() {
    const scoreDiv = document.getElementById("score")
    scoreDiv.textContent = `Player: ${playerScore} - Computer Score: ${computerScore}`;
}

// 7. function to then display the total score after round 5
function displayFinalScore() {
    const endMessage = document.getElementById("end-message");
    endMessage.textContent = `Final Score - Player ${playerScore} - Computer Score ${computerScore}`;
    document.getElementById("endgame-modal").style.display = "block"
}

// 8. Function to restart the game --> link it to a restart button? Need to reset the score, and hide modal and udpate scoreboard?

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    //reset scoreboard
    updateScoreboard();
    updateRoundResult("Make your choice by starting the game");
}