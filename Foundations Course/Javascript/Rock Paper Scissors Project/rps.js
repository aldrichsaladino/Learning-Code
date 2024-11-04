/* The goal is to play rock paper scissors. The following needs to occur:
1. Logic for a computer choice
2. Logic for the human choice
3. Declare the score variables
4. Add logic for multiple rounds
5. Add logic to repeat the rounds to 3
*/

// Computer choice logic
function getComputerChoice () {
    let choice = math.floor(math.random() *3);
switch(choice){
    case 0:
        return 'rock'
        break;
    case 1:
        return 'rock'
        break;
    case 2:
        return 'rock'
        break;
    default:
        console.warn('Selected choice out of scope. Default to Rock')
        return 'rock';
    }
    return choice;
    console.log(choice)
}


//Human choice logic. prompt a choice to be made