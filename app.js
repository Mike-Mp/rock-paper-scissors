        let playerScore = 0;
        let computerScore = 0;
        let choices = ['rock', 'paper', 'scissors'];

        game();

        function computerPlay() {
            let random = Math.floor(Math.random() * 2 + 1);
            let compChoice = choices[random];
            return compChoice;
        }

        function game() {
            while (playerScore < 5 && computerScore < 5) {
                let playerSelection = prompt('rock, paper or scissors?');
                let computerSelection = computerPlay();
                playerSelection = playerSelection.toUpperCase();
                computerSelection = computerSelection.toUpperCase();
                console.log(round(playerSelection, computerSelection));
            }
            winner();
        }

        function round(playerSelection, computerSelection) {
            if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
                playerScore += 1;
                console.log('Rock beats scissors! Player wins round.')
            } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
                playerScore += 1;
                console.log("Paper beats rock! Player wins round.");
            } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
                playerScore += 1;
                console.log("Scissors beats paper! Player wins round.");
            } else if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
                console.log("Tie! Try again");
            } else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
                console.log("Tie! Try again");
            } else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
                console.log("Tie! Try again");
            } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
                computerScore += 1;
                console.log("Rock beats scissors! Computer wins round.");
            } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
                computerScore += 1;
                console.log("Paper beats rock. Computer wins round!");
            } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
                computerScore += 1;
                console.log("Scissors beat paper! Computer wins round.");
            }
        }

        function winner() {
            if (playerScore >= 5) {
                console.log('Player wins the game!');
            } else if (computerScore >= 5) {
                console.log("Computer wins the game!");
            }
        }
