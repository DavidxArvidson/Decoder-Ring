// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if 'alphabet' is not provided", () => {
        const expected = false;
        const actual = substitution("message");
        expect(actual).to.equal(expected);
    });

    it("should return false if any characters in 'alphabet' repeat", () => {
        const expected = false;
        const actual = substitution("message", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });

    it("should return false if 'alphabet' isn't exactly 26 characters", () => {
        const expected = false;
        const actual = substitution("message", "acdbefghijklmnopqrstuvwxzy#@$");
        expect(actual).to.equal(expected);
    });

    it("should return the input encoded properly", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should return the input decoded properly", () => {
        const expected = "message";
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });
});