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
        alert(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }else if(WINNING_RULES[humanChoice] === computerChoice) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
};

function playGame() {
    let times = parseInt(prompt("Enter number rounds you want to play:"));
    while (times < 1) {
        alert("Please enter the positive number!");
        times = parseInt(prompt("Enter number rounds you want to play:"));
    }
    for (let i = 0; i < times; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    alert(`Thanks you for playing game! Your score: ${humanScore}. Computer score: ${computerScore}`);
}

