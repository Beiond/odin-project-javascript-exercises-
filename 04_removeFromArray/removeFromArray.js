const removeFromArray = function(array, ...remove) {
  let result = array.filter(val => !remove.includes(val));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
