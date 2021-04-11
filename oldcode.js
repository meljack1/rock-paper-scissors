// determines if player wins or not
let win;
// counts number of wins
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;
let computerSelection;

// picks random move for computer from rockPaperScissors array
function computerPlay() {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
}

// counts and announces player and computer wins from playRound function 
function countWins(win) {
    if (win == "win") {
        playerWinCount++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (win == "lose") {
        computerWinCount++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (win == "tie") {
        console.log("It's a tie!");
    } else {
        console.log("That's not how you play Rock Paper Scissors, baka!");
    }
}

// compares playerSelection to computerSelection to determine win/loss/tie
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock") {
        switch(computerSelection) {
            case "Rock": 
                win = "tie";
                break;
            case "Scissors":
                win = "win";
                break;
            case "Paper":
                win = "lose";
                break;
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        switch(computerSelection) {
            case "Rock": 
                win = "lose";
                break;
            case "Scissors":
                win = "tie";
                break;
            case "Paper":
                win = "win";
                break;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        switch(computerSelection) {
            case "Rock": 
                win = "win";
                break;
            case "Scissors":
                win = "lose";
                break;
            case "Paper":
                win = "tie";
                break;
        }
    } else {
        win = "error";
    }

    countWins(win);
}

// plays five rounds of rock paper scissors using playRound function
function game() {
    for (i = 0; i < 5; i++){
        // get player selection
        playerSelection = prompt("Rock, paper, scissors?");
        computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    }

    // compares playerWinCount to computerWinCount to determine overall winner after 5 rounds
    if(playerWinCount > computerWinCount){
        console.log("You win! Well done!");
    } else if(playerWinCount < computerWinCount) {
        console.log("You lose! Better luck next time.");
    } else {
        console.log("It's a tie!");
    }
}

game();
