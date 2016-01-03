'use strict';

var Board = require("./board");

//var readlineSync = require('readline-sync');

//var userName = readlineSync.question('May x have your name? :');
//console.log("you entered %s", userName);
var gameBoard = new Board();
gameBoard.display();
gameBoard.drop("R", 3);
gameBoard.display();
