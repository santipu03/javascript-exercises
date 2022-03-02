
const fibonacci = function(num) {
    //If the number is negative, return error
    if (num < 0){
        return "OOPS";
    } 
    
    //In case that the argument is a string, we convert it into a number
    num = parseInt(num);

    //We create an array of the initial sequence of Fibonacci
    const result = [1,1];

    //Loop for push to the array the sum of the 2 precedent numbers
    for (let i = 1; i <= num-2; i++){
        result.push(result[i] + result[i - 1]);
    };

    // return the number of the fibonacci sequence that the argument wants
    return result[num - 1];

};

// Do not edit below this line
module.exports = fibonacci;
