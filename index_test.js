const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = "moo!";
      //exercise
      const result = Rooster.announceDawn();
      //verify
      assert.equal(expected, result);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a String", () => {
      const expected = "5";
      const result = Rooster.timeAtDawn(5);
      assert.strictEqual(result, expected);
    });

    it("throws an error if passed a number less than 0", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(-2);
      }, RangeError);
    });

    it("throws an error if passed a number more than 23", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(28);
      }, RangeError);
    });
  });

  
});
