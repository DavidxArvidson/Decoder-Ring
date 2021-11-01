// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return false if the number of characters not including spaces is not even", () => {
        const expected = false;
        const actual = polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
    });

    it("should return the input encoded properly", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    });

    it("should return the input decoded properly", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });
});