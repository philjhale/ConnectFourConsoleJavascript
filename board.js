'use strict';

function Board(numberOfColumns, numberOfRows) {
  this.numberOfColumns = numberOfColumns || 7;
  this.numberOfRows = numberOfRows || 6;
  var _grid = null;
}

Board.prototype._createGrid = function _createGrid(width, height) {
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
};

// TODO Check my usage of this
// TODO Don't like this
Board.prototype._getGrid = function _getGrid() {
  if (!this._grid) {
    this._grid = this._createGrid(this.numberOfColumns, this.numberOfRows);
  }

  return this._grid;
};

Board.prototype.display = function display() {
  var x, y;
  var line = '';
  for (y = this._getGrid()[0].length - 1; y >= 0; y -= 1) {
    for (x = 0; x < this._getGrid().length; x += 1) {
      line += this._getGrid()[x][y] + '\t';
    }
    console.log(line);
    line = '';
  }
  console.log("----------------------------------");
};

Board.prototype._isNumeric = function _isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

Board.prototype._isColumnFull = function _isColumnFull(columnIndex) {
  for(var y = 0; y < this.numberOfRows; y += 1) {
    if (this._getGrid()[columnIndex][y] === '-') { // TODO Not a great check
      return false;
    }
  }
  
  return true;
}

Board.prototype._isValidDrop = function _isValidDrop(columnIndexStr) {
  var columnIndex;

  if (!this._isNumeric(columnIndexStr)) {
    return false;
  }

  columnIndex = Number(columnIndexStr);
  if (columnIndex < 0 || columnIndex > this._getGrid().length) {
    return false;
  }

  if (this._isColumnFull(columnIndex)) {
    return false;
  }

  return true;
};

Board.prototype._getNextEmptyRowIndex = function _getNextEmptyRowIndex(columnIndex) {  
  for(var y = 0; y < this.numberOfRows; y += 1) {
    if (this._getGrid()[columnIndex][y] === '-') { // TODO Not a great check
      return y;
    }
  }
  
  // TODO Change?
  throw "Column full";
};

Board.prototype.drop = function drop(disc, columnNumber) {
  // TODO Check valid move
  var columnIndex = columnNumber - 1;

  //  TODO Place in correct place
  this._getGrid()[columnIndex][this._getNextEmptyRowIndex(columnIndex)] = disc;

  return this._getGrid();
};

module.exports = Board;