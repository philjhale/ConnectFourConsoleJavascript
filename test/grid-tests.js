'use strict';

var expect = require("chai").expect;
var Grid = require("../grid");

describe("Grid", function() {
  describe("constructor", function() {
    it("creates 2d array of specified size", function() {
      var grid = new Grid(2, 3, "-");
      expect(grid.width).to.equal(2);
      expect(grid.height).to.equal(3);
    });
  });

  describe("get and set", function() {
    it("set and get correct values", function() {
      var grid = new Grid(3, 3, "-");
      grid.set(2, 2, "Hello")
      expect(grid.get(2, 2)).to.equal("Hello");
    });
  });

  describe("isEmpty", function() {
    it("works", function() {
      var grid = new Grid(3, 3, "-");
      grid.set(1, 1, "Hello")
      expect(grid.get(1, 1)).to.equal("Hello");
      expect(grid.isEmpty(0, 0)).to.equal(true);
      expect(grid.isEmpty(1, 1)).to.equal(false);
    });
  });
  
  describe("isInBounds", function() {
    it("x less than 0 out of bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(-1, 1)).to.equal(false);
    });
    
    it("y less than 0 out of bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(1, -1)).to.equal(false);
    });
    
    it("x equal to width out of bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(3, 1)).to.equal(false);
    });
    
    it("x greater than width out of bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(4, 1)).to.equal(false);
    });
    
    it("y equal to height out of bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(1, 4)).to.equal(false);
    });
    
    it("y greater than height out of bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(1, 5)).to.equal(false);
    });
    
    it("x and y min is in bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(0, 0)).to.equal(true);
    });
    
    it("x and y max is in bounds", function() {
      var grid = new Grid(3, 4);
      expect(grid.isInBounds(2, 3)).to.equal(true);
    });
  });
});
