'use strict';

function getStartOfSequence(grid, lastDropPoint, direction) {
  var reverseDirection = {
    x: direction.x * -1,
    y: direction.y * -1,
  };

  var currentPoint = lastDropPoint;
  var nextPoint = lastDropPoint;

  while (grid.isInBounds(nextPoint.x, nextPoint.y)) {
    currentPoint = nextPoint;

    nextPoint = {
      x: currentPoint.x + reverseDirection.x,
      y: currentPoint.y + reverseDirection.y,
    };
  }

  return currentPoint;
}

module.exports = function getGridElementSequence(grid, lastDropPoint, direction) {
  var currentPoint = getStartOfSequence(grid, lastDropPoint, direction);
  var nextPoint = currentPoint;
  var gridPointSequence = [];
  var gridObjectSequence = [];
  var i;

  while (grid.isInBounds(nextPoint.x, nextPoint.y)) {
    gridPointSequence.push(nextPoint);
    currentPoint = nextPoint;
    nextPoint = {
      x: currentPoint.x + direction.x,
      y: currentPoint.y + direction.y,
    };
  }

  for (i = 0; i < gridPointSequence.length; i += 1) {
    gridObjectSequence.push(grid.get(gridPointSequence[i].x, gridPointSequence[i].y));
  }

  return gridObjectSequence;
};
