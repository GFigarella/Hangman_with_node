//require words file to load the word
var word = require ("./words.js")

var word = "We The Kings"
var letter = [];

// loop that pushes _ to the letter array based on the word selected
for (var i = 0; i<word.length; i++){
    if (word.charAt(i)==" "){
        letter.push(" ");
    }

    else{
        letter.push("_");
    }
}

// compare user input to word


console.log(letter);
console.log(letter.join(" "));

var letters = function(word){
    this.word = word;
}