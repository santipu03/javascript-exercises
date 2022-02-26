//explain all in the comments motherfucker

const leapYears = function(num) {
    
    //if num 
    if (num % 100 == 0 && num % 400 == 0){
        return true;
    } else if (num % 100 == 0){
        return false;
    } else if (num % 4 == 0){
        return true;
    }
    return false;


    // this is the solution offered that is much cleaner than mine
    // return num % 4 === 0 && ( num % 100 !== 0 || num % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
