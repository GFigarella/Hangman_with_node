// var pickWord = require("./words.js");
var letter = require("./letter.js");
// var inquirer = require('inquirer');

// //using variable count to keep track of how many letters-to-guess are left
var count = 0;
var word = "We The Kings"
var wordToGuess = [];
var guessLeft = 5;
var correctLetter=[];

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

var userHangman = new letter(count, word, wordToGuess, guessLeft, correctLetter, display);
// userHangman.takeInput();

userHangman