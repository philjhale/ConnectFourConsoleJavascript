var expect = require("chai").expect;
var board = require("../board");

// http://chaijs.com/api/bdd/

describe("Board", function() {
  describe("Testing valid drop", function() {
    it("cannot drop into column index -1", function() {
      expect(board.isValidDrop("-1")).to.equal(false);
    });

    it("cannot drop into column greater than size of board", function() {
      expect(board.isValidDrop("7")).to.equal(false);
    });

    it("cannot drop into non numeric column", function() {
      expect(board.isValidDrop("bumclouds")).to.equal(false);
    });

    it("can drop into first column", function() {
      expect(board.isValidDrop("0")).to.equal(false);
    });

    it("can drop into last column", function() {
      expect(board.isValidDrop("6")).to.equal(false);
    });
  });
});
