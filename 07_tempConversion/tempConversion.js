const ftoc = function(fahrenheit) {

    let result = (fahrenheit - 32) * 5 / 9;
    let roundResult = Math.round(result * 10) / 10;
    return roundResult;  

};

const ctof = function(celcius) {

  let result = celcius * (9 / 5) + 32;
  let roundResult = Math.round(result * 10) / 10;
  return roundResult;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
