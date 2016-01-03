var expect = require("chai").expect;
var board = require("../board");

// https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
// http://chaijs.com/api/bdd/

describe("Board", function() {
  describe("isValidDrop", function() {
    it("cannot drop into non numeric column", function() {
      expect(board.isValidDrop("bumclouds")).to.equal(false);
    });

    it("cannot drop into column index -1", function() {
      expect(board.isValidDrop("-1")).to.equal(false);
    });

    it("cannot drop into column index greater than size of board", function() {
      expect(board.isValidDrop("8")).to.equal(false);
    });

    it("cannot drop into full column", function() {
      for (var i = 0; i < 6; i += 1) {
          board.drop(null, "1")
      }

      expect(board.isValidDrop("0")).to.equal(false);
    });

    it("can drop into first column", function() {
      expect(board.isValidDrop("0")).to.equal(true);
    });

    it("can drop into last column", function() {
      expect(board.isValidDrop("6")).to.equal(true);
    });
  });

  describe("drop", function() {
    it("can drop one", function() {
      var grid = board.drop("red", "1");
      expect(grid[0][0]).to.equal("red");
    });

    it("can drop two", function() {
      board.drop("R", "1");
      var grid = board.drop("R", "1");
      expect(grid[0][0]).to.equal("R");
      expect(grid[0][1]).to.equal("R");
    });
  });
});
