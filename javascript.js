
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


