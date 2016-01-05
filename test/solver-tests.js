'use strict';

var expect = require("chai").expect;
var solver = require("../solver");

function createGrid(width, height) {
    var x, y;
    var column = [];
    var rows = [];
    for (x = 0; x < width; x += 1) {
      column = [];
      for (y = 0; y < height; y += 1) {
        column.push("-");
      }
      rows.push(column);
    }

    return rows;
  }

describe("Solver", function() {
  var grid = createGrid(7, 6);
  
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
      grid[0][0] = "Y";
      grid[0][1] = "Y";
      grid[0][2] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(false);
    });
    /*
    - - - - - - -
    - - - - - - -
    Y - - - - - -
    Y - - - - - -
    Y - - - - - -
    Y - - - - - -
    */
    it("three vertical Ys is connect four", function() {
      grid[0][0] = "Y";
      grid[0][1] = "Y";
      grid[0][2] = "Y";
      grid[0][3] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(true);
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
      grid[1][1] = "Y";
      grid[2][1] = "Y";
      grid[3][1] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(false);
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
      grid[1][1] = "Y";
      grid[2][1] = "Y";
      grid[3][1] = "Y";
      grid[4][1] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(true);
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
      grid[1][1] = "Y";
      grid[2][2] = "Y";
      grid[3][3] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(false);
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
      grid[1][1] = "Y";
      grid[2][2] = "Y";
      grid[3][3] = "Y";
      grid[4][4] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(true);
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
      grid[6][0] = "Y";
      grid[5][1] = "Y";
      grid[4][2] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(false);
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
      grid[6][0] = "Y";
      grid[5][1] = "Y";
      grid[4][2] = "Y";
      grid[3][3] = "Y";
      expect(solver.isConnectFour(grid)).to.equal(true);
    });
  });
});