'use strict';

var expect = require("chai").expect;
var Board = require("../board");

// https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
// http://chaijs.com/api/bdd/

describe("Board", function() {
  var board = new Board(7, 6);

  beforeEach(function() {
    board = new Board(7, 6);
  });

  describe("drop", function() {
    it("cannot drop into column index -1", function() {
      expect(board.drop.bind(board, "-1", "R")).to.throw("Errors!");
    });

    it("cannot drop into column index greater than size of board", function() {
      expect(board.drop.bind(board, "8", "R")).to.throw("Errors!");
    });

    it("cannot drop into full column", function() {
      for (var i = 0; i < 6; i += 1) {
          board.drop("1", "R")
      }

      expect(board.drop.bind(board, "0", "R")).to.throw("Errors!");
    });

    it("can drop into first column", function() {
      board.drop("1", "red");
      expect(board.getDiscAt(0, 0)).to.equal("red");
    });

    it("can drop into last column", function() {
      board.drop("7", "red");
      expect(board.getDiscAt(6, 0)).to.equal("red");
    });

    it("can drop two", function() {
      board.drop("1", "R");
      board.drop("1", "R");
      expect(board.getDiscAt(0, 0)).to.equal("R");
      expect(board.getDiscAt(0, 1)).to.equal("R");
    });
  });
});
