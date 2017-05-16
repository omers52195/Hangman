(function(){
    "use strict";

    var gameState = require("./Game-State");
    var gameLoop = require("./Game-Loop");
    var wordPicker = require("./Word-Picker");
    var gameDisplay = require("./Game-Display");

    gameLoop.init(gameState, wordPicker, gameDisplay);

})();
