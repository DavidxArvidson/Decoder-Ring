// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = "";
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (encode === false) shift *= -1;
    for (let i = 0; i < input.length; i++) {
      // if string character is a letter
      if (alphabet.includes(input[i].toLowerCase)) {
        let alphaIndex = (function () {
          for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === input[i].toLowerCase) return j;
          }
        });
        let letterIndex = alphaIndex + shift;
        if (letterIndex > 25) letterIndex -= 25;
        if (letterIndex < 0) letterIndex += 25;
        let letter = alphabet[letterIndex];
        result += letter;
      }
      else result += input[i];
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
