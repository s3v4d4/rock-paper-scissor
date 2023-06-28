function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice;
    console.log(number);

    if (number == 1) {
        choice = "rock";
    } else if (number == 2) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    return choice;
}

let result = getComputerChoice();
console.log(result);
