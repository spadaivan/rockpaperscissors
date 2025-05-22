let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let a = Math.random();
    if (a > 0 && a <= 0.34) {
        let computerChoice = "rock";
        return computerChoice;
    }
        else if (a > 0.34 && a <= 0.66) {
            let computerChoice = "paper";
        return computerChoice;
    }
        else {
        let computerChoice = "scissors"
        return computerChoice;
    }
    
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    return humanChoice;
}

    
    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            console.log("It's a tie!");
        }
        else if (humanChoice === "rock"){
            if (computerChoice === "scissors") {
                console.log("You win!");
                humanScore ++;
            }
            else {
                console.log("You lose :(");
                computerScore++;
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "rock") {
                console.log("You win!");
                humanScore++;
            }
            else {
                console.log("You lose :(");
                computerScore++;
            }
        }
        else if (humanChoice === "scissors"){
            if (computerChoice === "paper") {
                console.log("You win!");
                humanScore++;
            }
            else {
                console.log("You lose :(");
                computerScore++;
            }
        }
        console.log("Human score: ", humanScore, ". Computer Score: ", computerScore)
    }

function playGame(){

    while (humanScore < 5 && computerScore < 5) {
        playRound(getComputerChoice(), getHumanChoice());

    }
    if (humanScore === 5){
        console.log("You win the game!");
    }
    else {
        console.log("Computer wins the game")
    }
} 

playGame();