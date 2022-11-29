let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0){
        return "rock"
    }
    else if (randomNumber == 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}

let playRound = (playerSelection,computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
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

let playRoundResult = (playerSelection,computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "rock") {
        return 0
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return 1
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return 2
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        return 0
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return 2
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return 1
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return 0
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return 2
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return 1
    }
    else {
        return 4
    }
}

let game = () => {
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    for (let i=0; i<5; i++){
        let userChoice = prompt("Rock, paper, or scissors?")
        let computerChoice = getComputerChoice()
        let result = playRound(userChoice, computerChoice)
        console.log(result)
        switch (playRoundResult(userChoice,computerChoice)){
            case 0:
                ties++
                break;
            case 1:
                computerWins++
                break;
            case 2:
                playerWins++
                break;
        }
        console.log("The score is Player: " + playerWins + " Computer:" + computerWins + " with Ties:" + ties)
    }
}

game()