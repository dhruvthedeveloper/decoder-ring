// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //create an object of all alphabets with each alphabet key being blank
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    const substitutionKey = {};
    let output = "";
    const theWholeAlphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < theWholeAlphabet.length; i++) {
      substitutionKey[theWholeAlphabet[i]] = alphabet[i];
    }
    // console.log(substitutionKey);
    const substitutionKeyValues = Object.values(substitutionKey);
    const isDuplicate = substitutionKeyValues.some((item, index) => {
      // console.log(item, '----', index);
      // console.log(substitutionKeyValues.indexOf(item));
      return substitutionKeyValues.indexOf(item) !== index;
    });
    if (isDuplicate) {
      return false;
    }
    if (encode) {
      for (let index = 0; index < input.length; index++) {
        const character = input[index].toLowerCase();
        if (character === " ") {
          output += character;
          continue;
        }
        output += substitutionKey[character];
      }
    } else if (!encode) {
      for (let index = 0; index < input.length; index++) {
        const character = input[index].toLowerCase();
        if (character === " ") {
          output += character;
          continue;
        }
        const matchingKey = Object.keys(substitutionKey).find((key) => substitutionKey[key] === character);
        // console.log(matchingKey);
        output += matchingKey;
      }
    }
    // console.log(input, "*****", alphabet, '++++++', output);
    return output;
    //iterate through each character in `alphabet` string to assign it to the
    //alphabet object.
    //iterate through input and compare to alphabet object
    //encode according to match you find
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
