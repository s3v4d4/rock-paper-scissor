function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice;

    if (number === 1) {
        choice = "rock";
    } else if (number === 2) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    return choice;
}

function playRound(playerSelection,computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    let result,score; 

    if ((player === "rock" && computer == "scissor") || (player === "scissor" && computer == "paper") || (player === "paper" && computer == "rock")) {
        result = `You Win! ${player} beats ${computer}`;
        score = 1;
    } else if (player === computer) {
        result = "Tie, no one wins!";
        score = 0;
    } else {
        result = `You Lose! ${computer} beats ${player}`;
        score = -1;
    }
    return [result,score]; 
}

function game() {
    let score = 0;
    let result,temp; 
    for(let i=0;i<5;i++){
        let input = prompt("Please enter your choice");
        [result,temp] = playRound(input,getComputerChoice());
        console.log(result)
        score += temp
    }
    if (score > 0){
        console.log('You are the winner!');
    } else if (score < 0) {
        console.log("You are the loser");
    } else {
        console.log("It's a tie");
    }  
}

game()