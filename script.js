// Game variables
let secretNumber;
let attempts = 0;
const maxAttempts = 10;

// Get HTML elements
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

// Generate a random number
function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Start or restart the game
function startGame() {
    secretNumber = generateNumber();
    attempts = 0;

    message.textContent = "Make your first guess!";
    attemptsDisplay.textContent = "Attempts: 0";

    guessInput.value = "";
    guessInput.disabled = false;
    checkButton.disabled = false;

    guessInput.focus();
}

// Check the player's guess
function checkGuess() {

    const guess = Number(guessInput.value);

    // Check whether the input is valid
    if (guess < 1 || guess > 100 || guessInput.value === "") {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    // Check the guess
    if (guess === secretNumber) {

        message.textContent =
            `🎉 Congratulations! You guessed the number in ${attempts} attempts!`;

        guessInput.disabled = true;
        checkButton.disabled = true;

    } else if (guess < secretNumber) {

        message.textContent = "⬆️ Too low! Try again.";

    } else {

        message.textContent = "⬇️ Too high! Try again.";
    }

    // Maximum attempts
    if (attempts >= maxAttempts && guess !== secretNumber) {

        message.textContent =
            `Game over! The number was ${secretNumber}.`;

        guessInput.disabled = true;
        checkButton.disabled = true;
    }
}

// Button events
checkButton.addEventListener("click", checkGuess);

restartButton.addEventListener("click", startGame);

// Start the game
startGame();