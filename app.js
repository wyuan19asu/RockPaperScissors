const imgs = Array.from(document.querySelectorAll(".boxImg"));
const playerScore1 = document.querySelector(".userScore");
const cpuScore1 = document.querySelector(".cpuScore");
const playerChoice = document.querySelector(".player-select")
const computerChoice = document.querySelector(".computer-select")

let playerScore = 0;
let computerScore = 0;

//Allows clicking on image
imgs.forEach((image) =>
    image.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        game(image.dataset.image);
    })
);

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let results = '';

    if (playerSelection === computerSelection) {
        results = `It is a tie. Both of you chose ${playerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        // playerScore = playerScore + 1;
        results = "You win! Rock beats scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        // playerScore = playerScore + 1;
        results = "You win! Paper beats rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        // playerScore = playerScore + 1;
        results = "You win! Scissors beats paper!";
    }
    else {
        // computerScore = computerScore + 1;
        results = `You lose! ${computerSelection} beats ${playerSelection} !`;
    }
    return results;
}
function insertChoice(textResult) {
    const p = document.createElement('p');
    p.textContent = textResult;
    return p;
}

function game(selection) {
    let playerSelection = selection.toLowerCase();
    let computerSelection = computerPlay();

    let roundRes = playRound(playerSelection, computerSelection);

    if (roundRes.search('You win!') >= 0) {
        playerScore++;
        console.log("USER "+ playerScore);
    } else if (roundRes.search('You lose!') >= 0) {
        computerScore++;
        console.log("CPU " + computerScore);

    }

    if (playerScore >= 5 && computerScore < 5) {
        let last = 'Game over. You Win!!!';
        return last;
    } else if (playerScore < 5 && computerScore >= 5) {
        let last = 'GAME OVER. YOU LOSE!!!';
        return last;
    }
    playerScore1.textContent = playerScore;
    cpuScore1.textContent = computerScore;
    playerChoice.appendChild(insertChoice(playerSelection));
    computerChoice.appendChild(insertChoice(computerSelection));

}
