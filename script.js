let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const WINNING_RULES = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

// DOM Elements
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const roundMessage = document.querySelector("#round-message");
const winnerAnnouncement = document.querySelector("#winner-announcement");
const resetBtn = document.querySelector("#reset-btn");
const choiceButtons = document.querySelectorAll(".choices-container .btn");

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    if (humanChoice === computerChoice) {
        roundMessage.textContent = `It's a tie! Both chose ${humanChoice}.`;
        roundMessage.className = "round-message tie";
    } else if (WINNING_RULES[humanChoice] === computerChoice) {
        humanScore += 1;
        roundMessage.textContent = `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
        roundMessage.className = "round-message win";
        animateScore(humanScoreSpan);
    } else {
        computerScore += 1;
        roundMessage.textContent = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
        roundMessage.className = "round-message lose";
        animateScore(computerScoreSpan);
    }

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    checkWinner();
}

function animateScore(element) {
    element.classList.add("bump");
    setTimeout(() => {
        element.classList.remove("bump");
    }, 300);
}

function checkWinner() {
    if (humanScore === 5) {
        winnerAnnouncement.textContent = "You won the game!";
        winnerAnnouncement.className = "winner-announcement player-win";
        endGame();
    } else if (computerScore === 5) {
        winnerAnnouncement.textContent = "Computer won the game!";
        winnerAnnouncement.className = "winner-announcement computer-win";
        endGame();
    }
}

function endGame() {
    choiceButtons.forEach((button) => {
        button.disabled = true;
    });
    resetBtn.classList.add("visible");
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    roundMessage.textContent = "Choose your weapon to start the game!";
    roundMessage.className = "round-message";
    winnerAnnouncement.textContent = "";
    winnerAnnouncement.className = "winner-announcement";
    resetBtn.classList.remove("visible");
    choiceButtons.forEach((button) => {
        button.disabled = false;
    });
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

resetBtn.addEventListener("click", resetGame);
