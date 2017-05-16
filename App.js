(function(){

  var gameState = require("Game-State.js");
  var gameLoop = require("Game-Loop.js");
  var wordPicker = require("Word-Picker.js");
  var gameDisplay = require("Game-Display.js");

  gameLoop.init(gameState, wordPicker, gameDisplay);

})();
