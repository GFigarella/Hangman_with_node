//words.js will pick a word randomly from an array/object of words
//then it will generate an array of _'s corresponding to the word picked

// the constructor will have an object of words and will randomly pick one 
function pickWord(){
    //object with words
    var myWords = ["How to train your dragon", "Eternal Sunshine Of The Spotless Mind", "The Matrix", "The Godfather", "Gone With The Wind"];
    var randNum = Math.floor((Math.random()*myWords.length))
    this.word = myWords[randNum];
    this.wordToGuess = [];
}

// loop that pushes _ to the letter array based on the word selected

// TO THINK OVER -> whether or not to run the loop that generates _s in hangman.js OR in words.js
var test = new pickWord();
for (var i = 0; i<test.word.length; i++){
    if (test.word.charAt(i)==" "){
        test.wordToGuess.push(" ");
    }
    else{
        test.wordToGuess.push("_");
    }
}

console.log(test.word.length);
// console.log(test.wordToGuess);
console.log(test.wordToGuess.join(" "));
// module.exports = pickWord;
// var test = "e";
// var test2 = "E";

// console.log(test == test2.toLowerCase());