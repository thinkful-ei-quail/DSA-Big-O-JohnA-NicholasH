const countSheep = function (n) {
  for (let i = n; i >= 1; --i) {
    console.log(`${i}: Another monkey jumped off the bed`);
  }
  console.log(`All the monkeys are dead`);
};

countSheep(5);