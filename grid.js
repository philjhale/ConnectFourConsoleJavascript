'use strict';

function Grid(width, height, emptyCellValue) {
  this.width = width;
  this.height = height;
  this.emptyCellValue = emptyCellValue || '-';
  var self = this;

  var grid;

  function createGrid(width, height) {
    var x, y;
    var column = [];
    var rows = [];
    for (x = 0; x < width; x += 1) {
      column = [];
      for (y = 0; y < height; y += 1) {
        column.push(self.emptyCellValue);
      }
      rows.push(column);
    }

    return rows;
  }

  grid = createGrid(this.width, this.height);

  this.get = function (x, y) {
    return grid[x][y];
  };

  this.set = function (x, y, obj) {
    grid[x][y] = obj;
  };

  this.isEmpty = function (x, y) {
    return grid[x][y] === self.emptyCellValue;
  };

  this.isInBounds = function (x, y) {
    if (x < 0 || y < 0) {
      return false;
    }

    if (x >= this.width || y >= this.height) {
      return false;
    }

    return true;
  };
}

module.exports = Grid;
