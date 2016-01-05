'use strict';

function Player(name, disc, getColumnInput) {
  this.name = name;
  this.disc = disc;
  this.getColumnInput = getColumnInput;
}

module.exports = Player;
