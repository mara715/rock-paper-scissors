
// I need the function getComputerChoice 
// to output rock, paper or scissors, 
// at random.
// In CASE (condition 1) 
//  DISPLAY paper
// In CASE (condition 2) 
//  DISPLAY rock
// In CASE (condition 3) 
//  DISPLAY scissors
// ENDCASE

// Condition 1 random number result === 0
// Condition 2 random number result === 1
// Condition 3 random number result === 2

function getComputerChoice() {
if (getRandomInt() === 0) {
    return 'paper';
} else if (getRandomInt() === 1) {
    return 'rock';
} else {
    return 'scissors';
}
}

// GET random integer from 0 to 2

    function getRandomInt() {
    return Math.floor(Math.random()*3);
    }


// function getHumanChoice() 
// returns 'rock' 'paper' or 'scissors'
// after user's input

// GET user's choice
// DISPLAY computer choice

function getHumanChoice() {
let choice = String(prompt('Enter "rock" "paper" or "scissors".' , '')).toLowerCase();
if (choice == 'rock' || choice == 'paper' || choice == 'scissors') { 
    return getComputerChoice();
}
}

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice()

// case computer beats human
// case human beats computer
// case even

function playRound(humanChoice , computerChoice) {
    switch(true) {
        case humanChoice==='rock' && computerChoice==='paper':
            console.log('You lose! Paper beats rock.');
            break;
        case humanChoice==='paper' && computerChoice==='rock':
            console.log('You win! Paper beats rock.');
            break;
        case humanChoice==='rock' && computerChoice==='scissors':
            console.log('You win! Rock beats scissors.');
            break;
        case humanChoice==='scissors' && computerChoice==='rock':
            console.log('You lose! Rock beats scissors.');
            break;
        case humanChoice==='paper' && computerChoice==='scissors':
            console.log('You lose! Scissors beat paper.');
            break;
        case humanChoice==='scissors' && computerChoice==='paper':
            console.log('You win! Scissors beat paper.');
            break;
        default:
            console.log('It\' a tie!');
            break;
    }
}

