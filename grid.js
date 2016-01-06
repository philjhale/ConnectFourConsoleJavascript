'use strict';

function Grid(width, height, emptyCellValue) {
  this.width = width;
  this.height = height;
  var emptyCellValue = emptyCellValue || '-';
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

  this.get = function get (x, y) {
    return grid[x][y];
  };

  this.set = function set (x, y, obj) {
    grid[x][y] = obj;
  };

  this.isEmpty = function isEmpty (x, y) {
    return grid[x][y] === self.emptyCellValue;
  };
}

Grid.prototype.get = function get (x, y) {
  return this.get(x, y);
};

Grid.prototype.set = function set (x, y, obj) {
  this.set(x, y, obj);
};

Grid.prototype.isEmpty = function isEmpty (x, y) {
  return this.isEmpty(x, y);
};

module.exports = Grid;
