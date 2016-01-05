'use strict';

var readlineSync = require('readline-sync');

module.exports = {
  getRandomColumn: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  getColumnFromPlayer: function (min, max) {
    var columns = [];
    var selectionIndex;
    var i;

    for (i = min; i <= max; i += 1) {
      columns.push(i.toString());
    }

    selectionIndex = readlineSync.keyInSelect(columns, "Select column", { cancel: false });
    return Number(columns[selectionIndex]);
  }
};