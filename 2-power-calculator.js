const calculatePower = (base, exp) => {
  let result = 1;
  if (exp < 0) {
    for (let i = 0; i > exp; --i) {
      result /= base;
    }
  } else {
    for (let i = 0; i < exp; ++i) {
      result *= base;
    }
  }
  return result;
};

console.log(calculatePower(4, 2)); // 16
console.log(calculatePower(10, -2)); // 0.01
console.log(calculatePower(5, 0)); // 1
console.log(calculatePower(0, 0)); // 1
console.log(calculatePower(0, 5)); // 0
console.log(calculatePower(0, -5)); //undefined
