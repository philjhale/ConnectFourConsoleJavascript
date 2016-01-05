'use strict';

function Game(player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = board;

  var currentPlayerIndex = 1;
  var players = [player1, player2];

  this.getNextPlayer = function () {
    if (currentPlayerIndex === 1) {
      currentPlayerIndex = 0;
    } else {
      currentPlayerIndex = 1;
    }

    return players[currentPlayerIndex];
  };
}

Game.prototype.play = function () {
  var currentPlayer;
  var columnSelection;

  this.board.display();

  while (true) {
    currentPlayer = this.getNextPlayer();
    columnSelection = currentPlayer.getColumnInput(1, this.board.numberOfColumns);
    this.board.drop(columnSelection, currentPlayer.disc);

    this.board.display();

    if (this.board.isConnectFour()) {
      console.log("%s has won!", currentPlayer.name);
      break;
    }
  }
  //console.log(this.player2.getColumnInput());

  /*this.board.display();
  this.board.drop("R", 3);
  this.board.display();
  this.board.drop("R", 3);
  this.board.display();*/
};

module.exports = Game;
