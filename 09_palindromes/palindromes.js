const palindromes = function (string) {
    let string1 = originalString(string);
    let string2 = reverseString(string);

    if (string1 == string2) {
      return true; 
    } else {
      return false;
    }
};

const originalString = function (string) {
  let stringToArray = [...string];
  let stringNoPunctuation = [];
  
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] == "!" || stringToArray[i] == "," || stringToArray[i] == ".") {
      continue;
    }    stringNoPunctuation.push(stringToArray[i]);
    }
  
  return stringNoPunctuation.join(" ").replaceAll(" ", "").toLowerCase();
}


const reverseString = function (string) {
  let stringToArray = [...string];
  let stringNoPunctuation = [];
  
  for (let i = stringToArray.length - 1; i >= 0; i--) {
    if (stringToArray[i] == "!" || stringToArray[i] == "," || stringToArray[i] == ".") {
      continue;
  }
    stringNoPunctuation.push(stringToArray[i]);
  }
  
  return stringNoPunctuation.join(" ").replaceAll(" ", "").toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
