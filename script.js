// determine if player wins or not
let win;

// pick random move for computer
function computerPlay() {
    let rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
}

// return win or loss message
function winOrLose(win) {
    if (win == "win") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (win == "lose") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (win == "tie") {
        return "It's a tie!";
    } else {
        return "That's not how you play Rock Paper Scissors, baka!";
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


// get player selection
const playerSelection = prompt("Rock, paper, scissors?");

// get computer selection
const computerSelection = computerPlay();
