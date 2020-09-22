const getFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; ++i) {
    result *= i;
  }
  return result;
};

console.log(getFactorial(5));
console.log(getFactorial(3));
console.log(getFactorial(0));