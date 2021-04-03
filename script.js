// determines if player wins or not
let win;
// counts number of wins
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;
let computerSelection;

// pick random move for computer
function computerPlay() {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
}

// return win or loss message
function winOrLose(win) {
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

// determine game result
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

    return winOrLose(win);
}

function game() {
    for (i = 0; i < 5; i++){
        // get player selection
        playerSelection = prompt("Rock, paper, scissors?");

        // get computer selection
        computerSelection = computerPlay();

        // play one round
        playRound(playerSelection, computerSelection);
    }

    // determines overall winner
    if(playerWinCount > computerWinCount){
        console.log("You win! Well done!");
    } else if(playerWinCount < computerWinCount) {
        console.log("You lose! Better luck next time.");
    } else {
        console.log("It's a tie!");
    }
}

game();
