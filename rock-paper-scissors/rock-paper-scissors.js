playGame();

function playGame() {
  
  let computerScore = 0;
  let humanScore = 0;

  for (let n = 1; n <= 5; n++) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
    console.log("********************");
    console.log("Human score: ", humanScore);
    console.log("Computer score: ", computerScore);
    console.log("********************");

    function getComputerChoice() {
      let i = Math.floor(Math.random() * 3);
      console.log("********************");
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

    function getHumanChoice() {
      let choice = prompt(
        "What would you choose? Rock, Paper, Scissors?: "
      ).toLowerCase();
      console.log("Human's choice: ", choice);
      return choice;
    }

    function playRound(computerChoice, humanChoice) {
      // Rock beats scissors
      // scissors beat paper
      // paper beats rock
      if (computerChoice === "rock" && humanChoice === "scissors") {
        console.clear();
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
      } else if (
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "scissors" && humanChoice === "rock")
      ) {
        console.clear();
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
      } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.clear();
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
      } else if (computerChoice === humanChoice) {
        console.clear();
        console.log(
          `Ah, that's a tie! Because ${computerChoice} can't beat ${humanChoice}!`
        );
      } else {
        console.clear();
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
      }
    }
  }
}
