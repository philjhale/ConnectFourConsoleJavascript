'use strict';

var expect = require('chai').expect;
var playerInput = require('../player-input');

describe('Player input', function() {
  describe('getRandomColumn', function() {
    it('returns number between 1 and 7', function() {
      expect(playerInput.getRandomColumn(1, 7)).to.be.above(0);
      expect(playerInput.getRandomColumn(1, 7)).to.be.below(8);
    });
  });
});