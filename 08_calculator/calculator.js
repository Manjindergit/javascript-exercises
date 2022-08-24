const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
	let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
};

const multiply = function(numbers) {
  let total = 1;
    for (const number of numbers) {
        total *= number;
    }
    return total;
};

const power = function(a,b) {
	
    return Math.pow(a,b);
};

const factorial = function(a) {
  let result=1;
	if(a!==0){
    for (let index = a; index >0; index--) {
      result*=index;
      
    }
    return result;
  }

  else{
    return 1;
  }
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
