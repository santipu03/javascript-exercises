const ftoc = function(num) {
  const celsius =  (num -= 32) * (5/9);
  const rounded = Math.round(celsius * 10) / 10
  return rounded;

  // or 
  // return Math.round((num - 32) * (5/9) * 10) / 10
};

const ctof = function(num) {
  const far = num * (9/5) + 32;
  const rounded = Math.round(far * 10) / 10
  return rounded;

  //or 
  // return Math.round(((num * 9/5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
