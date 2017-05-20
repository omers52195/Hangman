(function(gameState) {
    "use strict";

    gameState = {
        word: "",
        lettersGuessed: [],
        getIncorrectGuesses: function() {
          var incorrectGuesses = 0;
          for (let i = 0; i < lettersGuessed.length; i++) {
            if ( word.indexOf(lettersGuessed[i]) == -1 ) {
               incorrectGuesses++ ;
            }
          }
          return incorrectGuesses;
        },
        makeGuessArray: function() {
          var guessArray = [];
          for (let i = 0; i < word.length; i++) {
            let nextLetter = "";
            if ( lettersGuessed.findIndex(word[i] > -1 ) {
              nextLetter = word[i];
            } else {
               nextLetter = "_";
            }
            guessArray.push(nextLetter);
          }
          return guessArray;
        },
        addLettersGuessed: function(letter) {
          lettersGuessed.push(letter);
        },
        makeValidLetterArray: function() {
          var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var validLetterArray = [];
          for (let i = 0; i < alphabet.length; i++) {
            let nextLetter = "_";
            if ( alphabet.findIndex(lettersGuessed[i]) == -1 ) {
               nextLetter = alphabet[i];
            }
            validLetterArray.push(nextLetter);
          }
          return validLetterArray;
        },
        // multi-function to replace makeGuessArray & makeValidLetterArray
        showLettersInArray: function(sampleStr, foundArray, showBool) {
          var differenceArray = [];
          for (let i = 0; i < sampleStr.length; i++) {
            let nextChar = "";
            if ( sampleStr.findIndex(foundArray[i]) == -1 ) {

            }
          }
        }
        // hiddenLetterChar: "_"
    }

})(module.exports);
