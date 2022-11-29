let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        return "rock"
    }
    else if (randomNumber == 1){
        return "raper"
    }
    else {
        return "scissors"
    }
}

let play = (playerSelection,computerSelection) => {
    let playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie. Rock and Rock cancel out."
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose. Paper beats rock."
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win. Rock beats scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        return "Tie. Paper and Paper cancel out"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win. Paper beats rock"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose. Scissors beats paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "Tie. Scissors and Scissors cancel out"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win. Scissors beats paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose. Rock beats scissors"
    }
    else {
        return "Error. Please enter rock, paper, or scissors."
    }
}