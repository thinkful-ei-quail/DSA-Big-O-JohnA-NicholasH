const reverseString = (str) => str.split('').map((char, index) => str.slice(-index - 1)[0]).join('');
const reverseString2 = (str) => str.split('').reverse().join('');

console.log(reverseString('Bees'));
console.log(reverseString2('Bees'));