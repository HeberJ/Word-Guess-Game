//Global Variables
//####################################################################

//Array of words
var wordArray = ["heber", "heber"];
//Chosing a random word
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];

//Empty Arrays
var underscoreArray = [];
var rightGuessArray = [];
var wrongGuessArray = []; 

//Dom Manipulation Variables
var underscoreDiv = document.getElementById("underscores");


//Main()
//####################################################################

function createUnderscoreArray() {
    for (var i = 0; i < randWord.length; i++) {
        underscoreArray.push("_");
    }
    return underscoreArray;
}
console.log(createUnderscoreArray());

// Listening for a key press
document.addEventListener("keypress", function () {
    //Translate key code to a string and stores in letter
    var letter = String.fromCharCode(event.keyCode);
    
    //
    if (randWord.indexOf(letter) > -1) {
        rightGuessArray.push(letter);
        writeToUnderscoreArray(letter);
        console.log(underscoreArray);
    } else {
        wrongGuessArray.push(letter);
        console.log(wrongGuessArray);
    }
});

//Replacing the underscore for the letter.
function writeToUnderscoreArray (letter) {
    //Handles the case of a letter being in the word more than once.
    for (var i = 0; i < randWord.length; i++) {
        if (letter == randWord[i]){
            underscoreArray[i] = randWord[i];
        }
    }
}

