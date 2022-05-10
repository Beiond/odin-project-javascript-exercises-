const findTheOldest = function(array) {

  function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }

  return array.reduce((current, next) => {
    let currentPerson = getAge(current.yearOfBirth, current.yearOfDeath);
    let nextPerson = getAge(next.yearOfBirth, next.yearOfDeath);
    if (currentPerson < nextPerson) {
      return next;
    } else {
      return current;
    }
  })

  
};

// Do not edit below this line
module.exports = findTheOldest;

