/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 3
*/


// Initialize scores and the round counter
let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;


// create a function for the computer choice
function getCPUChoice() {
    const Choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * Choices.length) // this pulls random number by length which is 3
    return Choices[randomIndex];
}


// function to play a single round
function playRound (playerSelection) {
    //get the player selection
    const cpuSelection = getCPUChoice();
}

    // if switch statements to determine the winner vs loser
    if (playerSelection === cpuSelection) {
        updateRoundResult(`It's a tie! Both players chose ${playerSelection}`)
    } else if (
        (playerSelection === "rock" && cpuSelection === "scissors") ||
        (playerSelection === "paper" && cpuSelection === "rock") ||
        (playerSelection === "rock" && cpuSelection === "scissors")
    ) {
        humanScore++;
        updateRoundResult (`You win! ${playerSelection} beats ${cpuSelection}`)
    } else (
        computerScore++;
        updateRoundResult(`You Lost! ${playerSelection} loses to ${cpuSelection}`)
    )

    // 6. LATER - update the rounds tht are played and then the score

    // LATER - confirm the # of rounds played


//5.  function to update the round to the HTML



// 5. function to update the scoreboard result to HTML



// 7. function to then display the total score after round 5

// 8. Function to restart the game --> link it to a restart button? Need to reset the score, and hide modal and udpate scoreboard?