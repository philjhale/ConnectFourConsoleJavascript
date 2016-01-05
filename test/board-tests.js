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
    it("cannot drop into non numeric column", function() {
      expect(board.drop.bind(board, "R", "bumclouds")).to.throw("Errors!");
    });

    it("cannot drop into column index -1", function() {
      expect(board.drop.bind(board, "R", "-1")).to.throw("Errors!");
    });

    it("cannot drop into column index greater than size of board", function() {
      expect(board.drop.bind(board, "R", "8")).to.throw("Errors!");
    });

    it("cannot drop into full column", function() {
      for (var i = 0; i < 6; i += 1) {
          board.drop("R", "1")
      }

      expect(board.drop.bind(board, "R", "0")).to.throw("Errors!");
    });

    it("can drop into first column", function() {
      board.drop("red", "1");
      expect(board.getDiscAt(0, 0)).to.equal("red");
    });

    it("can drop into last column", function() {
      board.drop("red", "7");
      expect(board.getDiscAt(6, 0)).to.equal("red");
    });

    it("can drop two", function() {
      board.drop("R", "1");
      board.drop("R", "1");
      expect(board.getDiscAt(0, 0)).to.equal("R");
      expect(board.getDiscAt(0, 1)).to.equal("R");
    });
  });
});
