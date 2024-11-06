/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 3
*/


// Computer choice logic
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console.warn('Selected choice out of scope. Defaulting to Rock');
            return 'rock';
    }
}

// Human choice logic. Prompt a choice to be made
function getUserChoice() {
    let choice = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        console.warn("Invalid Choice! Defaulting to Rock");
        return 'rock';
    }
    return choice;
}

// Score logic variables
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
function playRound(player, computer) {
    if (player === computer) {
        console.log("Tie");
        return 'tie';
    } else if (
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock") ||
        (player === "rock" && computer === "scissors")
    ) {
        console.log(`Player chose ${player} and computer chose ${computer}. Player wins round`);
        humanScore++;
    } else {
        console.log(`Player chose ${player} and computer chose ${computer}. Computer wins round`);
        computerScore++;
    }
}

// Function to play multiple rounds
function playGame() {
    // Reset scores to start
    humanScore = 0;
    computerScore = 0;

    // Loop for rounds
    for (let i = 0; i < 5; i++) {
        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log(`Final Score: Player = ${humanScore}, Computer = ${computerScore}`);
}

// Call the game
playGame();
