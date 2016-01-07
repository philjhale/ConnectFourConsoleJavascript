'use strict';

var expect = require("chai").expect;
var solver = require("../solver");
var Grid = require("../grid");

describe("Solver", function() {
  var grid = new Grid(7, 6, "-");

  beforeEach(function() {
    grid = new Grid(7, 6, "-");
  });

  describe("isConnectFour", function() {
    /*
    - - - - - - -
    - - - - - - -
    - - - - - - -
    Y - - - - - -
    Y - - - - - -
    Y - - - - - -
    */
    it("three vertical Ys is not connect four", function() {
      grid.set(0, 0, "Y");
      grid.set(0, 1, "Y");
      grid.set(0, 2, "Y");
      var lastDropX = 0;
      var lastDropY = 0;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(false);
    });
    /*
    - - - - - - -
    - - - - - - -
    Y - - - - - -
    Y - - - - - -
    Y - - - - - -
    Y - - - - - -
    */
    it("four vertical Ys is connect four", function() {
      grid.set(0, 0, "Y");
      grid.set(0, 1, "Y");
      grid.set(0, 2, "Y");
      grid.set(0, 3, "Y");
      var lastDropX = 0;
      var lastDropY = 0;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(true);
    });
    /*
    - - - - - - -
    - - - - - - -
    - - - - - - -
    - - - - - - -
    - Y Y Y - - -
    - - - - - - -
    */
    it("three horizontal Ys is not connect four", function() {
      grid.set(1, 1, "Y");
      grid.set(2, 1, "Y");
      grid.set(3, 1, "Y");
      var lastDropX = 1;
      var lastDropY = 1;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(false);
    });

    /*
    - - - - - - -
    - - - - - - -
    - - - - - - -
    - - - - - - -
    - Y Y Y Y - -
    - - - - - - -
    */
    it("four horizontal Ys is connect four", function() {
      grid.set(1, 1, "Y");
      grid.set(2, 1, "Y");
      grid.set(3, 1, "Y");
      grid.set(4, 1, "Y");

      var lastDropX = 1;
      var lastDropY = 1;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(true);
    });

    /*
    - - - - - - -
    - - - - - - -
    - - - Y - - -
    - - Y - - - -
    - Y - - - - -
    - - - - - - -
    */
    it("three bottom left to top right diagonal Ys is not connect four", function() {
      grid.set(1, 1, "Y");
      grid.set(2, 2, "Y");
      grid.set(3, 3, "Y");
      var lastDropX = 1;
      var lastDropY = 1;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(false);
    });

    /*
    - - - - - - -
    - - - - Y - -
    - - - Y - - -
    - - Y - - - -
    - Y - - - - -
    - - - - - - -
    */
    it("four bottom left to top right diagonal Ys is connect four", function() {
      grid.set(1, 1, "Y");
      grid.set(2, 2, "Y");
      grid.set(3, 3, "Y");
      grid.set(4, 4, "Y");
      var lastDropX = 1;
      var lastDropY = 1;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(true);
    });

    /*
    - - - - - - -
    - - - - - - -
    - - - - - - -
    - - - - Y - -
    - - - - - Y -
    - - - - - - Y
    */
    it("three bottom right to top left diagonal Ys is not connect four", function() {
      grid.set(6, 0, "Y");
      grid.set(5, 1, "Y");
      grid.set(4, 2, "Y");
      var lastDropX = 6;
      var lastDropY = 1;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(false);
    });

    /*
    - - - - - - -
    - - - - - - -
    - - - Y - - -
    - - - - Y - -
    - - - - - Y -
    - - - - - - Y
    */
    it("four bottom right to top left diagonal Ys is connect four", function() {
      grid.set(6, 0, "Y");
      grid.set(5, 1, "Y");
      grid.set(4, 2, "Y");
      grid.set(3, 3, "Y");
      var lastDropX = 6;
      var lastDropY = 0;
      expect(solver.isConnectFour(grid, lastDropX, lastDropY)).to.equal(true);
    });
  });
});
