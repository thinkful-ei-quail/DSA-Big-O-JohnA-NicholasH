const calculateNthTriangularNumber = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum += i;
  }
  return sum;
};

console.log(calculateNthTriangularNumber(5));
console.log(calculateNthTriangularNumber(1));
console.log(calculateNthTriangularNumber(0));
console.log(calculateNthTriangularNumber(-4));