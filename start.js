'use strict';

var Board = require("./board");
var HumanPlayer = require("./human-player");
var ComputerPlayer = require("./computer-player");
var Game = require("./game");

var humanPlayer = new HumanPlayer("Phil", "R");
var computerPlayer = new ComputerPlayer("Dr Robotnik", "Y");
var board = new Board(7, 6);
var game = new Game(humanPlayer, computerPlayer, board).play();
