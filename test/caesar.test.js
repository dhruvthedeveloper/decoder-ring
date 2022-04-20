// Write your tests here!
const { caesar } = require("../src/caesar.js");
const { expect } = require("chai");

//TESTS FOR ENCODING MESSAGE
describe("caesar()", () => {
  it("should shift the alphabet to the right by the desired input for a single word", () => {
    console.log("***RUNNING***", caesar);
    const expected = "edg";
    const actual = caesar("bad", 3);
    expect(actual).to.be.equal(expected);
  });

  it("should shift the alphabet to the right by the desired input for a full sentence", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.be.equal(expected);
  });

  it("should return false if `shift` value isn't present", () => {
    const actual = caesar("This is a secret message!");
    expect(actual).to.be.false;
  });

  it("should return false if `shift` value is greater than 25", () => {
    const actual = caesar("This is a secret message!", 26);
    expect(actual).to.be.false;
  });

  it("should return false if `shift` value is less than -25", () => {
    const actual = caesar("This is a secret message!", -26);
    expect(actual).to.be.false;
  });
  //test cases to write for: edge case of capital letters
});

//TESTS FOR DECODING MESSAGE
describe("caesar()", () => {
  it("should return decoded message", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.be.equal(expected);
  });

  it("should return false if shift value is invalid", () => {
    const actual = caesar("wklqnixo", -26, false);
    expect(actual).to.be.false;
  });
});
