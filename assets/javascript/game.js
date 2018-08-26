//Global Variables
//####################################################################

//Array of words
var wordArray = ["Hawks", "Celtics", "Hornets", "Bulls", "Cavaliers", "Mavericks", "Nuggets", "Pistons", "Warriors", "Rockets", "Pacers", "Clippers", "Lakers", "Heat", "Bucks", "Timberwolves", "Nets", "Knicks", "Magic", "76ers", "Suns", "Blazers", "Kings", "Spurs", "Supersonics", "Raptors", "Jazz", "Grizzlies", "Wizards", "Bullets"];
//Chosing a random word
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];

//Empty Arrays
var underscoreArray = [];
var rightArray = [];
var wrongGuessArray = [];
var countWrong = 0;

//HTML Variables
var underscoreDiv = document.getElementById("underscores");
var wrongGsDiv = document.getElementById("wrongGs");
var winDiv = document.getElementById("win");


//Main()
//####################################################################

function createUnderscoreArray() {
  for (var i = 0; i < randWord.length; i++) {
    underscoreArray.push("_");
  }
  return underscoreArray;
}

writeToRightArray();
underscoreDiv.textContent = createUnderscoreArray().join(" ");

// Listening for a key press
document.addEventListener("keypress", function () {

  //Translate key code to a string and stores in letter
  var letter = String.fromCharCode(event.keyCode);
  var smallLetter = letter.toLowerCase();
  var capsLetter = letter.toUpperCase();

  //Checking if the letter is in the word
  if (randWord.indexOf(smallLetter) > -1 || randWord.indexOf(capsLetter) > -1) {
    //rightArray.push(letter);
    writeToUnderscoreArray(letter);
    underscoreDiv.textContent = underscoreArray.join(" ");

  } else {
    if (wrongGuessArray.indexOf(capsLetter) === -1) {
      countWrong++;
    }
    wrongGuessArray.push(capsLetter);
    wrongGsDiv.textContent = wrongGuessArray.join(" ");
    
  }
  checkForWin();
  checkForLoss();
});

//Replacing the underscore for the letter.
function writeToUnderscoreArray(letter) {
  var smallLetter = letter.toLowerCase();
  var capsLetter = letter.toUpperCase();
  
  //Handles the case of a letter being in the word more than once.
  for (var i = 0; i < randWord.length; i++) {
    if (smallLetter === randWord[i] || capsLetter === randWord[i]) {
      underscoreArray[i] = randWord[i];
    }
  }
}

function writeToRightArray () {
  for (var j=0; j<randWord.length; j++) {
    rightArray[j] = randWord[j];
  }
}

function checkForWin () {
  if (underscoreArray.indexOf("_") === -1) {
    setTimeout(function(){ alert("WIN"); location.reload(); }, 100);
  }
}

function checkForLoss () {
  if (countWrong === 10) {
    setTimeout(function(){ alert("Sorry, You Lose..."); location.reload(); }, 100);
  }
}