const caesar = function(string, value) {

  if (value < 0) {
    return caesar(string, value + 26);
  }

  let newString = "";
  
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    
    if (code >= 97 && code <= 122) {
      let shift = (((code - 97 + value) % 26) + 97);
      newString += String.fromCharCode(shift);
    }
    else if (code >= 65 && code <= 90) {
      let shift = (((code - 65 + value) % 26) + 65);
      newString += String.fromCharCode(shift);
    } else {
      newString += string[i];
    }
   
  }
  return(newString);
}

// Do not edit below this line
module.exports = caesar;

