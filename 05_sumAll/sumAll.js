const sumAll = function(num1, num2) {

        let num1Backup = num1;
        let num2Backup = num2;
        let total = 0;
  
        if (typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
      } 

      if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
      }  

      if (num1 < 0 || num2 < 0) {
          return "ERROR";
      }

       
         if (num1 > num2) {
         num1 = num2Backup;
         num2 = num1Backup;
        }
        
        for (let i = num1; i <= num2; i++) {
          total += i;
        }
      
        return total;

};

// Do not edit below this line
module.exports = sumAll;
