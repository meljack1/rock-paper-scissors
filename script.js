// determines if player wins or not
let win;
// counts number of wins
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;
let computerSelection;

const resultDiv = document.querySelector('#resultDiv');
const resultText = document.createElement("p");

const bulbasaurOpponent = document.querySelector('#bulbasaurOppImg');
const charmanderOpponent = document.querySelector('#charmanderOppImg');
const squirtleOpponent = document.querySelector('#squirtleOppImg');

// adds player and opponent score to page
const playerScore = document.querySelector('#playerScore');
const playerScoreText = document.createElement("p");
playerScoreText.classList.add('playerScore');
playerScoreText.textContent = `Score: ${playerWinCount}`;
playerScore.appendChild(playerScoreText);

const opponentScore = document.querySelector('#opponentScore');
const opponentScoreText = document.createElement("p");
opponentScoreText.classList.add('opponentScore');
opponentScoreText.textContent = `Score: ${computerWinCount}`;
opponentScore.appendChild(opponentScoreText);


function printPlayerWin() {
    resultText.textContent = "Your Pokémon defeated your opponent. You win!";
    resultDiv.appendChild(resultText);
    battleMusic.pause();
    winMusic.play();
}

function printComputerWin() {
    resultText.textContent = "Your opponent's Pokémon were too strong. You lose...";
    resultDiv.appendChild(resultText);
    battleMusic.pause();
}

const battleMusic = document.querySelector('#battleMusic');
const winMusic = document.querySelector('#winMusic');
battleMusic.autoplay = true;

// resets opponent selection animation
function resetSelected() {
    bulbasaurOpponent.classList.remove("selected");
    charmanderOpponent.classList.remove("selected");
    squirtleOpponent.classList.remove("selected");
}

// plays a round if bulbasaur/charmander/squirtle clicked
const bulbasaurPlayer = document.querySelector('#bulbasaurPlayer');
bulbasaurPlayer.addEventListener('click', () => {
    if (playerWinCount < 5 && computerWinCount < 5) {
        resetSelected();
        playerSelection = "Bulbasaur";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } 
});

const charmanderPlayer = document.querySelector('#charmanderPlayer');
charmanderPlayer.addEventListener('click', () => {
    if (playerWinCount < 5 && computerWinCount < 5) {
        resetSelected();
        playerSelection = "Charmander";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } 
});

const squirtle = document.querySelector('#squirtlePlayer');
squirtlePlayer.addEventListener('click', () => {
    if (playerWinCount < 5 && computerWinCount < 5) {
        resetSelected();
        playerSelection = "Squirtle";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } 
});

// picks random move for computer from rockPaperScissors array
function computerPlay() {
    let pokemonArray = ["Bulbasaur", "Charmander", "Squirtle"];
    let random = Math.floor(Math.random() * pokemonArray.length);
    let result = pokemonArray[random];

    if (result == "Bulbasaur") {
        bulbasaurOpponent.classList.add("selected");
    } else if (result == "Charmander") {
        charmanderOpponent.classList.add("selected");
    } else {
        squirtleOpponent.classList.add("selected");
    }
    
    return result;
}

// counts and announces player and computer wins from playRound function 
function countWins(win) {

    if (win == "win") {
        playerWinCount++;
        if (playerWinCount == 5) {
            printPlayerWin();
        } else if (computerWinCount == 5) {
            printComputerWin();
        } else {
        resultText.classList.add('resultText');
        resultText.textContent = `Your moves are super effective! ${playerSelection} beats ${computerSelection}!`;
        resultDiv.appendChild(resultText);
        }

        playerScoreText.textContent = `Score: ${playerWinCount}`;
        playerScore.appendChild(playerScoreText);
    } else if (win == "lose") {
        computerWinCount++;
        if (playerWinCount == 5) {
            printPlayerWin();
        } else if (computerWinCount == 5) {
            printComputerWin();
        } else {
        resultText.classList.add('resultText');
        resultText.textContent = `Your moves are not very effective. ${computerSelection} beats ${playerSelection}!`;
        resultDiv.appendChild(resultText);
        }

        opponentScoreText.textContent = `Score: ${computerWinCount}`;
        opponentScore.appendChild(opponentScoreText);
    } else if (win == "tie") {
        resultText.classList.add('resultText');
        resultText.textContent = "Both Pokémon fought really hard... and passed out. It's a tie!";
        resultDiv.appendChild(resultText);
    } else {
        resultText.classList.add('resultText');
        resultText.textContent = "Something went horribly wrong...";
        resultDiv.appendChild(resultText);
    }
}

// compares playerSelection to computerSelection to determine win/loss/tie
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "Bulbasaur") {
        switch(computerSelection) {
            case "Bulbasaur": 
                win = "tie";
                break;
            case "Squirtle":
                win = "win";
                break;
            case "Charmander":
                win = "lose";
                break;
        }
    } else if (playerSelection == "Charmander") {
        switch(computerSelection) {
            case "Squirtle": 
                win = "lose";
                break;
            case "Charmander":
                win = "tie";
                break;
            case "Bulbasaur":
                win = "win";
                break;
        }
    } else if (playerSelection == "Squirtle") {
        switch(computerSelection) {
            case "Charmander": 
                win = "win";
                break;
            case "Bulbasaur":
                win = "lose";
                break;
            case "Squirtle":
                win = "tie";
                break;
        }
    } else {
        win = "error";
    }

    countWins(win);
}

 
