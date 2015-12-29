'use strict';

var board = require("./board");

//var readlineSync = require('readline-sync');

//var userName = readlineSync.question('May x have your name? :');
//console.log("you entered %s", userName);

board.display();
board.drop("R", 3);
board.display();
