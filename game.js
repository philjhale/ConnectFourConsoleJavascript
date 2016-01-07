'use strict';

function Game(player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.board = board;
  var self = this;

  var currentPlayerIndex = 1;
  var players = [player1, player2];

  function getNextPlayer() {
    if (currentPlayerIndex === 1) {
      currentPlayerIndex = 0;
    } else {
      currentPlayerIndex = 1;
    }

    return players[currentPlayerIndex];
  }

  this.play = function () {
    var currentPlayer;
    var columnSelection;

    self.board.display();

    while (true) {
      currentPlayer = getNextPlayer();
      console.log("%s's turn", currentPlayer.name);
      columnSelection = currentPlayer.getColumnInput(1, self.board.numberOfColumns);
      console.log("%s chose %d", currentPlayer.name, columnSelection);
      self.board.drop(columnSelection, currentPlayer.disc);

      self.board.display();

      if (self.board.isConnectFour()) {
        console.log("%s has won!", currentPlayer.name);
        break;
      }
    }
  };
}



module.exports = Game;
