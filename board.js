'use strict';

function Board(numberOfColumns, numberOfRows) {
  this.numberOfColumns = numberOfColumns || 7;
  this.numberOfRows = numberOfRows || 6;
  var grid = null;
  var self = this;

  function createGrid(width, height) {
    var x, y;
    var column = [];
    var rows = [];
    for (x = 0; x < width; x += 1) {
      column = [];
      for (y = 0; y < height; y += 1) {
        column.push("-");
      }
      rows.push(column);
    }

    return rows;
  }

  grid = createGrid(this.numberOfColumns, this.numberOfRows);

  this.setDiscAt = function (x, y, disc) {
    grid[x][y] = disc;
  };

  this.getGrid = function () {
    return grid;
  };

  this.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  this.isColumnFull = function (columnIndex) {
    var y;
    for (y = 0; y < this.numberOfRows; y += 1) {
      if (self.getDiscAt(columnIndex, y) === '-') { // TODO Not a great check
        return false;
      }
    }

    return true;
  };

  this.isValidDrop = function (columnIndexStr) {
    var columnIndex;

    if (!self.isNumeric(columnIndexStr)) {
      return false;
    }

    columnIndex = Number(columnIndexStr);
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
      if (self.getDiscAt(columnIndex, y) === '-') { // TODO Not a great check
        return y;
      }
    }

    // TODO Change?
    throw "Column full";
  };
}

Board.prototype.drop = function drop(disc, columnNumber) {
  var columnIndex = Number(columnNumber) - 1;
  
  // TODO Check valid move
  if (!this.isValidDrop(columnIndex)) {
    throw "Errors!"; // TODO
  }

  // TODO Need to convert to number or at least check
  

  //  TODO Place in correct place
  this.setDiscAt(columnIndex, this.getNextEmptyRowIndex(columnIndex), disc);
};

Board.prototype.getDiscAt = function getDiscAt(x, y) {
  //console.log(x + ' ' + y);
  return this.getGrid()[x][y];
};

Board.prototype.display = function display() {
  var x, y;
  var line = '';
  for (y = this.numberOfRows - 1; y >= 0; y -= 1) {
    for (x = 0; x < this.numberOfColumns; x += 1) {
      line += this.getDiscAt(x, y) + '\t';
    }
    console.log(line);
    line = '';
  }
  console.log("----------------------------------");
};

module.exports = Board;
