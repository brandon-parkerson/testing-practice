function capitalize(string) {
  let firstLetter = string.charAt(0);
  let firstLetterCap = firstLetter.toUpperCase();
  let remainingString = string.slice(1);

  let capitalizedString = firstLetterCap + remainingString;
  return capitalizedString;
}

function reverseString(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let reverseString = reverseArray.join("");
  return reverseString;
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function caesarCipher(num, string) {
  let alph = [
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
  ];
  // split string
  let chars = string.split("");
  let newArray = [];
  if (chars.includes("!") || chars.includes("?") || chars.includes(",")) {
    
  }

  for (let c in chars) {
    let character = chars[c];
    // If a character is upper case
    if (character == character.toUpperCase()) {
      let charToLower = character.toLowerCase();
      let capCharIndex = alph.indexOf(charToLower);
      let newChar = alph[(capCharIndex + num) % alph.length].toUpperCase();
      newArray.push(newChar);
    } else {
      let charIndex = alph.indexOf(character);

      let newChar = alph[(charIndex + num) % alph.length];

      newArray.push(newChar);
    }
  }

  let newString = newArray.join("");
  return newArray, newString;
}
// TODO: Write function handling special chars 

function special(input) {

}

export { capitalize, reverseString, Calculator, caesarCipher };
