let humanScore = 0;
let computerScore = 0;
let rounds = 1;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

   
function playRound(computerChoice, humanChoice) {
        
        const results = document.querySelector("#results");
        const content = document.createElement("div");
        const score = document.createElement("div");
        content.classList.add("content");
        content.classList.add("score");  

        let tieMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. It's a tie!`;
        let winMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. You win!`;
        let loseMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. You lose!`;


        if (computerChoice === humanChoice) {
            content.textContent = `Round ${rounds}: ${tieMessage}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors")   || 
            (humanChoice === "paper" && computerChoice === "rock")      || 
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            content.textContent = `Round ${rounds}: ${winMessage}`;
            humanScore ++;
            }
        else {
                content.textContent = `Round ${rounds}: ${loseMessage}`;
                computerScore++;
            }
            
            score.textContent = `Human Score: ${humanScore}. Computer Score: ${computerScore}.`
            
            results.appendChild(content);
            results.appendChild(score);

            const para = document.createElement("p");
            para.textContent = `Final Score: Human ${humanScore}. Computer ${computerScore}.`
    
            if (rounds === 5) results.appendChild(para);
            
            rounds++;
            
        }
        





const buttons = document.querySelectorAll("#container button");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
    const humanSelection = button.id;     
    const computerSelection = getComputerChoice();
    if (rounds > 5) return;
    playRound(computerSelection, humanSelection);
    
    });
});

// function playGame(){
//     let rounds = 0
//     while (rounds < 5) {
//         const humanSelection = getHumanChoice();     
//         const computerSelection = getComputerChoice();
//         playRound(computerSelection, humanSelection);
//        rounds++;
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

// function getHumanChoice(){
//     let humanChoice = button.id;
//     return humanChoice;
// }
