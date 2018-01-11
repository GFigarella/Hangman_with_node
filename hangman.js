var pickWord = require("./words.js");
var letter = require("./letter.js");
var inquirer = require('inquirer');


function playGame(){
    var restart = function() {
        console.log("test");
        inquirer.prompt([
            {
                name: "replay",
                message: "Game has finished! Want to play again? Y/N: "
            }]).then(function(answers) {
                if (answers.replay == "yes" || answers.replay == "Y" || answers.replay == "Yes" || answers.replay == "y"){
                    playGame();
                }
                else{
                    return;
                }
            }); //promise ends here
    } // restart ends here
    console.log(restart);
    //variables needed for words.js
    var myWords = ["How to train your dragon", "Eternal Sunshine Of The Spotless Mind", "The Matrix", "The Godfather", "Gone With The Wind"]; 
    var randNum = Math.floor((Math.random()*myWords.length))

    var chosenWord = new pickWord(myWords, randNum)

    // these variables are initialized for letter.js
    //using variable count to keep track of how many letters-to-guess are left
    var count = 0;
    var word = chosenWord.word;
    var wordToGuess = [];
    var guessLeft = 5;
    var correctLetter=[];

    // loop that generates _s for the chosen word
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

    var userHangman = new letter(count, word, wordToGuess, guessLeft, correctLetter, display, restart);
    userHangman
};


playGame();