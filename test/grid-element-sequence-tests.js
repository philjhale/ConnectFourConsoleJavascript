'use strict';

var expect = require("chai").expect;
var getGridElementSequence = require("../grid-element-sequence");
var Grid = require("../grid");
var direction = require("../direction");

describe("getGridElementSequence", function() {
  it("returns left to right sequence", function() {
    var grid = new Grid(4, 4);
    grid.set(0, 0, "R");
    grid.set(1, 0, "Y");
    grid.set(2, 0, "R");
    grid.set(3, 0, "Y");
    var lastDropPoint = { x: 1, y: 0 };

    var seq = getGridElementSequence(grid, lastDropPoint, direction.right);

    expect(seq[0]).to.equal("R");
    expect(seq[1]).to.equal("Y");
    expect(seq[2]).to.equal("R");
    expect(seq[3]).to.equal("Y");
  });

  it("returns bottom to top sequence", function() {
    var grid = new Grid(4, 4);
    grid.set(1, 0, "R");
    grid.set(1, 1, "Y");
    grid.set(1, 2, "R");
    grid.set(1, 3, "Y");
    var lastDropPoint = { x: 1, y: 3 };

    var seq = getGridElementSequence(grid, lastDropPoint, direction.up);

    expect(seq[0]).to.equal("R");
    expect(seq[1]).to.equal("Y");
    expect(seq[2]).to.equal("R");
    expect(seq[3]).to.equal("Y");
  });

  it("returns bottom left to top right sequence", function() {
    var grid = new Grid(4, 4);
    grid.set(0, 0, "R");
    grid.set(1, 1, "Y");
    grid.set(2, 2, "R");
    grid.set(3, 3, "Y");
    var lastDropPoint = { x: 2, y: 2 };

    var seq = getGridElementSequence(grid, lastDropPoint, direction.upRight);

    expect(seq[0]).to.equal("R");
    expect(seq[1]).to.equal("Y");
    expect(seq[2]).to.equal("R");
    expect(seq[3]).to.equal("Y");
  });

  it("returns bottom right to top left sequence", function() {
    var grid = new Grid(4, 4);
    grid.set(3, 0, "R");
    grid.set(2, 1, "Y");
    grid.set(1, 2, "R");
    grid.set(0, 3, "Y");
    var lastDropPoint = { x: 1, y: 2 };

    var seq = getGridElementSequence(grid, lastDropPoint, direction.upLeft);

    expect(seq[0]).to.equal("R");
    expect(seq[1]).to.equal("Y");
    expect(seq[2]).to.equal("R");
    expect(seq[3]).to.equal("Y");
  });
});
