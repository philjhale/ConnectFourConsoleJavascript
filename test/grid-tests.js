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
});
