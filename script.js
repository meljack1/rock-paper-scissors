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

function resetSelected() {
    bulbasaurOpponent.classList.remove("selected");
    charmanderOpponent.classList.remove("selected");
    squirtleOpponent.classList.remove("selected");
}

const bulbasaurPlayer = document.querySelector('#bulbasaurPlayer');
bulbasaurPlayer.addEventListener('click', () => {
    resetSelected();
    playerSelection = "Bulbasaur";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

const charmanderPlayer = document.querySelector('#charmanderPlayer');
charmanderPlayer.addEventListener('click', () => {
    resetSelected();
    playerSelection = "Charmander";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

const squirtle = document.querySelector('#squirtlePlayer');
squirtlePlayer.addEventListener('click', () => {
    resetSelected();
    playerSelection = "Squirtle";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
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
        resultText.classList.add('resultText');
        resultText.textContent = `Your moves are super effective! ${playerSelection} beats ${computerSelection}!`;
        resultDiv.appendChild(resultText);
    } else if (win == "lose") {
        computerWinCount++;
        resultText.classList.add('resultText');
        resultText.textContent = `Your moves are not very effective. ${computerSelection} beats ${playerSelection}!`;
        resultDiv.appendChild(resultText);
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

 
