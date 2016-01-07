'use strict';

var getGridElementSequence = require("./grid-element-sequence");
var direction = require("./direction");

function containsSameValues(array) {
  var i;
  var valueToCompare = array[0];
  for (i = 1; i < array.length; i += 1) {
    if (valueToCompare !== array[i]) {
      return false;
    }
  }

  return true;
}

function isConnectFourInArray(discs, emptyCellValue) {
  var fourDiscs, i;

  for (i = 0; i < discs.length - 4; i += 1) {
    fourDiscs = discs.slice(i, i + 4);

    if (fourDiscs.indexOf(emptyCellValue) === -1 && containsSameValues(fourDiscs)) {
      return true;
    }
  }

  return false;
}

function isConnectFourInDirection(grid, lastDropPoint, searchDirection) {
  var discSequence = getGridElementSequence(grid, lastDropPoint, searchDirection);

  return isConnectFourInArray(discSequence, grid.emptyCellValue);
}

module.exports = {
  isConnectFour: function (grid, lastDropX, lastDropY) {

    var lastDropPoint = {
      x: lastDropX,
      y: lastDropY
    };

    if (isConnectFourInDirection(grid, lastDropPoint, direction.up)) {
      return true;
    }

    if (isConnectFourInDirection(grid, lastDropPoint, direction.right)) {
      return true;
    }

    if (isConnectFourInDirection(grid, lastDropPoint, direction.upRight)) {
      return true;
    }

    if (isConnectFourInDirection(grid, lastDropPoint, direction.upLeft)) {
      return true;
    }

    return false;
  }
};
