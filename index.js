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
    add : function (a, b) {
        return a + b;
    },
    subtract : function (a, b) {
        return a - b;
    },
    divide : function (a, b) {
        return a / b;
    },
    multiply : function (a, b) {
        return a * b;
    }
    
}

function caesarCipher(num, string) {
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
}

export { capitalize, reverseString, Calculator, caesarCipher };
