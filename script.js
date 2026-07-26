let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const WINNING_RULES = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

function getHumanChoice() {
    let choice = parseInt(prompt("Enter your choice:\n1 - rock\n2 - paper\n3 - scissors"));
    if (choice === 1) {
        return "rock";
    }else if(choice === 2) {
        return "paper";
    }else if(choice === 3) {
        return "scissors";
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }else if(WINNING_RULES[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanChoice += 1;
    }else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
};

