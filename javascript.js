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
    let computerChoice;

    const textDisplay = document.querySelector('div p');
    const comScore = document.querySelector('.computer h1');
    const playScore = document.querySelector('.player h1');
    const images = document.querySelectorAll('.player .images img');
    const opponentChoices = document.querySelectorAll('.computer .images img');
    
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            computerChoice = getComputerChoice();
            // Turns the border of the choice yellow to display what the player and computer have chosen
            image.classList.add('transition');
            opponent = document.querySelector(`.computer .images .${computerChoice}`);
            opponent.classList.add('transition');

            [result,temp] = playRound(image.alt,computerChoice);
            if (temp > 0) {
                playerScore += 1;
            } else if (temp < 0){
                computerScore += 1; 
            }
            comScore.textContent = `Computer score: ${computerScore}`;
            playScore.textContent = `Player score : ${playerScore}`;
        });
        image.addEventListener('transitionend',(e) => {
            if (e.propertyName !== 'border-left-color') return; 
            image.classList.remove('transition');
            opponentChoices.forEach((o) => {
                o.classList.remove('transition');
            });
        });
    });

}

game()