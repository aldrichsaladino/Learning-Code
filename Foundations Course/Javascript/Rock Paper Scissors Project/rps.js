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
