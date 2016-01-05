'use strict';

var Board = require("./board");
var HumanPlayer = require("./human-player");
var ComputerPlayer = require("./computer-player");

var humanPlayer = new HumanPlayer("Phil", "R");
var computerPlayer = new ComputerPlayer("Dr Robotnik", "Y");
var board = new Board(7, 6);

board.display();
board.drop("R", 3);
board.display();
board.drop("R", 3);
board.display();
