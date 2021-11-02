// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const actual = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    // if any characters in "alphabet" repeat, return false
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) return false;
    }
    // if alphabet isn't exactly 26 characters, return false
    if (alphabet.length !== 26) return false;
    // encode
    if (encode) {
      let result = "";
      input = input.toLowerCase();
      for (let j = 0; j < input.length; j++) {
        if (input[j] === " ") {
          result += input[j];
        } else {
          let alphaIndex = (() => {
            for (let k = 0; k < actual.length; k++) {
              if (input[j] === actual[k]) return k;
            }
          })
          result += alphabet[alphaIndex()];
        }
      }
      return result;
    // decode
    } else {
      let result = "";
      input = input.toLowerCase();
      for (let j = 0; j < input.length; j++) {
        if (input[j] === " ") {
          result += input[j];
        } else {
          let alphaIndex = (() => {
            for (let k = 0; k < alphabet.length; k++) {
              if (input[j] === alphabet[k]) return k;
            }
          })
          result += actual[alphaIndex()];
        }
      }
      return result;
    } 
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
