'use strict';

var Board = require("./board");

//var readlineSync = require('readline-sync');

//var userName = readlineSync.question('May x have your name? :');
//console.log("you entered %s", userName);
var board = new Board();
board.display();
board.drop("R", 3);
board.display();
board.drop("R", 3);
board.display();