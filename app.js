const options = ["Rock", "Paper", "Scissors"];

function computerPlay (){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}