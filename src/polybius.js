// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // polybius square inserted
  const polyObject = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  function polybius(input, encode = true) {
    // your solution code here
    const polyLetters = Object.values(polyObject);
    const polyId = Object.keys(polyObject);
    // encoding case
    if (encode) {
      const encodedMessage = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        let result = "";
        if (letter === " ") {
          result += letter;
        } else if (letter === "i" || letter === "j") {
          result += "42"
        } else {
          const letterIndex = polyLetters.indexOf(letter);
          result += polyId[letterIndex];
        }
        return result;
      });
      return encodedMessage.join("");
      // decode case
    } else {
      // check for characters being even
      if (input.split(" ").join("").length % 2 !== 0) {
        return false;
      } else {
        let result = "";
        let pairArray = [];
        for (let i = 0; i < input.length; i += 2) {
          if (input.charAt(i) === " " || input.charAt(i + 1) === " ") {
            i -= 1;
            pairArray.push(" ");
          } else {
            let pair = input.slice(i, i + 2);
            pairArray.push(pair);
          }
        }
        const match = pairArray.map((char) => {
          if (char === " ") {
            result = char;
          } else {
              let index = polyId.indexOf(char);
              result = polyLetters[index];
          }
          return result;
        });
        return match.join("");
      }
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
