var expect = require("chai").expect;
var Player = require("../player");

describe("Player", function() {
  describe("constructor", function() {
    it("sets properties", function() {
      var player = new Player("Joe", "Stuff");
      expect(player.name).to.equal("Joe");
      expect(player.disc).to.equal("Stuff");
    });
  });
});
