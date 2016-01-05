'use strict';

function ComputerPlayer(name, disc) {
  this.name = name;
  this.disc = disc;
}

ComputerPlayer.prototype.getColumnSelection = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = ComputerPlayer;
