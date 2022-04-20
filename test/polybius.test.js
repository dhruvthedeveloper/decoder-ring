// Write your tests here!
const { polybius } = require("../src/polybius.js");
const { expect } = require("chai");

//ENCODING TESTS
describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode letters according to polybius square", () => {
      const expected = "4432423352125413";
      const actual = polybius("thinkful");
      expect(actual).to.be.equal(expected);
    });

    it("should return output as a string", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello world");
      expect(actual).to.be.a("string");
    });

    it("should maintain spaces throughout", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("hello world");
      expect(actual).to.be.equal(expected);
    });
  });
});

//DECODING TESTS
describe("polybius() tests written by Dhruv", () => {
  describe("decoding a message", () => {
    it("should decode letters according to polybius square", () => {
      const expected = "th(i/j)nkful";
      const actual = polybius("4432423352125413", false);
      expect(actual).to.be.equal(expected);
    });

    it("should return output as a string", () => {
      const actual = polybius("4432423352125413", false);
      expect(actual).to.be.a("string");
    });

    it("should maintain spaces throughout", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.be.equal(expected);
    });

    it("should return false when number of characters excluding spaces is odd", () => {
      const expected = false;
      const actual = polybius("44324233521254134", false);
      expect(actual).to.be.equal(expected);
    });
  });
});
