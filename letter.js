//require words file to load the word
// var word = require ("./words.js");
var inquirer = require('inquirer');

var word = "We The Kings"
var letterArr = [];
var guessLeft = 5;
var wordToGuess = [];
//using variable count to keep track of how many letters-to-guess are left
var count = 0;


for (var i = 0; i<word.length; i++){
    if (word.charAt(i)==" "){
        wordToGuess.push(" ");
    }
    else{
        wordToGuess.push("_");
        //increasing count here to know the total # of letters that need to be guessed
        count++;
    }
}

var display = wordToGuess.join(" ");
console.log(word);
console.log(count);
console.log(display);


// letter.js will hold the logic that will compare the user input to the chosen word
function compareWord(){
    //this if checks if the count is 1. This way, the program knows when the user has guessed the entire word.
    if (count == 1){
        console.log("SWEET, YOU WON! GOOD JOB!");
    }
    //if count is not 1 yet, then the user keeps going
    else{
        //ask the user for an input letter
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter: "
            }]).then(function(answers) {
                var letter = answers.letter;
                //setting a wordLower var so that we can compare letter input regardless of if it's lower or uppercase
                var wordLower = word.toLowerCase();
                // switch statements for the logic needed when the user inputs a letter. It is based on # of guesses left
                switch(guessLeft){
                    //case when user runs out of guesses left
                    case 1:
                        console.log("NO MORE ATTEMPTS, YOU LOST!");
                    break;

                    //user still has attempts left
                    default:
                        //checks to see if the input is in the chosen word. -1 means it's not
                        if (wordLower.indexOf(letter) == -1){
                            console.log(display);
                            guessLeft--;
                            console.log("INCORRECT! " + guessLeft + " guess(es) remaining");
                            compareWord();
                        }
                        //code for when the guessed letter is correct
                        else{
                            for (var i=0; i<word.length; i++){
                                if (letter == wordLower.charAt(i)){
                                    //using word.charAt(i) so that the final display shows uppercases where they belong. Housekeeping stuff.
                                    wordToGuess[i] = word.charAt(i);
                                }
                            }
                            console.log("GOOD GUESS, KEEP IT UP!");
                            display = wordToGuess.join(" ");
                            //decrease count here to keep track of how many letters-to-guess are left
                            count--;
                            console.log(display);
                            compareWord();
                        }
                    break; //switch ends here
                }
            }); // promise ends here
    }
}

compareWord();



var letters = function(word){
    this.word = word;
}