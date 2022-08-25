const findTheOldest = function(obj) {
    let person=obj[0];
   // console.log(person.yearOfDeath);

    for (let index = 0; index < obj.length; index++) {
        if((person.yearOfDeath-person.yearOfBirth)<(obj[index].yearOfDeath-obj[index].yearOfBirth)){
            person=obj[index];
            
        }
        
    }
    console.log(person.name);

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
