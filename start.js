'use strict';

var Board = require("./board");
var Player = require("./player");
var playerInput = require("./player-input");
var Game = require("./game");

var humanPlayer = new Player("Phil", "R", playerInput.getColumnFromPlayer);
var computerPlayer = new Player("Dr Robotnik", "Y", playerInput.getRandomColumn);
var board = new Board(7, 6);
var game = new Game(humanPlayer, computerPlayer, board).play();
