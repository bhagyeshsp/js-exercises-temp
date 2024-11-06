let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();


// Setup score trackers
// Create a computer score variable and initialize it with 0
// Create a human score variable and initialize it with 0
let computerScore = 0;
let humanScore = 0;


playRound(computerSelection,humanSelection);
console.log("Human score: ", humanScore);
console.log("Computer score: ", computerScore);
// Computer's choice
// Generate random number first
// Based on the random number, assign either of the three choices: rock, paper or scissors
// Store that choice in a variable as computer's choice

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    console.log("Random number: ", i);
    let choice;
    if (i === 0) {
        choice = "rock";
        console.log("computerSelection value: ", choice);
    } else if (i === 1) {
        choice = "paper";
        console.log("computerSelection value: ", choice);
    } else if (i === 2) {
        choice = "scissors";
        console.log("computerSelection value: ", choice);
    }
    return choice;
}

// Human's choice
// Ask for human's choice: rock, paper or scissors
// Assign that value to a variable as human's choice

function getHumanChoice() {
    let choice = prompt("What would you choose? Rock, Paper, Scissors?: ").toLowerCase();
    console.log("Human's choice: ", choice);
    return choice;
}




// Game playing
// Create a function that takes two arguments: computer's choice and human's choice
// This function compares both and addresses the user by saying something like: "You lose! Paper beats Rock!"

function playRound(computerChoice, humanChoice) {
    // Rock beats scissors
    // scissors beat paper
    // paper beats rock
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "scissors" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if (computerChoice === humanChoice) {
        console.log(`Ah, that's a tie! Because ${computerChoice} can't beat ${humanChoice}!`);
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        humanScore++;
    }
}

// Score increment
// If the computer choice beat human choice, increment the computer score by 1
// If the human choice beat computer choice, increment the human score by 1