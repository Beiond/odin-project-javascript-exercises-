const fibonacci = function(number) {
     let num1 = 0;
     let num2 = 1; 
     let sum = num1 + num2; 

     if (number < 0) {
         return "OOPS";
     }

    for (let i = 1; i < number; i++) {
      sum = num1 + num2;
      num1 = num2; 
      num2 = sum; 
       
    }
    return sum;


};

// Do not edit below this line
module.exports = fibonacci;
