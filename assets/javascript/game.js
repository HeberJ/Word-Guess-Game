//Global Variables
//####################################################################

//Array of words
var wordArray = ["Heber", "heber"];
//Chosing a random word
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];

//Empty Arrays
var underscoreArray = [];
var rightGuessArray = [];
var wrongGuessArray = []; 

//HTML Variables
var underscoreDiv = document.getElementById("underscores");


//Main()
//####################################################################

function createUnderscoreArray() {
    for (var i = 0; i < randWord.length; i++) {
        underscoreArray.push("_");
    }
    return underscoreArray;
}

underscoreDiv.textContent = createUnderscoreArray().join(" ");

// Listening for a key press
document.addEventListener("keypress", function () {
    //Translate key code to a string and stores in letter
    var letter = String.fromCharCode(event.keyCode);
    
    //Checking if the letter is in the word
    if (randWord.indexOf(letter) > -1) {
        //rightGuessArray.push(letter);
        writeToUnderscoreArray(letter);
        underscoreDiv.textContent = underscoreArray.join(" ");
    } else {
        wrongGuessArray.push(letter);
        //Append child of wrong guess div to show wrong letters

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

//Need to handle in case of uppercase letters