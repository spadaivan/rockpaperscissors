let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice;
}

    
    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            console.log("Computer chose", computerChoice)
            console.log("It's a tie!");
        }
        else if (humanChoice === "rock"){
            if (computerChoice === "scissors") {
                console.log("Computer chose", computerChoice)
                console.log("You win!");
                humanScore ++;
            }
            else {
                console.log("Computer chose", computerChoice)
                console.log("You lose :(");
                computerScore++;
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "rock") {
                console.log("Computer chose", computerChoice)
                console.log("You win!");
                humanScore++;
            }
            else {
                console.log("Computer chose", computerChoice)
                console.log("You lose :(");
                computerScore++;
            }
        }
        else if (humanChoice === "scissors"){
            if (computerChoice === "paper") {
                console.log("Computer chose", computerChoice)
                console.log("You win!");
                humanScore++;
            }
            else {
                console.log("Computer chose", computerChoice)
                console.log("You lose :(");
                computerScore++;
            }
        }
        console.log("Human score: ", humanScore, ". Computer Score: ", computerScore)
    }

// function playGame(){
//     let rounds = 0
//     while (rounds < 5) {
//         const humanSelection = getHumanChoice();     
//         const computerSelection = getComputerChoice();
//         playRound(computerSelection, humanSelection);
//         rounds++;
//     }
//     if (humanScore === computerScore){
//         console.log("The game ended in a tie");
//     }
//     else if (humanScore > computerScore) {
//         console.log("You win the game!");
//     }
//     else {
//         console.log("Computer wins the game")
//     }
// } 

// playGame();


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
    playRound();
    });
});