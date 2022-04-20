// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alphabets = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]; //index starts at 0 ends at 25
    let message = "";
    //check if shift value is valid
    if (shift > 25 || shift < -25 || !shift) {
      //if invalid, return false
      return false;
    }
    //check if encoding or decoding message by checking value
    //of encode parameter
    let inputString = input.toLowerCase();
    // console.log(inputString, "*****", shift, "*****");
    if (encode) {
      for (let index = 0; index < inputString.length; index++) {
        const currentLetter = inputString[index];
        let alphabetIndex = alphabets.indexOf(currentLetter);
        // console.log(alphabetIndex, "*****", currentLetter, '++++');
        if (alphabetIndex === -1) {
          message += currentLetter;
          continue;
        }
        let shiftedIndex = alphabetIndex + shift;
        if (shiftedIndex > 25) {
          shiftedIndex -= alphabets.length;
        } else if (shiftedIndex < 0) {
          shiftedIndex += alphabets.length;
          // if (shift < 0) {
          //   shiftedIndex = alphabets.length + shift + 1;
          // } else {
          //   shiftedIndex = alphabets.length - shift + 1;
          // }
        }
        // console.log(
        //   currentLetter,
        //   "*****",
        //   alphabetIndex,
        //   "++++",
        //   shiftedIndex
        // );
        message += alphabets[shiftedIndex];
      }
      // console.log(message);
    }
    /*ENCODING PROCESS
    //if true, start encoding the message
    //we can maintain a central array of the 26 alphabets
    //iterate through the entire input string
    //ignore capital letters
    //for each letter, find a match in the central array
    //then shift accordingly to get the encoded letter
    //need to consider edge cases where the letter
    //wraps around to the front or back of the alphabet
    */

    if (!encode) {
      for (let index = 0; index < inputString.length; index++) {
        const currentLetter = inputString[index];
        let alphabetIndex = alphabets.indexOf(currentLetter);
        if (alphabetIndex === -1) {
          message += currentLetter;
          continue;
        }
        let shiftedIndex = alphabetIndex - shift;
        if (shiftedIndex < 0) {
          shiftedIndex += alphabets.length;
        } else if (shiftedIndex > 25) {
          shiftedIndex -= alphabets.length;
        }
        // } else if (shiftedIndex > 0) {
        //   shiftedIndex = alphabets.length + shift;
        // }
        message += alphabets[shiftedIndex];
        // console.log(
        //   currentLetter,
        //   "*****",
        //   alphabetIndex,
        //   "++++",
        //   shiftedIndex
        // );
      }
      // console.log(message);
    }
    /*DECODING PROCESS
    //if encode = false, start decoding
    //follow similar process to encoding where you iterate through each word
    //ignore capital letters
    //look for match in central array
    //if you get positive shift, subtract that value to get decoded letter
    //if you get negative shift, add that value to get decoded letter
    //need to consider edge cases that wrap to front or back of alphabet
    */
    //return the encoded/decoded message
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
