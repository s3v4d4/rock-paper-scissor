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
    let playerScore = 0;
    let computerScore = 0;
    let result,temp; 

    const textDisplay = document.querySelector('div p');
    const comScore = document.querySelector('.computer h1');
    const playScore = document.querySelector('.player h1');
    const images = document.querySelectorAll('.player .images img');
    console.log(comScore);
    console.log(playScore);
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            image.addClass('transition');
            [result,temp] = playRound(image.alt,getComputerChoice());
            if (temp > 0) {
                playerScore += 1;
            } else if (temp < 0){
                computerScore += 1; 
            }
            comScore.textContent = `Computer score: ${computerScore}`;
            playScore.textContent = `Player score : ${playerScore}`;
        });
    });
}

game()