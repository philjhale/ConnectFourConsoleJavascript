'use strict';

var readlineSync = require('readline-sync');

function HumanPlayer(name, disc) {
  this.name = name;
  this.disc = disc;
}

HumanPlayer.prototype.getColumnSelection = function (min, max) {
  var columns = [];
  var selectionIndex;
  var i;

  for (i = min; i <= max; i += 1) {
    columns.push(i.toString());
  }

  selectionIndex = readlineSync.keyInSelect(columns, "Select column", { cancel: false });
  return Number(columns[selectionIndex]);
};

module.exports = HumanPlayer;
