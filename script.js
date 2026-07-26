let choices = ["rock", "paper", "scissors"];

let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

function getHumanChoice(choice) {
    if (choice === 1) {
        return "rock";
    }else if(choice === 2) {
        return "paper";
    }else if(choice === 3) {
        return "scissors";
    }else {
        return "invalid";
    }
}