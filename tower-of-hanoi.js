const rod1 = ["f", "e", "d", "c", "b", "a"];
const rod2 = [];
const rod3 = [];
let moveCounter = 0;

const solveTowerOfHanoi = function (rodStart, rodMiddle, rodEnd, discsToMove = rodStart.length) {
  if (discsToMove > 0) {
    --discsToMove;
    solveTowerOfHanoi(rodStart, rodEnd, rodMiddle, discsToMove);
    rodEnd.push(rodStart.pop());
    moveCounter++;
    solveTowerOfHanoi(rodMiddle, rodStart, rodEnd, discsToMove);
  }


};

solveTowerOfHanoi(rod1, rod2, rod3);
console.log(moveCounter);