// USES CASES
// 1) User Loads the Page
    // Render a random word but with an underscore representing each character in the word
// 2) User guesses a letter
    // If the user guesses a correct letter, display the letter in the appropiate position
    // else, if the user guesses incorrectly, decrement guesses remaining by 1
// 3) Game is over when the user runs out of guesses
    // Increment losses by 1, and ask the user if they'd like to play again
// 4) User guesses word correctly
    // increment wins by 1
    // ask the user if they'd like to play again

// VARIABLES
// declare a variable for storing a list of random words to choose from
    // store this data in an array
var wordBank = ['html', 'css', 'javascript'];
// declare a variable for wins and losses
var wins = 0;
var losses = 0;
// declare a variable to store gussessRemaining
var guessesRemaining = 8;
// declare a variable to store the randomWord
var randomWord;
// declare a variable to store the list of underscores
var underscoreArray = [];
// note: Iterate around the randomWord and on iteration, push an underscore in the underscores array

// FUNCTIONS
// setGame function is responsible for randomly choosing a random word an rendering it to the page as underscores
function setGame() {
    // reset variables for new game
    guessesRemaining = 8;
    randomWord = '';
    underscoreArray = [];
    // randomly select a word from our wordBank and set it equal to the randomWord variable
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log('WORD: ', randomWord);
    // Iterate around the randomWord and on each iteration, push an underscore in the underscores array
    for (let i = 0; i < randomWord.length; i++) {
        underscoreArray.push('_');
        
    };
    console.log('UNDERSCORE: ', underscoreArray);
    // display the list of underscores to the display-word div
    // utilize document.querySelector to select .display-word
        document.querySelector('.display-word').textContent = underscoreArray.join(' ');
        document.querySelector('.wins').textContent = wins;
        document.querySelector('.losses').textContent = losses;
        document.querySelector('.guesses-remaining').textContent = guessesRemaining;
    // utilize appendChild to render the list of underscores to the display-word div
    
}

// EVENT LISTENERS
// On Page Load
setGame();
// User clicks the keyboard
document.addEventListener("keydown", function(event) {
    // we refernce the value of the keyboard click via event.key
    var userGuess = event.key.toLowerCase();
    var alphabetCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    // if the value of the key is included in the alpah and  character list, then render the value to the page below
        if (alphabetCharacters.includes(userGuess)) {
            // console.log('USERGUESS: ', userGuess)
            // If the user guesses a correct letter,
            if (randomWord.indexOf(userGuess) > -1) {
            // check to see if userGuess is found in randomWord
                // display the letter in the appropiate position
                // reference the underscoreArray, and replace the correct position for the userGuess and display the character instead of the underscore
            console.log('CORRECT');

            //iterate around randomWord
            for (let i = 0; i < randomWord.length; i++) {
                //if a character in randomWord equals user guess
                if (randomWord[i] === userGuess) {
                // replace the same position in uderscores array w userGuess
                    underscoreArray[i] = userGuess   
                    };
                document.querySelector('.display-word').textContent = underscoreArray.join(' ');
                }; 
            // else, if the user guesses incorrectly, decrement guesses remaining by 1
            } else if (randomWord.indexOf(userGuess) === -1) {
            // decrement guesses remaining by 1
            guessesRemaining--;
            document.querySelector('.guesses-remaining').textContent = guessesRemaining;
            console.log('GUESSES REMAINING: ', guessesRemaining);
            // else if, 'you win'
            // condition for if the user guesses the word correctly
            } if (underscoreArray.join('') == randomWord) {
                // increment wins
                wins++;
                document.querySelector('.wins').textContent = wins;
                // ask user if they'd like to play again
                var playAgain = confirm('Fantastic, you win! Would you like to play again?');
                // if the user would like to play again, setup a new game. otherwise, report final wins and losses
                    if (playAgain) {
                        // if yes, reset the game
                        setGame();
                    } else {
                        // report final wins and losses
                        alert(`Wins: ${wins} Losses: ${losses}`);
                    }
            } if (guessesRemaining === 0) {
                losses++;
                document.querySelector('.losses').textContent = losses;
                // ask the user if they'd like to play again
                var playAgainLose = confirm('You lose. Would you like to try again?');
                if (playAgainLose){
                    // if yes, reset the game
                    setGame();
                } else {
                    // if no, display wins and losses
                    alert(`Thanks for playing. Wins: ${wins} Losses: ${losses}`);
                };
            }
        }
    }
);