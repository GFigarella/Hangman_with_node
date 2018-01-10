//require words file to load the word
// var word = require ("./words.js");
var inquirer = require('inquirer');

var word = "We The Kings"
var letterArr = [];
var guessLeft = 5;
var wordToGuess = [];


for (var i = 0; i<word.length; i++){
    if (word.charAt(i)==" "){
        wordToGuess.push(" ");
    }
    else{
        wordToGuess.push("_");
    }
}

var display = wordToGuess.join(" ");
console.log(word);
console.log(display);


// letter.js will hold the logic that will compare the user input to the chosen word
function compareWord(){
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter: "
        }]).then(function(answers) {

            var letter = answers.letter;
            console.log(word.indexOf(letter));
            switch(guessLeft){
                case 1:
                     console.log("NO MORE ATTEMPTS, YOU LOST!");
                break;

                default:
                    if (word.indexOf(letter) == -1){
                        console.log(display);
                        guessLeft--;
                        console.log("INCORRECT! " + guessLeft + " guess(es) remaining");
                        compareWord();
                    }
                    else{
                        for (var i=0; i<word.length; i++){
                            if (letter == word.charAt(i)){
                                wordToGuess[i] = letter;
                                var display = wordToGuess.join(" ");
                                console.log(display);
                            }
                            else{}
                            compareWord();
                        }
                    }
                break;
            }

        //     if (guessLeft == 1){
        //         console.log("NO MORE ATTEMPTS, YOU LOST!");
        //         return
        //     }
        //     if (word.indexOf(letter)== -1){
        //         guessLeft--;
        //         console.log("INCORRECT! " + guessLeft + " guess(es) remaining");
        //         compareWord();
        //     }
        //     for (var i = 0; i<word.length; i++){} 
        });
}

compareWord();



var letters = function(word){
    this.word = word;
}