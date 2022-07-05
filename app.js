const imgs = Array.from(document.querySelectorAll(".boxImg"));
const playerScore1 = document.querySelector(".userScore");
const cpuScore1 = document.querySelector(".cpuScore");
// const playerChoice = document.querySelector(".player-select")
// const computerChoice = document.querySelector(".computer-select")
const last = document.querySelector('.last');


let playerScore = 0;
let computerScore = 0;

// Allows clicking on image
imgs.forEach((image) =>
    image.addEventListener('click', () => {
        if (playerScore >= 2 || computerScore >= 2) {
            return;
        }
        game(image.dataset.image);
    })
);

// generates computer option
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

// refresh page function 
function refreshPage() {
    window.location.reload();
}

// play round, if statements to compare choices
function playRound(playerSelection, computerSelection) {
    let results = '';

    if (playerSelection === computerSelection) {
        results = `It is a tie. Both of you chose ${playerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        results = "You win! Rock beats scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        results = "You win! Paper beats rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        results = "You win! Scissors beats paper!";
    }
    else {
        results = `You lose! ${computerSelection} beats ${playerSelection} !`;
    }
    return results;
}

// creates text element
function insertChoice(textResult) {
    const p = document.createElement('p');
    p.textContent = textResult;
    return p;
}

// plays the game, adds/updates scores and shows results
function game(selection) {
    let playerSelection = selection.toLowerCase();
    let computerSelection = computerPlay();
    let roundRes = playRound(playerSelection, computerSelection);

    //searches for win and lose to add score
    if (roundRes.search('You win!') >= 0) {
        playerScore++;
    } else if (roundRes.search('You lose!') >= 0) {
        computerScore++;
    }

    playerScore1.textContent = playerScore;
    cpuScore1.textContent = computerScore;
    // playerChoice.appendChild(insertChoice(playerSelection));
    // computerChoice.appendChild(insertChoice(computerSelection));
    last.textContent = roundRes;

    if (playerScore >= 5 && computerScore < 5) {
        last.textContent = 'Game over. You Win!!!';

        //gets the div to add button
        let resetBtnDiv = document.getElementById("resetBtnDiv");
        // adds button to refresh
        const resetBtn = document.createElement('button');
        resetBtn.innerHTML = "Play Again?";
        resetBtn.className = "resetBtn";
        resetBtn.addEventListener("click", function () {
            refreshPage();
        });
        resetBtnDiv.appendChild(resetBtn);

    } else if (playerScore < 5 && computerScore >= 5) {
        last.textContent = 'GAME OVER. YOU LOSE!!!';

        //gets the div to add button
        let resetBtnDiv = document.getElementById("resetBtnDiv");
        // adds button to refresh
        const resetBtn = document.createElement('button');
        resetBtn.innerHTML = "Play Again?";
        resetBtn.className = "resetBtn";
        resetBtn.addEventListener("click", function () {
            refreshPage();
        });
        resetBtnDiv.appendChild(resetBtn);


    }
}
