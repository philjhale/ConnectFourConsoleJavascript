'use strict';

var Board = require("./board");
var HumanPlayer = require("./human-player");
var ComputerPlayer = require("./computer-player");

function Game(player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = board;
}

Game.prototype.play = function () {
  this.board.display();
  this.board.drop("R", 3);
  this.board.display();
  this.board.drop("R", 3);
  this.board.display();
};

module.exports = Game;
