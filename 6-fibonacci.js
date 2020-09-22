const getFibonacci = (num) => {
  if (num <= 2) return 1;
  let previous = 1, current = 1;

  for (let i = 3; i <= num; ++i) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

const getFibonacciWithQueue = (num) => {
  if (num <= 2) return 1;
  const queue = [1, 1];

  for (let i = 3; i <= num; ++i) {
    queue.push(queue[0] + queue[1]);
    queue.shift();
  }
  return queue.pop();
};

// console.log(getFibonacci(5));
// console.log(getFibonacci(6));
// console.log(getFibonacci(3));
console.log(getFibonacciWithQueue(5));
console.log(getFibonacciWithQueue(7));
console.log(getFibonacciWithQueue(1));