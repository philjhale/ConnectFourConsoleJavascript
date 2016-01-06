'use strict';

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

function isConnectFourInArray(discs) {
  var fourDiscs, i;
  for (i = 0; i < discs.length - 4; i += 1) {
    fourDiscs = discs.slice(i, i + 1);
    // TODO Hard coded value
    if (fourDiscs.indexOf("-") > -1) {
      break;
    }

    if (containsSameValues(fourDiscs)) {
      return true;
    }
  }

  return false;
}

function getStartOfSequence(grid, lastDropPoint, direction) {
  var reverseDirection = {
    x: direction.x * -1,
    y: direction.y * -1
  };
  var currentPoint = lastDropPoint;
  var nextPoint = lastDropPoint;

  while (grid.isInBounds(nextPoint.x, nextPoint.y)) {
    currentPoint = nextPoint;
    nextPoint = {
      x: lastDropPoint.x + reverseDirection.x,
      y: lastDropPoint.y + reverseDirection.y
    };
  }

  return currentPoint;
}

function getSequence(grid, lastDropPoint, direction) {
  var currentPoint = getStartOfSequence(grid, lastDropPoint, direction);
  var nextPoint = currentPoint;
  var sequence = [];

  while (isInBounds(grid, nextPoint)) {
    sequence.push(nextPoint);
    nextPoint = {
      x: lastDropPoint.x + direction.x,
      y: lastDropPoint.y + direction.y
    };
  }
}

function isConnectFourInDirection(grid, lastDropPoint, direction) {
  var discSequence = getSequence(grid, lastDropPoint, direction);

  return isConnectFourInArray(discSequence);
}

var searchDirection = {
  up: {
    x: 1,
    y: 0
  },
  down: {
    x: 0,
    y: 1
  },
  upRight: {
    x: 1,
    y: 1
  },
  upLeft: {
    x: -1,
    y: 1
  }
};

module.exports = {
  isConnectFour: function (grid, lastDropX, lastDropY) {
    return false;

    var lastDropPoint = {
      x: lastDropX,
      y: lastDropY
    };

    if (isConnectFourInDirection(grid, lastDropPoint, searchDirection.up)) {
      return true;
    }

    if (isConnectFourInDirection(grid, lastDropPoint, searchDirection.down)) {
      return true;
    }

    if (isConnectFourInDirection(grid, lastDropPoint, searchDirection.upRight)) {
      return true;
    }

    if (isConnectFourInDirection(grid, lastDropPoint, searchDirection.upLeft)) {
      return true;
    }

    return false;
  }
};
