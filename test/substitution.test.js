// Write your tests here!
const { substitution } = require("../src/substitution.js");
const { expect } = require("chai");

describe("substitution() tests written by Dhruv", () => {
  describe("encoding a message", () => {
    it("should encode a message according to subsitution cipher", () => {
      const expected = "jrufscpw";
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      expect(actual).to.equal(expected);
    });

    it("should encode even if cipher has special characters", () => {
      const expected = "";
      const actual = "";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message according to substitution cipher", () => {
      const expected = "thinkful";
      const actual = substitution(
        "jrufscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout", () => {
      const expected = "you are an excellent spy";
      const actual = substitution(
        "elp xhm xf mbymwwmfj dne",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      expect(actual).to.equal(expected);
    });

    it("should decode even if message has special characters", () => {
      const expected = "";
      const actual = "";
      expect(actual).to.equal(expected);
    });
  });
});
