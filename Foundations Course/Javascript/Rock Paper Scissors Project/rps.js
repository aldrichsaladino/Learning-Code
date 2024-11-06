/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 3
*/


// Computer choice logic
function getcomputerChoice() {
    let choice = Math.floor(Math.random() *3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return'scissors';
        default:
            console.warn('Selected choice out of scope. Defaulting to Rock');
            return 'rock';
    }
}

//Human choice logic. prompt a choice to be made
function getUserChoice() {
    let choice = prompt("Enter rock paper or scissors").toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice != 'scissors'){
         console.warn("Invalid Choice! Defaulting to Rock");
        return 'rock';
    }
    return choice;
}

//score logic variables
let humanScore = 0;
let computerScore = 0;

//logic to play a single round
function playRound(player, computer){
    if (player === computer){
        console.log("Tie");
        return 'tie';
    } else if (
        (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")|| (player === "rock" && computer === "scissors")
    ) {
        console.log('Player chose ${player} and computer chose ${computer}. Player wins round')
        hunmanScore++;
    } else {
        console.log('Player chose ${player} and computer chose ${computer}. Computer wins round')
        computerScore++;
    }
}

// now make multu rounds using for loop?

function playGame() {
    //reset scores to start
    humanScore = 0;
    computerScore = 0;

    //create a loop for rounds
    for (let i = 0;0 <5;i++) {
        let playerSelection = getUserChoice();
        let computerSelection = getcomputerChoice();
        playRound(playerSelection, computerSelection);
    }
    console.log('Final Score: Player = ${humanScore}, Computer = ${computerScore}');
}