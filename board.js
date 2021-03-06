'use strict';

var solver = require('./solver');
var Grid = require('./grid');

function Board(numberOfColumns, numberOfRows) {
  var grid;
  var self = this;
  this.numberOfColumns = numberOfColumns || 7;
  this.numberOfRows = numberOfRows || 6;
  this.lastDropColumnIndex = -1;
  this.lastDropRowIndex = -1;

  grid = new Grid(this.numberOfColumns, this.numberOfRows, '-');

  this.isColumnFull = function isColumnFull(columnIndex) {
    var y;
    for (y = 0; y < self.numberOfRows; y += 1) {
      if (grid.isEmpty(columnIndex, y)) {
        return false;
      }
    }

    return true;
  };

  this.isValidDrop = function isValidDrop(columnIndex) {
    if (columnIndex < 0 || columnIndex >= self.numberOfColumns) {
      return false;
    }

    if (self.isColumnFull(columnIndex)) {
      return false;
    }

    return true;
  };

  this.getNextEmptyRowIndex = function getNextEmptyRowIndex(columnIndex) {
    var y;
    for (y = 0; y < self.numberOfRows; y += 1) {
      if (grid.isEmpty(columnIndex, y)) {
        return y;
      }
    }

    throw new Error('Column full');
  };

  this.display = function display() {
    var x;
    var y;
    var line = '';

    for (x = 1; x <= self.numberOfColumns; x += 1) {
      line += x + '\t';
    }
    console.log(line);

    line = '';
    for (y = self.numberOfRows - 1; y >= 0; y -= 1) {
      for (x = 0; x < self.numberOfColumns; x += 1) {
        line += grid.get(x, y) + '\t';
      }
      console.log(line);
      line = '';
    }
    console.log('-------------------------------------------------');
  };

  this.drop = function drop(columnNumber, disc) {
    var columnIndex = columnNumber - 1;
    self.lastDropColumnIndex = columnIndex;

    if (!self.isValidDrop(columnIndex)) {
      throw new Error('Errors!'); // TODO Handle or change?
    }

    self.lastDropRowIndex = self.getNextEmptyRowIndex(columnIndex);
    grid.set(columnIndex, self.lastDropRowIndex, disc);
  };

  this.isConnectFour = function isConnectFour() {
    return solver.isConnectFour(grid, self.lastDropColumnIndex, self.lastDropRowIndex);
  };

  this.getDiscAt = function getDiscAt(x, y) {
    return grid.get(x, y);
  };
}

module.exports = Board;
