const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	if (num.length === 0) {
    return 0;
  } else if (num.length === 1){
    return parseInt(num);
  } else {
    let result = 0;
    for (let i = 0; i < num.length; i++){
      result += num[i];
    }
    return result;
  }
  
};

const multiply = function(num) {
  let result = 1;
  for (let i = 0; i < num.length; i++){
    result *= num[i];
  }
  return result;
};

const power = function(num1,num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
	let result = 1;
  for (let i = 1; i <= num; i++){
     result *= i;
  }
  return result;
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
