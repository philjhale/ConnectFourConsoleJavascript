'use strict';

module.exports = (function () {
  var grid;

  function createGrid(width, height) {
    var x, y;
    var column = [];
    var rows = [];
    for (x = 0; x < width; x += 1) {
      column = [];
      for (y = 0; y < height; y += 1) {
        column.push(0); // TODO Replace with disc or something
      }
      rows.push(column);
    }

    return rows;
  }

  function display() {
    var x, y;
    var line = '';
    for (y = grid[0].length - 1; y >= 0; y -= 1) {
      for (x = 0; x < grid.length; x += 1) {
        line += grid[x][y] + '\t';
      }
      console.log(line);
      line = '';
    }
    console.log("----------------------------------");
  }

  function isNumeric (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function isValidDrop(columnIndexStr) {
    var columnIndex;

    if (!isNumeric(columnIndex)) {
      return false;
    }

    columnIndex = Number(columnIndexStr);
    if (columnIndex < 0 || columnIndex > grid.length) {
      return false;
    }

    // TODO Check column full

    return true;
  }

  function drop(disc, columnNumber) {
    // TODO Check valid move
    var columnIndex = columnNumber - 1;
    grid[columnIndex][0] = disc;
  }

  function init() {
    grid = createGrid(7, 6);
  }

  init();

  return {
    display: display,
    drop: drop,
    isValidDrop: isValidDrop
  };
}());
