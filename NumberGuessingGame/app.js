//Generate a random number between 1 and 500
let randomNumber = parseInt((Math.random() * 100) + 1);

//Get all ELements you need
const submit = document.querySelector('#submit-button');
const restart = document.querySelector("#button-placeholder")
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.low-or-high');

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        //Grab guess from user
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100) {
        alert('Please enter a number less than 100!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            //Display previous guessed numbers
            displayGuesses(guess);
            //Check guess and display if wrong
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //Display clue if guess is too high or too low
    if (guess === randomNumber) {
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too High! Try again!`);
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h4>${message}</h4>`
}

function endGame() {
    //Clear user input
    userInput.value = '';
    //Disable user input button
    userInput.setAttribute('disabled', '');
    //Display Start new Game Button
    lowOrHigh.innerHTML += `<h5 id="restart"><u>Restart Game</u></h5>`
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#restart');
    newGameButton.addEventListener('click', function () {
        //Pick a new random number
        randomNumber = parseInt((Math.random() * 100) + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHigh.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
//Allow to restart game with restart button
//Change DIV to a form so it can accept the enter key
