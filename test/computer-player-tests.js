var expect = require("chai").expect;
var ComputerPlayer = require("../computer-player");

describe("ComputerPlayer", function() {
  var computerPlayer = new ComputerPlayer("Phil", "R");

  describe("constructor", function() {
    it("sets properties", function() {
      var player = new ComputerPlayer("Joe", "Stuff");
      expect(player.name).to.equal("Joe");
      expect(player.disc).to.equal("Stuff");
    });
  });

  describe("getColumnSelection", function() {
    it("returns number between 1 and 7", function() {
      expect(computerPlayer.getColumnSelection(1, 7)).to.be.above(0);
      expect(computerPlayer.getColumnSelection(1, 7)).to.be.below(8);
    });
  });
});
