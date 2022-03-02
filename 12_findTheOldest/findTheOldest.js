const findTheOldest = function(people) {

    // If the yearOfDeath is not set (still living), set the actual year
    for(let i = 0; i < people.length; i++){
        if (people[i].yearOfDeath === undefined){
            people[i].yearOfDeath = new Date().getFullYear();
        }
    };

    // Check the years lived of everyone and keep the age of the oldest
    const age = people.reduce((oldest, next) => {
        const actualDate = next.yearOfDeath - next.yearOfBirth;
        return (oldest > actualDate ? oldest : actualDate);
    },0);

    // Find the person that has lived that age and return it
    return result = people.find(person => person.yearOfDeath - person.yearOfBirth === age);
};

// Do not edit below this line
module.exports = findTheOldest;
