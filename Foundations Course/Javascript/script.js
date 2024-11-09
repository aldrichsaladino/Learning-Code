/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 3
*/

//set the score variables
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// get logic for the computer choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let  choiceIndex = Math.floor(Math.random() * choices.length) //this will give 3 options
    return choices[choiceIndex];
}

// play
function playRound (playerSelection) {
    //create the computer choice
    var computerSelection = getComputerChoice()

    //create cases to determine the winner/loser
    for (let i = 0; i < 5; i++) {
    if ( roundsPlayed < 5) {
        if (playerSelection === computerSelection) {
        updateRoundResult(`It's a tie. Both players chose ${playerSelection}.`);
        } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
        humanScore++;
        updateRoundResult(`You win this Round! ${playerSelection} beats ${computerSelection}.`)
        } else {
        computerScore++;
        updateRoundResult(`You lost this Round! ${playerSelection} loses to ${computerSelection}.`)}


    //update the round
    roundsPlayed++;
    updateScoreboard();
        }
    displayFinalScore();
    }

// update on the html
function updateRoundResult (message) {
    let roundResultDiv = document.getElementById("score");
    scoreDiv
}
