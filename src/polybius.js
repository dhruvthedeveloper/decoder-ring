// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const encoder = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    const decoder = {
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

    // if (input.length % 2 != 0 && !encode) {
    //   return false;
    // }

    // console.log(input);
    let output = "";
    //check if number of characters excluding is even
    //if not, return false
    //convert string to lowercase
    //DECODING PROCESS
    //only go here if encode = falsy
    //iterate through the entire string
    //consider each pair of numbers as a single unit
    //once you've isolated each pair, compare it decoder
    //return decoded message as a string
    if (!encode) {
      const modifiedInput = input.split(" ").join("");
      // console.log(modifiedInput);
      if (modifiedInput.length % 2 != 0) {
        return false;
      } else {
        // const inputString = input.toLowerCase();
        // console.log(inputString);
        for (let i = 0; i < input.length; i++) {
          if (i === input.length - 1) {
            break;
          }
          const character = input[i];
          if (character === " ") {
            output += character;
            continue;
          }
          const digits = character + input[i + 1];
          i++;

          for (const digit in decoder) {
            if (digit === digits) {
              output += decoder[digit];
            } else {
              continue;
            }
          }
        }
      }
      return output;
    }

    //ENCODING PROCESS
    //only go here if encode = true
    //iterate through entire string
    //compare each letter to the encoder object
    //once you find your match, return the value of the key
    //return encoded message as a string
    if (encode) {
      const inputString = input.toLowerCase();
      // console.log(inputString);
      for (let i = 0; i < inputString.length; i++) {
        const character = inputString[i];
        // console.log(character);
        if (character === " ") {
          output += character;
          continue;
        }
        //doesn't check for edge cases
        for (const letter in encoder) {
          // console.log(letter);
          if (character === letter) {
            output += encoder[letter];
            // flag = true;
          } else {
            continue;
          }
        }
        // if (!flag) {
        //   output += character;
        // }
        // console.log(character, '*****', output);
      }
    }
    // console.log(output);
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
