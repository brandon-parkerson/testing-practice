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

  let chars = string.split("");
  let newArray = [];

  for (let c of chars) {
    let character = c;

    // Check if the character is a letter
    if (/[a-zA-Z]/.test(character)) {
      if (character === character.toUpperCase()) {
        let charToLower = character.toLowerCase();
        let capCharIndex = alph.indexOf(charToLower);
        let newChar = alph[(capCharIndex + num) % alph.length].toUpperCase();
        newArray.push(newChar);
      } else {
        let charIndex = alph.indexOf(character);
        let newChar = alph[(charIndex + num) % alph.length];
        newArray.push(newChar);
      }
    } else {
      // If it's not a letter, keep the character as is (e.g., punctuation or spaces)
      newArray.push(character);
    }
  }

  return newArray.join("");
}
function analyzeArray(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  const avg = sum / array.length || 0;
  const min = Math.min(...array);
  const max = Math.max(...array)
  const length = array.length;

  let object = { average: avg, min: min, max: max, length: length };
  return object;
}
export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
