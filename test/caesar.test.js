// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if the shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("test", 30);
        expect(actual).to.equal(expected);
    });
    
    it("should return the input encoded properly", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should return the input decoded properly", () => {
        const expected = "this is a secret message!";
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });
});