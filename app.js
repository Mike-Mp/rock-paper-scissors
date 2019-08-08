let playerScore = 0;
let compScore = 0;
let ties = 0;
let roundNum = 0;
let compChoices = ['rock', 'paper', 'scissors'];

const textPlayerScore = document.querySelector('#player-score');
const textComputerScore = document.querySelector('#computer-score');
const roundNumber = document.querySelector('#round-result');
const winnerText = document.querySelector('#winner-text');

const printPlayerScore = () => {
    textPlayerScore.textContent = `Player score: ${playerScore}`;
}
const printComputerScore = () => {
    textComputerScore.textContent = `Computer score: ${compScore}.`;
}
const printRoundNum = () => {
    roundNumber.textContent = `Round number: ${roundNum}`;
}

const printWinnerText = (winner) => {
    winnerText.textContent = `The winner is: ${winner}`;
}

const hideWinner = () => {
    winnerText.classList.add('hidden');
}

const revealWinner = () => {
    winnerText.classList.remove('hidden');
}

game();

function game() {
    if (playerScore < 5 && compScore < 5) {

document.querySelector('#rock').addEventListener('click', function () {
    round('rock');
});
document.querySelector('#paper').addEventListener('click', function () {
    round('paper');
});
document.querySelector('#scissors').addEventListener('click', function () {
    round('scissors');
});

    hideWinner();
    }
checkWinner();
}


    
    function computerPlay() {
        let random = Math.floor(Math.random() * 2) + 1;
        compChoice = compChoices[random];
        return compChoice;
    }

    function round(playerSelection) {
        let compSelection = computerPlay();
        switch (playerSelection + compSelection) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                playerScore += 1;
                roundNum += 1;
                printPlayerScore();
                printComputerScore();
                printRoundNum();
                checkWinner();
                console.log(`${playerSelection.toLowerCase()} wins over ${compSelection.toLowerCase()}.`);
                console.log(`Current score: Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                compScore += 1;
                roundNum += 1;
                printPlayerScore();
                printComputerScore();
                printRoundNum();
                console.log(`${playerSelection.toLowerCase()} loses over ${compSelection.toLowerCase()}.`);
                console.log(`Current score: Player: ${playerScore}. Computer: ${compScore}.`);
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                ties += 1;
                roundNum += 1;
                printPlayerScore();
                printComputerScore();
                printRoundNum();
                console.log(`${playerSelection.toLowerCase()} vs ${compSelection.toLowerCase()}.`);
                console.log(`Number of ties: ${ties}.`);
            break;
        }
        checkWinner();
    }
    
    function checkWinner() {
                if (playerScore >= 5) {
                    console.log("Player wins the match!");
                    console.log(`The final score is: Player-${playerScore} Computer-${compScore}. Number of ties: ${ties}.`);
                    revealWinner();
                    printWinnerText('Player');
                    playerScore = 0;
                    compScore = 0;
                    ties = 0;
                    roundNum = 0;
                } else if (compScore >= 5) {
                    console.log("Computer wins the match!");
                    console.log(`The final score is: Player-${playerScore} Computer-${compScore}. Number of ties: ${ties}.`);
                    revealWinner();
                    printWinnerText('Computer');
                    playerScore = 0;
                    compScore = 0;
                    ties = 0;
                    roundNum = 0;
                } else if (ties >= 5) {
                    console.log("Match ends in tie!");
                    revealWinner();
                    printWinnerText('Tie!');
                    playerScore = 0;
                    compScore = 0;
                    ties = 0;
                    roundNum = 0;
                }
                
    }