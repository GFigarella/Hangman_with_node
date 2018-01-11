//words.js will pick a word randomly from an array/object of words
//then it will generate an array of _'s corresponding to the word picked

// the constructor will have an object of words and will randomly pick one 
function pickWord(){
    //object with words
    this.wordBank = ["How to train your dragon", "Eternal Sunshine Of The Spotless Mind", "The Matrix", "The Godfather", "Gone With The Wind"];
    var myWords = ["How to train your dragon", "Eternal Sunshine Of The Spotless Mind", "The Matrix", "The Godfather", "Gone With The Wind"]; 
    var randNum = Math.floor((Math.random()*myWords.length))
    this.word = myWords[randNum];
    this.wordToGuess = [];
    this.underscores = function(){
        // loop that pushes _ to the letter array based on the word selected
        for (var i = 0; i<chosenWord.word.length; i++){
            if (chosenWord.word.charAt(i)==" "){
                chosenWord.wordToGuess.push(" ");
            }
            else{
                chosenWord.wordToGuess.push("_");
                //increasing count here to know the total # of letters that need to be guessed
                // count++;
            }
        } //for loop ends here
        console.log(chosenWord.wordToGuess.join(" "));
    } // underscores method ends here
} // pickWord ends here

var chosenWord = new pickWord();
var word = chosenWord.word;
var array = chosenWord.wordToGuess;
chosenWord.underscores();




module.exports = pickWord;