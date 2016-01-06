'use strict';

var solver = require("./solver");
var Grid = require("./grid");

function Board(numberOfColumns, numberOfRows) {
  this.numberOfColumns = numberOfColumns || 7;
  this.numberOfRows = numberOfRows || 6;
  this.lastDropColumnIndex;
  this.lastDropRowIndex;
  var grid = new Grid(this.numberOfColumns, this.numberOfRows, "-");
  var self = this;

  this.isColumnFull = function (columnIndex) {
    var y;
    for (y = 0; y < self.numberOfRows; y += 1) {
      if (grid.isEmpty(columnIndex, y)) {
        return false;
      }
    }

    return true;
  };

  this.isValidDrop = function (columnIndex) {

    if (columnIndex < 0 || columnIndex >= self.numberOfColumns) {
      return false;
    }

    if (self.isColumnFull(columnIndex)) {
      return false;
    }

    return true;
  };

  this.getNextEmptyRowIndex = function (columnIndex) {
    var y;
    for (y = 0; y < self.numberOfRows; y += 1) {
      if (grid.isEmpty(columnIndex, y)) {
        return y;
      }
    }

    throw "Column full";
  };

  this.display = function () {
    var x, y;
    var line = '';

    for (x = 1; x <= self.numberOfColumns; x += 1) {
      line += x + "\t";
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
    console.log("-------------------------------------------------");
  };

  this.drop = function (columnNumber, disc) {
    var columnIndex = columnNumber - 1;
    self.lastDropColumnIndex = columnIndex;

    if (!self.isValidDrop(columnIndex)) {
      throw "Errors!"; // TODO Handle or change?
    }

    self.lastDropRowIndex = self.getNextEmptyRowIndex(columnIndex);
    grid.set(columnIndex, self.lastDropRowIndex, disc);
  };

  this.isConnectFour = function () {
    return solver.isConnectFour(grid, self.lastDropColumnIndex, self.lastDropRowIndex);
  };
}

module.exports = Board;
