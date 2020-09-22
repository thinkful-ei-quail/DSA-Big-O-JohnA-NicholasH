const splitString = (str, boundary) => {
  let startIndex = 0;
  let endIndex = str.indexOf(boundary);
  let results = [];
  const increment = boundary.length;

  while (endIndex >= 0) {
    results.push(str.slice(startIndex, endIndex));
    startIndex = endIndex + increment;
    endIndex = str.indexOf(boundary, startIndex);
  }

  results.push(str.slice(startIndex));

  return results;
};

console.log(splitString(',1,,2,', ','));
console.log(splitString('02/20/2020', '/'));
console.log(splitString('02//20//2020', '//'));
