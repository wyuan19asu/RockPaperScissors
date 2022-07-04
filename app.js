const imgs = Array.from(document.querySelector(".container-img"));
const playerScore1 = document.querySelector(".userScore");
const cpuScore1 = document.querySelector(".cpuScore");
const playerChoice = document.querySelector("")


let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function disableButton() {
    document.getElementById("theButton").disabled = true;
}

function playRound(playerSelection, computerSelection) {
    let results = '';
    computerSelection = computerPlay();


    if (playerSelection === computerSelection) {
        results = `It is a tie. Both of you chose ${playerSelection}`;
        return results;
    }
    else if (playerScore <= 5) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore = playerScore + 1;
            results = "You win! Rock beats scissors!";
            return results;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore = playerScore + 1;
            results = "You win! Paper beats rock!";
            return results;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore = playerScore + 1;
            results = "You win! Scissors beats paper!";
            return results;
        }
    }
    else if (playerScore === 5) {
        disableButton();
    }
    else {
        computerScore = computerScore + 1;
        if (computerScore === 5) {
            disableButton();
        }
        results = `You lose! ${computerSelection} beats ${playerSelection} !`;
        return results;
    }
    document.getElementById('result').innerHTML = results;
    return;
}
/* const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})