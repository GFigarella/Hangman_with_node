//words.js will pick a word randomly from an array/object of words
//then it will generate an array of _'s corresponding to the word picked

// the constructor will have an object of words and will randomly pick one 
function pickWord(myWords, randNum){
    //object with words
    this.myWords = myWords;
    this.word = myWords[randNum];
} // pickWord ends here



module.exports = pickWord;