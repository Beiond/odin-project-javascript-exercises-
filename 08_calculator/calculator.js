const add = function(...num) {
	let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(num) {
	let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
};

const multiply = function(num) {
  let total = 1;
  for (let i = 0; i < num.length; i++) {
    total *= num[i];
  }
  return total;
};

const power = function(num1, num2) {
	let power = 1;
  for (let i = 1; i <= num2; i++) {
    power *= num1;
  }
  return(power);
};

const factorial = function(num1) {
  if (num1 == 0) {
    return 1;
  }

  let factoral = 1;

  for (let i = num1; i >= 1; i--) {
    factoral *= i;
  }
  return(factoral);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
